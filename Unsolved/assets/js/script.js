fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
// per_page = specifies the amount per page
// state = allows you to restore the previous state of your application.
// sort = will order the results based on the parameter given, the date created, updated, or comments.
// direction = specifies the direction (Forward or Backward from the starting time) of data sampling from the archive. The default value is Forward.