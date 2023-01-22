resource "google_project_service" "service_storage" {
  depends_on = [
    google_project.read_thai
  ]
  project = google_project.read_thai.project_id
  service = "storage.googleapis.com"
}
