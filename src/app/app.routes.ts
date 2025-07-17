import { Routes } from '@angular/router';
import { LayoutallComponent } from './Layout/layoutall/layoutall.component'
import { AboutComponent } from './pages/about/about.component';
import { AboutTwoComponent } from './pages/about-two/about-two.component';
import { AboutThreeComponent } from './pages/about-three/about-three.component';
import { AboutFourComponent } from './pages/about-four/about-four.component';
import { PricingPlanComponent } from './pages/pricing-plan/pricing-plan.component';
import { InstructorComponent } from './pages/instructor/instructor.component';
import { InstructorTwoComponent } from './pages/instructor-two/instructor-two.component';
import { InstructorDetailsComponent } from './pages/instructor-details/instructor-details.component';
import { TutorComponent } from './pages/tutor/tutor.component';
import { TutorDetailsComponent } from './pages/tutor-details/tutor-details.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TuitionJobsComponent } from './pages/tuition-jobs/tuition-jobs.component';
import { EventsComponent } from './pages/events/events.component';
import { EventsDetailsComponent } from './pages/events-details/events-details.component';
import { ApplyAdmissionComponent } from './pages/apply-admission/apply-admission.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { FavoriteCourseComponent } from './pages/favorite-course/favorite-course.component';
import { BookOnlineClassComponent } from './pages/book-online-class/book-online-class.component';
import { FindTutorsComponent } from './pages/find-tutors/find-tutors.component';
import { Index2Component } from './Home/index-2/index-2.component';
import { IndexComponent } from './Home/index/index.component';
import { Index3Component } from './Home/index-3/index-3.component';
import { Index4Component } from './Home/index-4/index-4.component';
import { Index5Component } from './Home/index-5/index-5.component';
import { Index6Component } from './Home/index-6/index-6.component';
import { CourseComponent } from './Courses/course/course.component';
import { CourseListViewComponent } from './Courses/course-list-view/course-list-view.component';
import { CourseDetailsComponent } from './Courses/course-details/course-details.component';
import { LessonDetailsComponent } from './Courses/lesson-details/lesson-details.component';
import { ProductComponent } from './Products/product/product.component';
import { ProductDetailsComponent } from './Products/product-details/product-details.component';
import { CartComponent } from './Products/cart/cart.component';
import { CheckoutComponent } from './Products/checkout/checkout.component';
import { BlogComponent } from './Blogs/blog/blog.component';
import { BlogListComponent } from './Blogs/blog-list/blog-list.component';
import { BlogClassicComponent } from './Blogs/blog-classic/blog-classic.component';
import { BlogDetailsComponent } from './Blogs/blog-details/blog-details.component';
import { Layoutall2Component } from './LayoutSide1/layoutall2/layoutall2.component';
import { AdminDashbordComponent } from './Dashboard/admin-dashbord/admin-dashbord.component';
import { MyProfileComponent } from './Dashboard/my-profile/my-profile.component';
import { DashbordMessageComponent } from './Dashboard/dashbord-message/dashbord-message.component';
import { DashbordCoursesComponent } from './Dashboard/dashbord-courses/dashbord-courses.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StudentDashbordComponent } from './Dashboard/student-dashbord/student-dashbord.component';
import { Layoutall3Component } from './LayoutSide2/layoutall3/layoutall3.component';
import { DashbordWishlistComponent } from './Dashboard/dashbord-wishlist/dashbord-wishlist.component';
import { DashbordReviewsComponent } from './Dashboard/dashbord-reviews/dashbord-reviews.component';
import { DashbordQuizAttemptsComponent } from './Dashboard/dashbord-quiz-attempts/dashbord-quiz-attempts.component';
import { DashbordSettingsComponent } from './Dashboard/dashbord-settings/dashbord-settings.component';
import { StudentDashbordMyProfileComponent } from './Dashboard/student-dashbord-my-profile/student-dashbord-my-profile.component';
import { StudentDashbordMessageComponent } from './Dashboard/student-dashbord-message/student-dashbord-message.component';
import { StudentDashbordEnrolledCoursesComponent } from './Dashboard/student-dashbord-enrolled-courses/student-dashbord-enrolled-courses.component';
import { StudentDashbordWishlistComponent } from './Dashboard/student-dashbord-wishlist/student-dashbord-wishlist.component';
import { StudentDashbordReviewsComponent } from './Dashboard/student-dashbord-reviews/student-dashbord-reviews.component';
import { StudentDashbordMyQuizAttemptsComponent } from './Dashboard/student-dashbord-my-quiz-attempts/student-dashbord-my-quiz-attempts.component';
import { StudentDashbordAssignmentComponent } from './Dashboard/student-dashbord-assignment/student-dashbord-assignment.component';
import { StudentDashbordSettingsComponent } from './Dashboard/student-dashbord-settings/student-dashbord-settings.component';
import { Layoutall4Component } from './LayoutSide3/layoutall4/layoutall4.component';
import { InstructorDashboardComponent } from './Dashboard/instructor-dashboard/instructor-dashboard.component';
import { InstructorDashboardMyProfileComponent } from './Dashboard/instructor-dashboard-my-profile/instructor-dashboard-my-profile.component';
import { InstructorDashboardMessageComponent } from './Dashboard/instructor-dashboard-message/instructor-dashboard-message.component';
import { InstructorDashboardEnrolledCoursesComponent } from './Dashboard/instructor-dashboard-enrolled-courses/instructor-dashboard-enrolled-courses.component';
import { InstructorDashboardWishlistComponent } from './Dashboard/instructor-dashboard-wishlist/instructor-dashboard-wishlist.component';
import { InstructorDashboardReviewsComponent } from './Dashboard/instructor-dashboard-reviews/instructor-dashboard-reviews.component';
import { InstructorDashboardMyQuizAttemptsComponent } from './Dashboard/instructor-dashboard-my-quiz-attempts/instructor-dashboard-my-quiz-attempts.component';
import { InstructorDashboardOrderHistoryComponent } from './Dashboard/instructor-dashboard-order-history/instructor-dashboard-order-history.component';
import { InstructorDashboardMyCoursesComponent } from './Dashboard/instructor-dashboard-my-courses/instructor-dashboard-my-courses.component';
import { InstructorDashboardAnnouncementsComponent } from './Dashboard/instructor-dashboard-announcements/instructor-dashboard-announcements.component';
import { InstructorDashboardAssignmentComponent } from './Dashboard/instructor-dashboard-assignment/instructor-dashboard-assignment.component';
import { InstructorDashboardQuizAttemptsComponent } from './Dashboard/instructor-dashboard-quiz-attempts/instructor-dashboard-quiz-attempts.component';
import { InstructorDashboardAccountSettingsComponent } from './Dashboard/instructor-dashboard-account-settings/instructor-dashboard-account-settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, ExtraOptions } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: LayoutallComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
        title: 'index'
      },

      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'about-two',
        component: AboutTwoComponent,
        title: 'about-two'
      },
      {
        path: 'about-three',
        component: AboutThreeComponent,
        title: 'about-three'
      },
      {
        path: 'about-four',
        component: AboutFourComponent,
        title: 'about-four'
      },
      {
        path: 'pricing-plan',
        component: PricingPlanComponent,
        title: 'pricing-plan'
      },
      {
        path: 'instructor',
        component: InstructorComponent,
        title: 'instructor'
      },
      {
        path: 'instructor-two',
        component: InstructorTwoComponent,
        title: 'instructor-two'
      },
      {
        path: 'instructor-details',
        component: InstructorDetailsComponent,
        title: 'instructor-details'
      },
      {
        path: 'tutor',
        component: TutorComponent,
        title: 'tutor'
      },
      {
        path: 'tutor-details',
        component: TutorDetailsComponent,
        title: 'tutor-details'
      },
      {
        path: 'faq',
        component: FaqComponent,
        title: 'faq'
      },
      {
        path: 'tuition-jobs',
        component: TuitionJobsComponent,
        title: 'tuition-jobs'
      },
      {
        path: 'events',
        component: EventsComponent,
        title: 'events'
      },
      {
        path: 'events-details',
        component: EventsDetailsComponent,
        title: 'events-details'
      },
      {
        path: 'apply-admission',
        component: ApplyAdmissionComponent,
        title: 'apply-admission'
      },
      {
        path: 'gallery',
        component: GalleryComponent,
        title: 'gallery'
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
        title: 'privacy-policy'
      },
      {
        path: 'favorite-course',
        component: FavoriteCourseComponent,
        title: 'favorite-course'
      },
      {
        path: 'find-tutors',
        component: FindTutorsComponent,
        title: 'find-tutors'
      },
      {
        path: 'book-online-class',
        component: BookOnlineClassComponent,
        title: 'book-online-class'
      },
      {
        path: 'index-2',
        component: Index2Component,
        title: 'index-2'
      },
      {
        path: 'index',
        component: IndexComponent,
        title: 'index'
      },
      {
        path: 'index-3',
        component: Index3Component,
        title: 'index-3'
      },
      {
        path: 'index-4',
        component: Index4Component,
        title: 'index-4'
      },
      {
        path: 'index-5',
        component: Index5Component,
        title: 'index-5'
      },
      {
        path: 'index-6',
        component: Index6Component,
        title: 'index-6'
      },
      {
        path: 'course',
        component: CourseComponent,
        title: 'course'
      },
      {
        path: 'course-list-view',
        component: CourseListViewComponent,
        title: 'course-list-view'
      },
      {
        path: 'course-details',
        component: CourseDetailsComponent,
        title: 'course-details'
      },
      {
        path: 'lesson-details',
        component: LessonDetailsComponent,
        title: 'lesson-details'
      },
      {
        path: 'product',
        component: ProductComponent,
        title: 'product'
      },
      {
        path: 'product-details',
        component: ProductDetailsComponent,
        title: 'product-details'
      },
      {
        path: 'cart',
        component: CartComponent,
        title: 'cart'
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        title: 'checkout'
      },
      {
        path: 'blog',
        component: BlogComponent,
        title: 'blog'
      },
      {
        path: 'blog-list',
        component: BlogListComponent,
        title: 'blog-list'
      },
      {
        path: 'blog-classic',
        component: BlogClassicComponent,
        title: 'blog-classic'
      },
      {
        path: 'blog-details',
        component: BlogDetailsComponent,
        title: 'blog-details'
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'contact'
      },
      {
        path: 'sign-in',
        component: SignInComponent,
        title: 'sign-in'
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        title: 'sign-up'
      }

    ]
  },
  {
    path: '',
    component: Layoutall2Component,
    children: [
      {
        path: 'admin-dashbord',
        component: AdminDashbordComponent,
        title: 'admin-dashbord'
      },
      {
        path: 'my-profile',
        component: MyProfileComponent,
        title: 'my-profile'
      },
      {
        path: 'dashbord-message',
        component: DashbordMessageComponent,
        title: 'dashbord-message'
      },
      {
        path: 'dashbord-courses',
        component: DashbordCoursesComponent,
        title: 'dashbord-courses'
      },
      {
        path: 'dashbord-wishlist',
        component: DashbordWishlistComponent,
        title: 'dashbord-wishlist'
      },
      {
        path: 'dashbord-reviews',
        component: DashbordReviewsComponent,
        title: 'dashbord-reviews'
      },
      {
        path: 'dashbord-quiz-attempts',
        component: DashbordQuizAttemptsComponent,
        title: 'dashbord-quiz-attempts'
      },
      {
        path: 'dashbord-settings',
        component: DashbordSettingsComponent,
        title: 'dashbord-settings'
      }
    ]
  },
  {
    path: '',
    component: Layoutall3Component,
    children: [
      {
        path: 'student-dashbord',
        component: StudentDashbordComponent,
        title: 'student-dashbord'
      },
      {
        path: 'student-dashbord-my-profile',
        component: StudentDashbordMyProfileComponent,
        title: 'student-dashbord-my-profile'
      },
      {
        path: 'student-dashbord-message',
        component: StudentDashbordMessageComponent,
        title: 'student-dashbord-message'
      },
      {
        path: 'student-dashbord-enrolled-courses',
        component: StudentDashbordEnrolledCoursesComponent,
        title: 'student-dashbord-enrolled-courses'
      },
      {
        path: 'student-dashbord-wishlist',
        component: StudentDashbordWishlistComponent,
        title: 'student-dashbord-wishlist'
      },
      {
        path: 'student-dashbord-reviews',
        component: StudentDashbordReviewsComponent,
        title: 'student-dashbord-reviews'
      },
      {
        path: 'student-dashbord-my-quiz-attempts',
        component: StudentDashbordMyQuizAttemptsComponent,
        title: 'student-dashbord-my-quiz-attempts'
      },
      {
        path: 'student-dashbord-assignment',
        component: StudentDashbordAssignmentComponent,
        title: 'student-dashbord-assignment'
      },
      {
        path: 'student-dashbord-settings',
        component: StudentDashbordSettingsComponent,
        title: 'student-dashbord-settings'
      }
    ]
  },
  {
    path: '',
    component: Layoutall4Component,
    children: [
      {
        path: 'instructor-dashboard',
        component: InstructorDashboardComponent,
        title: 'instructor-dashboard'
      },
      {
        path: 'instructor-dashboard-my-profile',
        component: InstructorDashboardMyProfileComponent,
        title: 'instructor-dashboard-my-profile'
      },
      {
        path: 'instructor-dashboard-message',
        component: InstructorDashboardMessageComponent,
        title: 'instructor-dashboard-message'
      },
      {
        path: 'instructor-dashboard-enrolled-courses',
        component: InstructorDashboardEnrolledCoursesComponent,
        title: 'instructor-dashboard-enrolled-courses'
      },
      {
        path: 'instructor-dashboard-wishlist',
        component: InstructorDashboardWishlistComponent,
        title: 'instructor-dashboard-wishlist'
      },
      {
        path: 'instructor-dashboard-reviews',
        component: InstructorDashboardReviewsComponent,
        title: 'instructor-dashboard-reviews'
      },
      {
        path: 'instructor-dashboard-my-quiz-attempts',
        component: InstructorDashboardMyQuizAttemptsComponent,
        title: 'instructor-dashboard-my-quiz-attempts'
      },
      {
        path: 'instructor-dashboard-order-history',
        component: InstructorDashboardOrderHistoryComponent,
        title: 'instructor-dashboard-order-history'
      },
      {
        path: 'instructor-dashboard-my-courses',
        component: InstructorDashboardMyCoursesComponent,
        title: 'instructor-dashboard-my-courses'
      },
      {
        path: 'instructor-dashboard-announcements',
        component: InstructorDashboardAnnouncementsComponent,
        title: 'instructor-dashboard-announcements'
      },
      {
        path: 'instructor-dashboard-assignment',
        component: InstructorDashboardAssignmentComponent,
        title: 'instructor-dashboard-assignment'
      },
      {
        path: 'instructor-dashboard-quiz-attempts',
        component: InstructorDashboardQuizAttemptsComponent,
        title: 'instructor-dashboard-quiz-attempts'
      },
      {
        path: 'instructor-dashboard-account-settings',
        component: InstructorDashboardAccountSettingsComponent,
        title: 'instructor-dashboard-account-settings'
      }
    ]
  }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // <-- Scrolls to top on navigation
  anchorScrolling: 'enabled',           // <-- Optional: Enables fragment/anchor scrolling
  scrollOffset: [0, 0],                 // Optional: Customize offset
};

