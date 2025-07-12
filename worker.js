export default {
  async fetch(request) {
    const arweaveUrl = 'https://zxmqva22v53mlvaeypxc7nyw7ucxf5dat53l2ngf2umq6kiftn3a.arweave.net/zdkKg1qvdsXUBMPuL7cW_QVy9GCfdr00xdUZDykFm3Y';
    const arweaveResponse = await fetch(arweaveUrl);
    const contentType = arweaveResponse.headers.get('content-type') || 'video/mp4';
    return new Response(arweaveResponse.body, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  },
};
