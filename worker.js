export default {
  async fetch(request) {
    const videoUrl = 'https://zxmqva22v53mlvaeypxc7nyw7ucxf5dat53l2ngf2umq6kiftn3a.arweave.net/zdkKg1qvdsXUBMPuL7cW_QVy9GCfdr00xdUZDykFm3Y';
    const videoResponse = await fetch(videoUrl);

    return new Response(videoResponse.body, {
      status: 200,
      headers: {
        'Content-Type': 'video/mp4',
        'Cache-Control': 'public, max-age=31536000',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }
}
