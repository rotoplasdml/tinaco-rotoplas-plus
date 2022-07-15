jQuery(document).ready(function($){
	console.log('TRP:ready')
	//console.log(THREE)
	/* ==============================================================
	/*	SMOOTH SCROLLING
	/* ============================================================== */
		$("a").on('click', function(event) {
			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();
				// Store hash
				var hash = this.hash;
				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function(){
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				});
			} // End if
		});
	/* smooth scrolling */

	/* ==============================================================
	/*	HIDE MENU
	/* ============================================================== */
		var menu = document.getElementById('navegacion')
		//var logo = document.getElementById('navegacion-logo')
		var logoMovil = document.getElementById('navegacion-logo-movil')
		var prevScrollpos = window.pageYOffset
		window.onscroll = function() {
			if (window.pageYOffset > 0) {
				//menu.classList.add('scrolled-alternate')
				//logo.classList.remove('logo-oculto')
				//logoMovil.classList.remove('logo-oculto')
			} else {
				//menu.classList.remove('scrolled-alternate')
				//logo.classList.add('logo-oculto')
				//logoMovil.classList.add('logo-oculto')
			}
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				//menu.classList.remove('scrolled-down')
				//menu.classList.add('scrolled-up')
			} else {
				//menu.classList.remove('scrolled-up')
				//menu.classList.add('scrolled-down')
			}
			prevScrollpos = currentScrollPos
		}

		var toggler = document.getElementById('navegacion-toggler')
		toggler.onclick = function() {
			if ( window.pageYOffset == 0 && menu.classList.contains('scrolled-alternate') ) {
				menu.classList.remove('scrolled-alternate')
			} else {
				menu.classList.add('scrolled-alternate')
			}
			
		}
	/* hide menu */

	/* ==============================================================
	/*	GOOGLE SHEETS
	/* ============================================================== */
		//https://script.google.com/macros/s/AKfycbxWc4_hlG8PV_MklSvFb7CpbGFJuyJXZoaxynp5tAz_ykFKdbLfEfGEBxMFlV8v9IKT/exec
		const scriptURL = 'https://script.google.com/macros/s/AKfycbxWc4_hlG8PV_MklSvFb7CpbGFJuyJXZoaxynp5tAz_ykFKdbLfEfGEBxMFlV8v9IKT/exec'
		const form = document.forms['form-tinaco-rotoplas-plus']
		form.addEventListener('submit', e => {
			e.preventDefault()
			var today = new Date();
			var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
			var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
			document.getElementById('fecha').value = date
			document.getElementById('hora').value = time
			fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => console.log('Success!', response))
				.then(function(){
					document.getElementById("form-tinaco-rotoplas-plus").reset()
					document.getElementById('form-thank').classList.remove('d-none')
				})
				.catch(error => console.error('Error!', error.message))
			//e.currentTarget.submit()
		})
	/* google sheets */

	/* ==============================================================
	/*	SCROLLING ANIMATION
	/* ============================================================== */
		gsap.registerPlugin(ScrollTrigger);
		ScrollTrigger.matchMedia({
			"(min-width: 992px)": function(){
				let tl = gsap.timeline({
					scrollTrigger: {
						//markers: true,
						trigger: "#beneficios",
						pin: true,
						pinSpacing: true,
						start: "center center",
						end: "+=400%",
						scrub: 1
					}
				})
				tl.addLabel("start")
				.from("#beneficios-nodo-1 .beneficios-nodo-imagen", {duration: 1, x: -50, autoAlpha: 0})
				.from("#beneficios-nodo-principal-1", {duration: 1, autoAlpha: 0}, "<")
				.from("#beneficios-nodo-1 .beneficios-nodo-texto", {duration: 1, x: -50, autoAlpha: 0}, "-=0.5")
				.to("#beneficios-nodo-principal-1", {duration: 1, autoAlpha: 0})

				.from("#beneficios-nodo-2 .beneficios-nodo-imagen", {duration: 1, x: -50, autoAlpha: 0})
				.from("#beneficios-nodo-principal-2", {duration: 1, autoAlpha: 0}, "<")
				.from("#beneficios-nodo-2 .beneficios-nodo-texto", {duration: 1, x: -50, autoAlpha: 0}, "-=0.5")
				.to("#beneficios-nodo-principal-2", {duration: 1, autoAlpha: 0})

				.from("#beneficios-nodo-3 .beneficios-nodo-imagen", {duration: 1, x: -50, autoAlpha: 0})
				.from("#beneficios-nodo-principal-3", {duration: 1, autoAlpha: 0}, "<")
				.from("#beneficios-nodo-3 .beneficios-nodo-texto", {duration: 1, x: -50, autoAlpha: 0}, "-=0.5")
				.to("#beneficios-nodo-principal-3", {duration: 1, autoAlpha: 0})

				.from("#beneficios-nodo-4 .beneficios-nodo-imagen", {duration: 1, x: -50, autoAlpha: 0})
				.from("#beneficios-nodo-principal-4", {duration: 1, autoAlpha: 0}, "<")
				.from("#beneficios-nodo-4 .beneficios-nodo-texto", {duration: 1, x: -50, autoAlpha: 0}, "-=0.5")
				.to("#beneficios-nodo-principal-4", {duration: 1, autoAlpha: 0})

				.from("#beneficios-nodo-5 .beneficios-nodo-imagen", {duration: 1, x: 50, autoAlpha: 0})
				.from("#beneficios-nodo-principal-5", {duration: 1, autoAlpha: 0}, "<")
				.from("#beneficios-nodo-5 .beneficios-nodo-texto", {duration: 1, x: 50, autoAlpha: 0}, "-=0.5")
				.to("#beneficios-nodo-principal-5", {duration: 1, autoAlpha: 0})

				.from("#beneficios-nodo-6 .beneficios-nodo-imagen", {duration: 1, x: 50, autoAlpha: 0})
				.from("#beneficios-nodo-principal-6", {duration: 1, autoAlpha: 0}, "<")
				.from("#beneficios-nodo-6 .beneficios-nodo-texto", {duration: 1, x: 50, autoAlpha: 0}, "-=0.5")
				.to("#beneficios-nodo-principal-6", {duration: 1, autoAlpha: 0})

				.from("#beneficios-nodo-7 .beneficios-nodo-imagen", {duration: 1, x: 50, autoAlpha: 0})
				.from("#beneficios-nodo-principal-7", {duration: 1, autoAlpha: 0}, "<")
				.from("#beneficios-nodo-7 .beneficios-nodo-texto", {duration: 1, x: 50, autoAlpha: 0}, "-=0.5")
				.to("#beneficios-nodo-principal-7", {duration: 1, autoAlpha: 0})

				.from("#beneficios-nodo-8 .beneficios-nodo-imagen", {duration: 1, x: 50, autoAlpha: 0})
				.from("#beneficios-nodo-principal-8", {duration: 1, autoAlpha: 0}, "<")
				.from("#beneficios-nodo-8 .beneficios-nodo-texto", {duration: 1, x: 50, autoAlpha: 0}, "-=0.5")
			}
		})
	/* scrollling animation */

	/* ==============================================================
	/*	THREEJS
	/* ============================================================== */
			// variables
			var container, stats, controls, camera, scene, renderer, light, model
			var flag_3d = 0
			var size = 450

			function canvasSize(){
				console.log('resize:' + window.innerWidth)
				if( window.innerWidth > 500) {
					size = 450
				} else {
					size = 300
				}
			}

			canvasSize()

			window.onresize = canvasSize

			// Deteccion del soporte de webgl
			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

			// inicializacion al click del boton
			document.getElementById('evolucion-boton').onclick = function(){
				
				if( flag_3d == 0) {
					init() 
					animate()
					flag_3d = 1
					console.log(flag_3d)
				} else {}
			}

			function init() {
				// Create Scene
				scene = new THREE.Scene()

				// Camera
				camera = new THREE.PerspectiveCamera( 10, 450 / 450, .1, 2000 ) // window.innerWidth / window.innerHeight 75
				camera.position.z = 1500 //0
				camera.position.y = 400 // 100
				camera.position.x = 1000 // 0
				camera.aspect = size / size

				// Controls
				controls = new THREE.OrbitControls( camera )
				controls.dampingFactor = 2.5 // friction
				controls.rotateSpeed = 2.5 // mouse sensitivity
				controls.update()

				// Loader
				var loader = new THREE.GLTFLoader();
				loader.load( 'js/tinaco_plus_glb.glb', function ( gltf ) {
					model = gltf.scene
					scene.add( model )
					model.position.z = 0
					model.position.y = -75 // 0
					model.position.x = 0
					model.rotation = 
					animate()
				})

				// Renderer
				renderer = new THREE.WebGLRenderer( { antialias: true, alpha : true } )
				renderer.setSize( size, size, 1, 100)
				renderer.gammaOutput = true
				
				// Append Child
				document.getElementById('ventana-3d-canvas').appendChild(renderer.domElement)
			}
			
			function animate() {
				requestAnimationFrame( animate )
				renderer.render( scene, camera )
			}
	/* threejs */

	$('#beneficios-slider').slick({
		fade: true
	})
});