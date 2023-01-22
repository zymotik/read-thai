
resource "google_firebase_project" "read_thai" {
  provider = google-beta
  project  = local.project_id
}
