import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const sharedRoutesGuard: CanActivateChildFn = (childRoute, state) => {
  const userRole = localStorage.getItem('type');
  if (userRole !== 'instructor' && userRole !== 'student') {
    const route = inject(Router);
    route.navigateByUrl('');
    return false;
  }
  return true;
};
