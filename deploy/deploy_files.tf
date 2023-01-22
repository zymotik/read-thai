data "google_firebase_web_app_config" "web_app" {
  provider   = google-beta
  web_app_id = google_firebase_web_app.web_app.app_id
}

resource "null_resource" "upload_folder_content" {
  triggers = {
    file_hashes = jsonencode({
      for fn in fileset(local.build_folder, "**") :
      fn => filesha256("${local.build_folder}/${fn}")
    })
  }

  provisioner "local-exec" {
    command = "gsutil cp -r ${local.build_folder}/* gs://${data.google_firebase_web_app_config.web_app.storage_bucket}"
  }
}
