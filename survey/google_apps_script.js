function doPost(e) {
  var firstName = e.parameter.first_name || "";
  var surname   = e.parameter.surname   || "";

  MailApp.sendEmail({
    to:      "mybarbershop2002@gmail.com",
    subject: "New Survey Response",
    body:    "First Name: " + firstName + "\nSurname: " + surname
  });

  return ContentService
    .createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
