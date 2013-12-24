function save_options() {
  var url = document.getElementById("lgtmurl");
  localStorage["lgtmurl"] = url.value;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

function restore_options() {
  var favorite = localStorage["lgtmurl"];
  if (!favorite) {
    favorite = "http://www.lgtm.in"
  }
  var select = document.getElementById("lgtmurl");
  select.value = favorite;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);

