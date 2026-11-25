function svg(body: string, size = 18, cls = ''): string {
  return `<svg class="icon ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}

export const ICONS = {
  home: (size = 18) =>
    svg('<path d="M3 10.5L12 3l9 7.5" /><path d="M5 9.5V20h14V9.5" /><path d="M9.5 20v-6h5v6" />', size),
  playSolid: (size = 16) =>
    `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="6,4 20,12 6,20" /></svg>`,
  film: (size = 18) =>
    svg('<rect x="2" y="4" width="20" height="16" rx="2.5" /><path d="M7 4v16" /><path d="M17 4v16" /><path d="M2 12h20" /><path d="M2 8h5" /><path d="M2 16h5" /><path d="M17 8h5" /><path d="M17 16h5" />', size),
  grid: (size = 18) =>
    svg('<rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />', size),
  download: (size = 18) =>
    svg('<path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />', size),
  sun: (size = 17) =>
    svg('<circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="M4.93 4.93l1.41 1.41" /><path d="M17.66 17.66l1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="M6.34 17.66l-1.41 1.41" /><path d="M19.07 4.93l-1.41 1.41" />', size),
  moon: (size = 17) =>
    svg('<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />', size),
  monitor: (size = 18) =>
    svg('<rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />', size),
  smartphone: (size = 18) =>
    svg('<rect x="6" y="2" width="12" height="20" rx="2" /><path d="M12 18h.01" />', size),
  globe: (size = 18) =>
    svg('<circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />', size),
  cube: (size = 18) =>
    svg('<path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" /><path d="M12 22V12" /><path d="M20.5 7L12 12 3.5 7" />', size),
  external: (size = 15) =>
    svg('<path d="M15 3h6v6" /><path d="M10 14L21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />', size),
  close: (size = 18) =>
    svg('<path d="M18 6L6 18" /><path d="M6 6l12 12" />', size),
  arrowLeft: (size = 18) =>
    svg('<path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />', size),
  arrowRight: (size = 18) =>
    svg('<path d="M5 12h14" /><path d="M12 5l7 7-7 7" />', size),
  chevronDown: (size = 16) =>
    svg('<path d="M6 9l6 6 6-6" />', size),
  copy: (size = 15) =>
    svg('<rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />', size),
  check: (size = 15) =>
    svg('<path d="M20 6L9 17l-5-5" />', size),
  menu: (size = 20) =>
    svg('<path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" />', size),
  messageSquare: (size = 18) =>
    svg('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />', size),
  refresh: (size = 15) =>
    svg('<path d="M23 4v6h-6" /><path d="M1 20v-6h6" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" /><path d="M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />', size),
};
