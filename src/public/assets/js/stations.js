const cardContainer = $("#stations");

const renderCard = ({
  stationName,
  stationFacilities,
  stationRailways,
  stationTrainStorage,
}) => {
  const div = $("<div>").addClass("card").attr("style", "width: 18rem;");
  const card = $(div).html(
    ` <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${stationName}</h5>
                    <p class="card-text">Station Facilities - ${stationFacilities}</p>
                    <p class="card-text">Station Railways - ${stationRailways}</p>
                    <p class="card-text">Station Train Storage - ${stationTrainStorage}</p>
                </div>
        `
  );
  cardContainer.append(card);
};

// fetch("api/station").then((stations) => {
//     stations.forEach(renderCard)
// })

const stations = [
  {
    stationName: "Grand Central",
    stationFacilities: "Good",
    stationRailways: "Good",
    stationTrainStorage: "Bad",
  },
  {
    stationName: "Grand Central",
    stationFacilities: "Good",
    stationRailways: "Good",
    stationTrainStorage: "Bad",
  },
  {
    stationName: "Grand Central",
    stationFacilities: "Good",
    stationRailways: "Good",
    stationTrainStorage: "Bad",
  },
];
stations.forEach(renderCard);
