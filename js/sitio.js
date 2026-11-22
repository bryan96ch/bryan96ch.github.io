(() => {
    document.documentElement.classList.add('js');

    const flotante = document.querySelector('.whatsapp-flotante');
    const portada = document.querySelector('.portada');
    if (flotante && portada && 'IntersectionObserver' in window) {
        new IntersectionObserver(([e]) => flotante.classList.toggle('visible', !e.isIntersecting)).observe(portada);
    } else if (flotante) {
        flotante.classList.add('visible');
    }

    const desplegables = document.querySelectorAll('details.productos, details.menu-movil');

    document.addEventListener('click', (e) => {
        desplegables.forEach((d) => {
            if (d.open && !d.contains(e.target)) d.open = false;
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        desplegables.forEach((d) => {
            if (d.open) {
                d.open = false;
                d.querySelector('summary').focus();
            }
        });
    });

    desplegables.forEach((d) => {
        d.addEventListener('focusout', (e) => {
            if (d.open && e.relatedTarget && !d.contains(e.relatedTarget)) d.open = false;
        });
    });

    const mapa = document.querySelector('.mapa');
    if (!mapa) return;
    const leyenda = mapa.querySelector('.leyenda');
    const inicial = leyenda.innerHTML;
    const estaciones = mapa.querySelectorAll('.estacion');
    let recorrido = null;

    const mostrar = (estacion) => {
        leyenda.innerHTML = '';
        const titulo = document.createElement('strong');
        titulo.textContent = estacion.dataset.nombre;
        leyenda.append(titulo, ' ' + estacion.dataset.texto);
    };

    const detenerRecorrido = () => {
        clearInterval(recorrido);
        recorrido = null;
        mapa.classList.remove('js-intro');
        mapa.removeAttribute('data-encendidas');
    };

    if (window.matchMedia('(hover: none)').matches) {
        estaciones.forEach((estacion) => {
            const linea = estacion.getAttribute('class').match(/e-(\w+)/)[1];
            estacion.addEventListener('click', (e) => {
                if (mapa.dataset.activa === linea) return;
                e.preventDefault();
                detenerRecorrido();
                mapa.dataset.activa = linea;
                mostrar(estacion);
                leyenda.append(' Toca otra vez para abrirlo.');
            });
        });
        document.addEventListener('click', (e) => {
            if (!mapa.contains(e.target)) {
                mapa.removeAttribute('data-activa');
                leyenda.innerHTML = inicial;
            }
        });
    }

    estaciones.forEach((estacion) => {
        const entrar = () => { if (mapa.dataset.activa) return; detenerRecorrido(); mostrar(estacion); };
        const salir = () => { if (!mapa.dataset.activa) leyenda.innerHTML = inicial; };
        estacion.addEventListener('mouseenter', entrar);
        estacion.addEventListener('focus', entrar);
        estacion.addEventListener('mouseleave', salir);
        estacion.addEventListener('blur', salir);
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const orden = ['inv', 'con', 'cli', 'st'];
    const iniciar = () => {
        if (!mapa.classList.contains('js-intro')) return;
        const encendidas = [];
        recorrido = setInterval(() => {
            if (encendidas.length === orden.length) {
                detenerRecorrido();
                leyenda.innerHTML = inicial;
                return;
            }
            const linea = orden[encendidas.length];
            encendidas.push(linea);
            mapa.dataset.encendidas = encendidas.join(' ');
            mostrar(mapa.querySelector('.e-' + linea));
        }, 900);
    };

    if ('IntersectionObserver' in window) {
        mapa.classList.add('js-intro');
        const vigia = new IntersectionObserver((entradas) => {
            if (entradas[0].isIntersecting) {
                vigia.disconnect();
                setTimeout(iniciar, 300);
            }
        }, { threshold: 0.3 });
        vigia.observe(mapa);
    }
})();
