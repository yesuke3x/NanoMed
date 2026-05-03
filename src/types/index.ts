/* ─── Global Type Definitions ─────────────────────────────────
   TODO: расширьте типы по мере разработки
   ───────────────────────────────────────────────────────────── */

export interface Product {
  id: string;
  name: string;
  price: string;
  priceRaw: number;
  category: string;
  shortDesc: string;
  fullDesc?: string;       // TODO: заполнить
  imageUrl?: string;       // TODO: добавить изображения
  specs: Spec[];
  badge?: string;
}

export interface Spec {
  label: string;
  value: string;
}

export interface Patient {
  id: string;
  nanobotId: string;
  status: "normal" | "warning" | "critical";
  biomarker: number;
  lastUpdated: Date;
  // TODO: добавьте дополнительные поля (имя, диагноз, лечащий врач)
}

export interface AiTool {
  name: string;
  role: string;
  color: string;
  contribution: string;
  url?: string; // TODO: добавьте официальный URL инструмента
}
