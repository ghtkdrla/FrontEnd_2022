from django.urls import path, include
from result import views

urlpatterns = [
  path('', views.calculate)
]