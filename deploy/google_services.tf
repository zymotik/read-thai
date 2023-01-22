resource "google_project_service" "service_storage" {
  project = local.project_id
  service = "storage.googleapis.com"
}

resource "google_project_service" "service_firebase" {
  project = local.project_id
  service = "firebase.googleapis.com"
}
