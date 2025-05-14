<template>
  <div>
    <button
      type="button"
      class="btn btn-primary mb-3"
      @click="openAddModal(new Date())"
    >
      <KTIcon icon-name="plus" icon-class="fs-2" />
      Añadir evento
    </button>

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
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import eventsData from "@/core/data/events";
import NewEventModal from "@/components/modals/forms/otros/NewEventModal.vue";
import EditEventModal from "@/components/modals/forms/otros/EditEventModal.vue";
import { Modal } from "bootstrap";
import type { CalendarStateEnum } from "@/core/enums/CalendarStateEnum";

/**
 * Evento con un solo día (fecha) y rango horario (inicio, fin)
 */
type EventData = {
  id: string | number;
  fecha: Date; // fecha del evento
  inicio: number; // hora de inicio (0-23)
  fin?: number; // hora fin, opcional
  fullDay: boolean; // evento de día completo
  state: CalendarStateEnum; // estado del evento
};

export default defineComponent({
  name: "CalendarApp",
  components: { FullCalendar, NewEventModal, EditEventModal },
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

    // Convertir EventData en EventInput para FullCalendar
    function toCalendarInput(
      e: Omit<EventData, "id"> & { id?: string | number },
    ) {
      const start = new Date(e.fecha);
      start.setHours(e.inicio, 0, 0, 0);
      const end =
        e.fin != null
          ? (() => {
              const d = new Date(e.fecha);
              d.setHours(e.fin, 0, 0, 0);
              return d;
            })()
          : undefined;
      return {
        // Forzamos id a string:
        id: e.id?.toString(),
        title: e.state.toString(),
        start,
        end,
        allDay: e.fullDay,
        extendedProps: { state: e.state },
      };
    }

    function onAddEvent(payload: Omit<EventData, "id">) {
      const api = calendarRef.value!.getApi();
      api.addEvent(toCalendarInput({ ...payload, id: undefined }));
      if (addModalInstance) addModalInstance.hide();
    }

    function onUpdateEvent(payload: EventData) {
      const api = calendarRef.value!.getApi();
      const evt = api.getEventById(String(payload.id));
      if (evt) {
        const input = toCalendarInput(payload);
        evt.setStart(input.start!);
        if (input.end) evt.setEnd(input.end);
        evt.setAllDay(input.allDay);
        evt.setExtendedProp("state", payload.state);
        evt.setProp("title", payload.state.toString());
      }
      if (editModalInstance) editModalInstance.hide();
    }

    function handleDateClick(info: any) {
      const api = calendarRef.value!.getApi();
      const clickDate = info.date;

      // 1) Filtrar todos los eventos cuya fecha de inicio coincida con la casilla clicada
      const dayEvents = api.getEvents().filter((e) => {
        const s = e.start!;
        return (
          s.getFullYear() === clickDate.getFullYear() &&
          s.getMonth() === clickDate.getMonth() &&
          s.getDate() === clickDate.getDate()
        );
      });

      // 2) Si hay al menos uno, abrimos el modal de edición con el primer evento
      if (dayEvents.length > 0) {
        const e = dayEvents[0];
        const fecha = new Date(e.start!);
        const inicio = e.start!.getHours();
        const fin = e.end?.getHours();
        const fullDay = e.allDay;
        const state = e.extendedProps.state as CalendarStateEnum;

        openEditModal({
          id: String(e.id), // convertimos a string para cumplir el tipo
          fecha,
          inicio,
          fin,
          fullDay,
          state,
        });
      }
      // 3) Si no hay eventos ese día, abrimos el modal de creación
      else {
        openAddModal(clickDate);
      }
    }

    function handleEventClick(clickInfo: any) {
      const e = clickInfo.event;
      openEditModal({
        id: String(e.id), // ← forzamos a string
        fecha: new Date(e.start!),
        inicio: e.start!.getHours(),
        fin: e.end?.getHours(),
        fullDay: e.allDay,
        state: (e.extendedProps as any).state as CalendarStateEnum,
      });
    }

    const calendarOptions = {
      plugins: [timeGridPlugin, interactionPlugin],
      initialView: "timeGridWeek",
      headerToolbar: { left: "prev,next today", center: "title", right: "" },
      initialDate: new Date(),
      height: "auto",
      events: eventsData.map((ev) => toCalendarInput(ev)),
      dateClick: handleDateClick,
      eventClick: handleEventClick,
    };

    onMounted(() => nextTick(() => calendarRef.value!.getApi().updateSize()));

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

<style scoped lang="scss">
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
