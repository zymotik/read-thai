resource "google_project_service" "service_storage" {
  project = local.project_id
  service = "storage.googleapis.com"
}
