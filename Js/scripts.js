const pointer = document.getElementById('point')

document.addEventListener("mousemove", (e) => { 
    console.log(`No eixo X: ${e.x}`)
    console.log(`No eixo Y: ${e.y}`) 
    pointer.style.left = `${e.pageX - 10}px`;
    pointer.style.top = `${e.pageY - 10}px`;
});

/*
    Testando a ideia de fazer a animação seguir
    o mouse pela obtenção das suas coordenadas
    Ps. O console.log não é essencial
    Status: Sucesso
*/