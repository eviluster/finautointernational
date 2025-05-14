document.getElementById('shareButton').addEventListener('click', async () => {
    const file = new File(['Este es el contenido de tu PDF'], 'archivo.pdf', {
      type: 'application/pdf',
    });

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Compartir PDF',
          text: 'Aquí tienes un archivo PDF para compartir.',
          files: [file],
        });
        console.log('Archivo compartido con éxito');
      } catch (error) {
        console.error('Error al compartir:', error);
      }
    } else {
      alert('La funcionalidad de compartir no está disponible en este navegador.');
    }
  });