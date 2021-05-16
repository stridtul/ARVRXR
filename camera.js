
			// Ъгли и разстояние на гледната точка
			var alpha = 0;
			var beta = 0;
			var gamma = 0;
			var distance = 300;
			
			window.addEventListener( "deviceorientation", deviceOrientation, true);
			
			// помощни променливи за работа с мишката
			var mouseButton = 0; // кой клавиш е натиснат
			var mouseX = 0; // координати на последна
			var mouseY = 0; // ...позиция на мишката
			
			// обработване на натискане на миши бутон
			function onMouseDown(event)
			{
				mouseButton = event.which;
				mouseX = event.clientX;
				mouseY = event.clientY;
			}
			
			function deviceOrientation( event )
			{
				//alpha = event.beta.toFixed(1)< 0 ? (360 - event.alpha.toFixed(1))/100 : event.alpha.toFixed(1)/ 100;
				//beta = event.beta.toFixed(1)< 0 ? -1 * event.gamma.toFixed(1)/100 : event.gamma.toFixed(1)/100;
				x = Math.abs(event.beta) < 90 ? event.alpha - 90 : (event.alpha - 90) - 180;
				y = Math.abs(event.beta) < 90 ? -(90 + event.gamma) : 90 - event.gamma;
				
				alpha = x / 180 * Math.PI;
				beta = y / 180 * Math.PI;
				gamma = Math.sin(x/ 180 * Math.PI);
				
				console.log(x, y);
			}


			// обработване на контекстно меню с десен бутон
			function onContextMenu(event)
			{
				event.preventDefault();
			}
			
			function cameraAnimate()
			{	
	
				camera.lookAt( new THREE.Vector3(0,0,0) );
				camera.rotation.set(beta, alpha, 0);
				camera.rotation.order = 'YXZ';
				//camera.rotation.set(new THREE.Vector3(-alpha,beta,0));
			}