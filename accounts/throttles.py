from rest_framework.throttling import UserRateThrottle

class RegisterBurstThrottle(UserRateThrottle):
    scope = 'register_burst'

class LoginBurstThrottle(UserRateThrottle):
    scope = 'login_burst'