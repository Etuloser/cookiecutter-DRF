from django.contrib import admin
from django.urls import include, path
from rest_framework import routers

from .views import ping

router = routers.DefaultRouter()

urlpatterns = [
    path("api/v1/{{ cookiecutter.project_slug }}/", include(router.urls)),
    path(
        "api/v1/{{ cookiecutter.project_slug }}/api-auth/",
        include("rest_framework.urls", namespace="rest_framework"),
    ),
    path("api/v1/{{ cookiecutter.project_slug }}/admin/", admin.site.urls),
    path("api/v1/{{ cookiecutter.project_slug }}/ping/", ping),
]
