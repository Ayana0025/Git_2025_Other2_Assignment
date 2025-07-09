function checkAnswer() {
			const answers = document.getElementsByName("answer");
			let selected = "";

			for (const ans of answers) {
				if (ans.checked) {
					selected = ans.value;
				}
			}

			if (selected === "") {
				alert("選んでください");
			} else if (selected === "4") {
				alert("正解！ペンギンは北極にはいません。南半球に生息しています。");
			} else {
				alert("不正解！ペンギンがいないのは『北極』です。");
			}
		}