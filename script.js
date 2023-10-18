		// вызов виджета
		let multiply = new Multiply({
			// элемент, в который будет вливаться виджет
			elem: document.querySelector('#wrap-multiply'),
			count: 3,
			title: 'Считаем до трех',
			captionAlign: 'left',
			captionColor: '#38C864',
		});

		// вызов виджета
		let multiply2 = new Multiply({
			// элемент, в который будет вливаться виджет
			elem: document.querySelector('#table-multiply'),
			captionSize: '2em',
		});


		// вызов виджета
		let multiply3 = new Multiply({
			// элемент, в который будет вливаться виджет
			elem: document.querySelector('.table'),
			count: 5,
			title: 'О! До пяти',
			captionAlign: 'right',
			captionColor: 'red',
		});