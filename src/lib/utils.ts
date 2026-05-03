import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Форматирует число как цену в тенге
 * TODO: расширьте функцию для других валют
 */
export function formatPrice(amount: number, currency = "₸"): string {
  return new Intl.NumberFormat("ru-KZ").format(amount) + " " + currency;
}

/**
 * Форматирует дату на русском языке
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}
