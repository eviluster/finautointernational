// src/core/data/events.ts
import { CalendarStateEnum } from "@/core/enums/CalendarStateEnum";

/**
 * Eventos de ejemplo con un solo día y rango horario
 */
export interface EventData {
  id: string;
  fecha: Date;
  inicio: number;
  fin?: number;
  fullDay: boolean;
  state: CalendarStateEnum;
}

const today = new Date();
// Helper para crear fechas con hora
function makeFechaWithHour(date: Date, hour: number): Date {
  const d = new Date(date);
  d.setHours(hour, 0, 0, 0);
  return d;
}

const events: EventData[] = [
  {
    id: "1",
    fecha: today,
    inicio: 9,
    fin: 11,
    fullDay: false,
    state: CalendarStateEnum.Confirmed,
  },
  {
    id: "2",
    fecha: today,
    inicio: 13,
    fin: 14,
    fullDay: false,
    state: CalendarStateEnum.Pending,
  },
  {
    id: "3",
    fecha: today,
    inicio: 0,
    fullDay: true,
    state: CalendarStateEnum.Completed,
  },
  {
    id: "4",
    fecha: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
    inicio: 10,
    fin: 12,
    fullDay: false,
    state: CalendarStateEnum.Cancelled,
  },
];

export default events;
