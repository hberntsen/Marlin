
class CanvasWriter {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d", { alpha: false });
    this.scale = 11;
    this.pixels_pad = 2;
    this.clear();
  }

  clear() {
    this.context.fillStyle = "white";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  update(width, height, pixels) {
    this.canvas.width = (width + 2 * this.pixels_pad) * this.scale;
    this.canvas.height = (height + 2 * this.pixels_pad) * this.scale;
    this.clear();

    let x = 0;
    let y = 0;

    this.context.beginPath();
    for(const pixel of pixels) {
      if(pixel == '1') {
        this.context.rect((x + this.pixels_pad )*this.scale, (y + this.pixels_pad)*this.scale, this.scale - 1, this.scale - 1);
      }

      x+=1;
      if(x == width) {
        y+=1;
        x=0;
      }
    }
    this.context.fillStyle = "black";
    this.context.fill();
  }

};

let connectButton = document.getElementById('connect');
let screenshotButton = document.getElementById('screenshot');
let continuousScreenshot = document.getElementById('continuous_screenshot');
let canvas = new CanvasWriter(document.getElementById('screen'));

canvas.update(128, 64, "00000000000001110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011100000000000000000000000000000100010010000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000100100000000000000000000000001001101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000010011010100000000000000000000000010101001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010010000000000000000000000000110010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001100100000000000000000000000000001000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010001000000000000000000000000000001110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011111111000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011000000110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001001000000000000000000000000000000000000000000000000000000000000000000000000000000000000001111111111111111110000000000000000000001100000000000000000000000000000000000000000000000000000000000000000000000000000000000000011111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000110000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000001100000000000000000000000011000010000010000000000000000000000000000000000000000000000000000000000000000000000000000000000110000100000100000000000000000000010001000001010000000000000000000000000000000000000000000000000000000000000000000000000000000000100010000010100000000000000000000100011110001000000000000000000000000000000000000000000000000000000000000000000000000000000000001000111100010000000000000000000001000100010000000000000000000000000000000000000000000000000000000000000000000000000000000000000010001000100000000000000000000000010001000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000100010001000000000000000000000001110001110000000000000000000000000000000000000000000000000000000000000000000000000000000000000011100011100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001100100010000000000000001111100111000000010001000000000000000000100011100000001111100000000000000000000001110000000001110000000011001000100000000000000010000010001000000100010000000000000000011001000100000000001000000000000000000000100010000000100010000000110001010000000000000000111100100110000000101000000000000000001010010011000000000100000000000000000000001000100000000000100000001100001000000000001111100000101010100000000100000000000111110100100101010000000010000000000000000000000001111000000000010000000011000101000000000000000000001011001000000001000000000000000001111101100100000001000000000000000000000000000010000000001000000000110010001000000000000000100010100010000000010000000000000000000010010001000000100000000000000000000000000001000110000100000000001100100010000000000000000111000111000000000100000000000000000000100011100000001111100000000000000000000001100001100011111000000011000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000111000111001100100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011011000001100010001010001011001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011011000001000100110100110000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011011000010001010101010100010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001101100000100011001011001001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000110110000001000100010100010100110000000000000000000111111111111111111111111111111111111111111111111111111111111111111111111110000000000000111000111000111001001100000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000111111111111111111111111111111111111111111111111111111111111111111111111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100010000000001000000000000000000000000000001000000000001000000000000000000000000000000000000000000000000000000010000000000000001101100000000010000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000100000000000000010101001110011111011111001110011110010110001100010110011111001110010110000000001110001110010110001110001110001111000000000000000100010100010001000000100100010100010110010001000110010001000100010110010000000100010100010110010100010100010100010000000000000001000101111000010000010001000101000101000000010001000100010001111001000000000001000101111001000001111001111001000100000000000000010001010000000100001000010001010001010000000100010001000100010000010000000000010001010000010000010000010000010001000000000000000100010011100000110111110011100111100100000011100100010000110011100100000000000011110011100100000011100011100011110000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000001110000000000000000000000000000000000000000000000");
let port = null;

async function connect() {
  port = await navigator.serial.requestPort();
  await port.open({'baudRate': 115200});

  //while (port.readable) {
      const decoder = new TextDecoderStream();
      const reader = port.readable.pipeThrough(new TextDecoderStream()).getReader();
      //console.log(reader);
      //for ( const chunk of reader) {
        //console.log("Chunk", chunk);
      //}
      //const decoder = new TextDecoder();
      let buffer = "";

      // decoder state
      let state = "WAIT_P1";
      let screen_size;
      let pixels = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          // |reader| has been canceled.
          break;
        }
        buffer += value;

        let lines = buffer.split('\n');
        if (lines.length > 0) {
          for (const line of lines.slice(0, -1)) {
            console.log("Serial: ", line);

            if(state === "RECV_IMG_DATA") {
              pixels += line.replace(" ", "").replace("ok","");
              if(pixels.length >= screen_size[0]*screen_size[1]) {
                console.log("Pixels length", pixels.length);
                console.log("Pixels", pixels);
                canvas.update(screen_size[0], screen_size[1], pixels);
                pixels = "";
                state = "WAIT_P1";
                if(continuousScreenshot.checked) {
                  requestScreenshot();
                }
              }
            }
            if(state === "WAIT_SIZE") {
              screen_size = line.split(' ').map(Number);
              state = "RECV_IMG_DATA";
            }
            if(line === "P1") {
              state = "WAIT_SIZE";
            }
            buffer = lines[lines.length - 1];
          }
        }
        //console.log("Serial: ", decoder.decode(value));
      }
  //}
}

async function requestScreenshot(now) {
  if(port) {
    const encoder = new TextEncoder();
    const writer = port.writable.getWriter();
    try {
      const cmd = `M257${now ? ' N1' : ''}\n`;
      console.log(cmd);
      await writer.write(encoder.encode(cmd));
    } finally {
      writer.releaseLock();
    }
  }
}


connectButton.addEventListener("click", () => {
  connect();
});

screenshotButton.addEventListener("click", () => {
  requestScreenshot(true);
});