/**
 * Marlin 3D Printer Firmware
 * Copyright (c) 2021 MarlinFirmware [https://github.com/MarlinFirmware/Marlin]
 *
 * Based on Sprinter and grbl.
 * Copyright (c) 2011 Camiel Gubbels / Erik van der Zalm
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */
#include "../../inc/MarlinConfig.h"

#if ENABLED(SCREENSHOT)

#include "../gcode.h"
#include "../../lcd/marlinui.h"
#include "screenshot.h"

Screenshot screenshot;

void Screenshot::on_display_update(u8g_pb_t* pb) {
  switch(_state) {
    case ScreenshotState::WAIT_PAGE_0:
      if(pb->p.page != 0) {
        break;
      }
      _state = ScreenshotState::DUMPING;
      SERIAL_ECHOLNPGM("P1");
      SERIAL_ECHOLNPGM("", pb->width, " ", pb->p.total_height);
      break;
    case ScreenshotState::DUMPING:
      if(pb->p.page == 0) {
        _state = ScreenshotState::NOT_CAPTURING;
      }
      break;
    default:
    case ScreenshotState::NOT_CAPTURING:
      break;
  }

  if(_state == ScreenshotState::DUMPING) {
    uint8_t *buf = ((uint8_t*)pb->buf);
    uint8_t *end = buf + pb->width / 8 * pb->p.page_height;
    u8g_uint_t i = 0;

    while(buf < end) {
      for(int8_t y = 7; y >= 0; y--) {
        (*buf & (1 << y)) ? SERIAL_CHAR('1') : SERIAL_CHAR('0');
      }
      i+=8;

      if(i == pb->width) {
        SERIAL_CHAR('\n');
        i = 0;
      }
      buf++;
    }
  }
}

/**
 * M257: Screenshot
 */
void GcodeSuite::M257() {
  screenshot.request();
  if (parser.seen('N')) {
    ui.refresh(LCDVIEW_REDRAW_NOW);
  }
}

#endif // ENABLED(SCREENSHOT)
