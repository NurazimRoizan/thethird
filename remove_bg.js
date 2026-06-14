import { Jimp } from 'jimp';

async function processImage() {
  try {
    const image = await Jimp.read('C:\\Users\\rnura\\.gemini\\antigravity\\brain\\9a43c1dd-823e-42f0-afe4-4dfc4c311925\\media__1781410464579.jpg');
    
    image.scan((x, y, idx) => {
      const r = image.bitmap.data[idx + 0];
      const g = image.bitmap.data[idx + 1];
      const b = image.bitmap.data[idx + 2];
      
      // If it's very close to white, make it transparent
      if (r > 230 && g > 230 && b > 230) {
        image.bitmap.data[idx + 3] = 0;
      }
    });

    await image.write('C:\\coffeez\\thethird\\public\\smiley.png');
    console.log("Image processed and saved to public/smiley.png");
  } catch (error) {
    console.error("Error processing image:", error);
  }
}

processImage();
