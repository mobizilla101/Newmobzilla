# from rest_framework import permissions

# class IsAdminOrReadOnlyForAuthenticatedUsers(permissions.BasePermission):
#     """
#     Custom permission:
#     - Authenticated users can view (GET).
#     - Only admin users can create/edit/delete.
#     """

#     def has_permission(self, request, view):
#         # Must be authenticated
#         if not request.user or not request.user.is_authenticated:
#             return False

#         # Allow read-only methods to all authenticated users
#         if request.method in permissions.SAFE_METHODS:
#             return True

#         # Only admin users can modify
#         return request.user.is_staff
