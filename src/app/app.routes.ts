import { Routes } from '@angular/router';
import { AdviceFeedComponent } from './components/advice-feed/advice-feed.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { CropTrackingComponent } from './components/crop-tracking/crop-tracking.component';
import { FarmerDashboardComponent } from './components/farmer-dashboard/farmer-dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ExpertAdviceComponent } from './components/expert-advice/expert-advice.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
// import { ProductsComponent } from './components/products/products.component';
// import { ArticleListComponent } from './components/article-list/article-list.component';
// import { ArticleDetailComponent } from './components/article-detail/article-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Farmer Dashboard
  { path: 'home', component: HomepageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'transactions', component: TransactionsComponent },
  
  { path: 'dashboard', component: FarmerDashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'crop-tracking', component: CropTrackingComponent },
  { path: 'recommendations', component: AdviceFeedComponent },
  { path: 'weather', component: WeatherWidgetComponent },

  // Knowledge Hub
  { path: 'knowledge-hub/articles', component: ArticlesComponent },
  { path: 'knowledge-hub/expert-advice', component: ExpertAdviceComponent },
  { path: 'knowledge-hub/faq', component: FaqsComponent },

    // Marketplace
    { path: 'marketplace/products', component: ProductsComponent },
    // { path: '/marketplace/transactions', component: TransactionsComponent },
    // { path: 'knowledge-hub/faq', component: FaqsComponent },
  

  
  { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page
];
