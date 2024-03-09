#pragma once

#if ENABLED(SCREENSHOT)
#include <U8glib-HAL.h>
#include "../../core/serial.h"

enum class ScreenshotState : uint8_t {
  NOT_CAPTURING,
  WAIT_PAGE_0,
  DUMPING
};

class Screenshot {
public:
  Screenshot() : _state(ScreenshotState::NOT_CAPTURING) {}

  void request(bool immediately = false) {
    _state = ScreenshotState::WAIT_PAGE_0;
    if(immediately)
      ui.refresh(LCDVIEW_CALL_REDRAW_NEXT);
  }

  void on_display_update(u8g_pb_t* pb);
private:
  ScreenshotState _state;
};


extern Screenshot screenshot;

#endif
