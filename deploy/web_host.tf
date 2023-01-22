
resource "google_firebase_web_app" "web_app" {
  provider        = google-beta
  project         = local.project_id
  display_name    = "Read Thai"
  deletion_policy = "DELETE"

  depends_on = [google_firebase_project.read_thai, google_project_service.service_firebase]
}

# data "google_firebase_web_app_config" "web_app" {
#   provider   = google-beta
#   web_app_id = google_firebase_web_app.web_app.app_id
# }

# resource "google_storage_bucket_object" "default" {
#   provider = google-beta
#   bucket   = google_storage_bucket.config.name
#   name     = "firebase-config.json"

#   content = jsonencode({
#     appId             = google_firebase_web_app.web_app.app_id
#     apiKey            = data.google_firebase_web_app_config.web_app.api_key
#     authDomain        = data.google_firebase_web_app_config.web_app.auth_domain
#     databaseURL       = lookup(data.google_firebase_web_app_config.web_app, "database_url", "")
#     storageBucket     = lookup(data.google_firebase_web_app_config.web_app, "storage_bucket", "")
#     messagingSenderId = lookup(data.google_firebase_web_app_config.web_app, "messaging_sender_id", "")
#     measurementId     = lookup(data.google_firebase_web_app_config.web_app, "measurement_id", "")
#   })
# }
