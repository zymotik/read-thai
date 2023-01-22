
resource "google_project" "read_thai" {
  name       = local.project_name
  project_id = local.project_id
}

resource "google_firebase_project" "read_thai" {
  provider = google-beta
  project  = google_project.read_thai.project_id
}
