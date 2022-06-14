{
  /* <iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/9hH3zEH4U6o"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>; */
}

const videosTutoriales = [
  {
    tittle: "Entregas de Cajas",
    file: "https://www.youtube.com/embed/9hH3zEH4U6o",
    video: "1",
  },
  {
    tittle: "Entregas de Pilotos",
    file: "https://youtu.be/embed/wGcFsNVEEL4",
    video: "2",
  },
  {
    tittle: "Entregas de Medallas y Dinero",
    file: "https://youtu.be/embed/2SdNzFCBoMo",
    video: "3",
  },
];

let actualVideo = null;

const video = document.getElementById("videos");
const reproductor = document.getElementById("reproductor");

const videosContainer = document.getElementById("videos-Container");
videosContainer.addEventListener("click");

function loadFilms() {
  videosTutoriales.forEach((video) => {
    const videoContainer = document.createElement("div");
    videoContainer.classList.add("video-container");
    videoContainer.setAttribute("id", video.video);
    videoContainer.innerHTML = `
        <div class="tittle">${video.tittle}</div>
        <div class="video">
            <iframe
            width="100%"
            height="400"
            src="${video.file}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ></iframe>
        </div>
        `;
    videosContainer.appendChild(videoContainer);
  });
}

function loadFilms()
