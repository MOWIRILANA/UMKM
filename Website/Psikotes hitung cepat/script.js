let score = 0;
    let total = 0;
    const maxQuestions = 100;
    let startTime = Date.now();

    function updateTimer() {
      const now = Date.now();
      const elapsed = Math.floor((now - startTime) / 1000);
      document.getElementById("timer").textContent = `Waktu: ${elapsed} detik`;
    }
    const timerInterval = setInterval(updateTimer, 1000);

    function generateQuestion() {
      const a = Math.floor(Math.random() * 9) + 1;
      const b = Math.floor(Math.random() * 9) + 1;
      const correct = a + b;
      const options = [correct];
      while (options.length < 4) {
        const wrong = Math.floor(Math.random() * 17) + 2;
        if (!options.includes(wrong)) options.push(wrong);
      }
      options.sort(() => Math.random() - 0.5);
      return { a, b, correct, options };
    }

    function renderResult() {
      clearInterval(timerInterval);
      const now = Date.now();
      const elapsed = Math.floor((now - startTime) / 1000);

      document.querySelector(".quiz-box").innerHTML = `
        <h1>Hasil Akhir</h1>
        <p>Benar: ${score}</p>
        <p>Total Soal: ${total}</p>
        <p>Nilai: ${(score / total * 100).toFixed(2)}%</p>
        <p>Waktu: ${elapsed} detik</p>
      `;
    }

    function renderQuestion() {
      if (total >= maxQuestions) {
        renderResult();
        return;
      }

      const q = generateQuestion();
      document.getElementById("question").textContent = `Berapa hasil dari: ${q.a} + ${q.b} ?`;
      const optionsDiv = document.getElementById("options");
      optionsDiv.innerHTML = "";

      q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => {
          if (opt === q.correct) score++;
          total++;
          document.getElementById("score").textContent = `Skor: ${score} / ${total}`;
          renderQuestion();
        };
        optionsDiv.appendChild(btn);
      });
    }

    renderQuestion();