<template>
  <div>
    <!-- <button
      type="button"
      class="btn btn-primary mb-3"
      @click="openAddModal(new Date())"
    >
      <KTIcon icon-name="plus" icon-class="fs-2" />
      Añadir evento
    </button> -->

    <FullCalendar
      ref="calendarRef"
      class="demo-app-calendar"
      :options="calendarOptions"
    />

    <!-- Modals (API Bootstrap) -->
    <NewEventModal :initial-date="selectedDate" @save="onAddEvent" />
    <EditEventModal
      v-if="selectedEvent"
      :visible="selectedEvent !== null"
      :event="selectedEvent"
      @update-event="onUpdateEvent"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted, nextTick } from "vue";
  import FullCalendar from "@fullcalendar/vue3";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import timeGridPlugin from "@fullcalendar/timegrid";
  import listPlugin from "@fullcalendar/list";
  import interactionPlugin from "@fullcalendar/interaction";
  import eventsData, { TODAY } from "./core/data/events";
  import { Modal } from "bootstrap";

  type EventData = {
    id: string | number;
    title: string;
    description?: string;
    location?: string;
    allDay: boolean;
    start: Date;
    end?: Date;
  };

  export default defineComponent({
    name: "CalendarApp",
    components: { FullCalendar },
    setup() {
      const calendarRef = ref<InstanceType<typeof FullCalendar> | null>(null);
      const selectedDate = ref<Date>(new Date());
      const selectedEvent = ref<EventData | null>(null);
      let addModalInstance: InstanceType<typeof Modal> | null = null;
      let editModalInstance: InstanceType<typeof Modal> | null = null;

      function openAddModal(date: Date) {
        selectedDate.value = date;
        const el = document.getElementById("kt_modal_add_event")!;
        addModalInstance = new Modal(el);
        addModalInstance.show();
      }

      function openEditModal(event: EventData) {
        selectedEvent.value = event;
        const el = document.getElementById("kt_modal_edit_event")!;
        editModalInstance = new Modal(el);
        editModalInstance.show();
      }

      function onAddEvent(payload: Omit<EventData, "id">) {
        const api = calendarRef.value!.getApi();
        api.addEvent({ ...payload });
        if (addModalInstance) addModalInstance.hide();
      }

      function onUpdateEvent(payload: EventData) {
        const api = calendarRef.value!.getApi();
        const evt = api.getEventById(String(payload.id));
        if (evt) {
          evt.setProp("title", payload.title);
          evt.setStart(payload.start);
          evt.setEnd(payload.end || payload.start);
          evt.setAllDay(payload.allDay);
        }
        if (editModalInstance) editModalInstance.hide();
      }

      function handleDateClick(info: any) {
        const api = calendarRef.value!.getApi();
        const clickedDate = info.date;
        const eventsOnDay = api.getEvents().filter((e) => {
          const s = e.start!;
          return (
            s.getFullYear() === clickedDate.getFullYear() &&
            s.getMonth() === clickedDate.getMonth() &&
            s.getDate() === clickedDate.getDate()
          );
        });
        if (eventsOnDay.length > 0) {
          const e = eventsOnDay[0];
          openEditModal({
            id: e.id,
            title: e.title,
            description: (e.extendedProps as any).description,
            location: (e.extendedProps as any).location,
            allDay: e.allDay,
            start: e.start!,
            end: e.end || e.start!,
          });
        } else {
          openAddModal(clickedDate);
        }
      }

      function handleEventClick(clickInfo: any) {
        const e = clickInfo.event;
        openEditModal({
          id: e.id,
          title: e.title,
          description: (e.extendedProps as any).description,
          location: (e.extendedProps as any).location,
          allDay: e.allDay,
          start: e.start!,
          end: e.end || e.start!,
        });
      }

      const calendarOptions = {
        plugins: [
          // Si solo vas a mostrar la semana horaria, solo necesitas timeGridPlugin
          timeGridPlugin,
          interactionPlugin,
        ],
        initialView: "timeGridWeek", // ← Aquí se fija la vista por defecto
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "", // ← Sin botones para cambiar de vista
        },
        contentHeight: 600,
        initialDate: TODAY,
        navLinks: true,
        selectable: true,
        selectMirror: true,
        editable: true,
        dayMaxEvents: true,
        events: eventsData,
        dateClick: handleDateClick,
        eventClick: handleEventClick,
      };

      onMounted(() => {
        nextTick(() => {
          const api = calendarRef.value!.getApi();
          api.render(); // vuelve a pintar
          api.updateSize(); // reajusta alturas y anchuras
        });
      });

      return {
        calendarOptions,
        calendarRef,
        selectedDate,
        selectedEvent,
        onAddEvent,
        onUpdateEvent,
        openAddModal,
      };
    },
  });
</script>

<style scoped>
  /* Incluye los estilos de FullCalendar */

  .fc .fc-button {
    padding: 0.75rem 1.25rem;
    box-shadow: none !important;
    border: 0 !important;
    border-radius: 0.475rem;
    vertical-align: middle;
    font-weight: 500;
    text-transform: capitalize;
  }
</style>
