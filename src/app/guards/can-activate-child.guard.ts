import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const canActivateChildGuard: CanActivateChildFn = (
  childRoute,
  state
) => {
  let token = localStorage.getItem('token');
  if (!token) {
    const route = inject(Router);
    route.navigateByUrl('');
    return false;
  }

  const userRole = localStorage.getItem('type');
  if (userRole !== 'instructor') {
    const route = inject(Router);
    route.navigateByUrl('');
    return false;
  }
  return true;
};
