window.onload = function () {
  const params = new URLSearchParams(window.location.search);

  const fields = [
    "fullname",
    "email",
    "password",
    "age",
    "dob",
    "gender",
    "interests",
    "bio",
    "subscribe",
    "color",
    "range"
  ];

  fields.forEach((field) => {
    const value = params.get(field) || "Not provided";
    document.getElementById(`result-${field}`).textContent = value;
  });
};
