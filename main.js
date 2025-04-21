const birthDateStr = "2019-10-18"; // data urodzenia Alana

function updateCountdown() {
  const now = new Date();
  const birthDate = new Date(birthDateStr);
  const currentYear = now.getFullYear();

  let nextBirthday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate());

  // jeśli urodziny już były w tym roku, ustaw na przyszły rok
  if (nextBirthday < now) {
    nextBirthday.setFullYear(currentYear + 1);
  }

  // wiek, który Alan skończy
  const age = nextBirthday.getFullYear() - birthDate.getFullYear();

  const diffInMs = nextBirthday - now;

  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffInMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffInMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffInMs / 1000) % 60);

  // wstaw dane do HTML-a
  document.querySelector(".d").textContent = days;
  document.querySelector(".h").textContent = hours;
  document.querySelector(".m").textContent = minutes;
  document.querySelector(".s").textContent = seconds;

  // dodatkowy komunikat z wiekiem
  document.querySelector(".main__paragraph").textContent =
    `Do ${age} urodzin Alana zostało:`;
}


updateCountdown();
setInterval(updateCountdown, 1000);
