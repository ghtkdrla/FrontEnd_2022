"""lotto URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from myapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('lotto/', views.home),
    path('lotto/result/', include('result.urls')),
    path('', views.default)
]

#전반적 구동
#http://127.0.0.1:8000/ 처음진입 : views.default함수 실행 => descript.html페이지 랜더링
#http://127.0.0.1:8000/lotto/ 안내따라 진입 : views.home 함수 실행 => lotto.html페이지 랜더링
#lotto.html페이지에서 숫자 입력 후 enter or btn onclick => count라는 argument로 값전달 
#action으로 result단으로 넘어갈 때 result view단에있는 calculate후 나온 데이터들 argument로 하여 값전달, result페이지 랜더링

