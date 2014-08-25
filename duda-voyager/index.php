<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Duda | Home | DudaOne | DudaMobile | Partner with Duda</title>
    <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,300,600,700,900' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="/duda-voyager/css/app.css" />
    <script src="/duda-voyager/bower_components/modernizr/modernizr.js"></script>
  </head>
  <body>
    <nav class="top-bar" data-topbar>
      <ul class="title-area">
        <li class="name">
          <a href="/"><img src="//dm-util.s3.amazonaws.com/duda_website/img/logos/duda.png" alt="Duda"></a>
        </li>
      </ul>
      <section class="top-bar-section">
        <ul class="right">
          <li><a href="#">Blog</a></li>
          <li><a href="#">Help</a></li>
          <ul class="not-logged-in">
            <li><a class="button secondary round uppercase sign-up" href="#">Sign Up</a></li>
          <li><a class="button round uppercase login" href="#">Log In</a></li>
          </ul>
        </ul>
      </section>
    </nav>
    <div class="soft-focus-bg half overflow">
      <div class="blue-tablet">
        <div class="row headline">
        <div class="small-12 large-5  text-justify small-only-text-center columns">
          <h3 class="uppercase">Create a Better</h3>
          <h1  class="uppercase"><strong>Business<br />Website</strong></h1>
          <h5><em>Free & Easy. Over 5 Million Sites Created.</em></h5>
        </div>
      </div>
      </div>
    </div>
      <div class="small-12 large-4 bg-1 bg-img mobile half overflow columns">
        <div class="pt-35 small-centered text-center">
          <h5 class="subheader uppercase m0 weight-600">Create a Mobile-Friendly Version</h6>
          <p>of my current website</p>
          <div class="medium-8 small-12 small-centered hide-for-large-up columns">
            <form class="convert-form" action="" method="get"> 
              <input class="radius" placeholder="Enter your URL" type="text" name="input_url" /><button class="radius expand">Go Mobile</button> 
              <input type="hidden" name="mobile" value="true"/>
            </form>
          </div>   
          <div class="small-12 show-for-large-up">
          <a class="button-250 button radius m-auto mobile-preview ">Go Mobile</a>
          <div class="small-12 convert-form-preview" style="display: none;">
            <form class="convert-form text-left m-auto" action="http://my-test-freeze.dudamobile.com/new" method="post"> 
              <input placeholder="Enter URL" class="radius" type="text" name="dm_site_url" /><button class="radius">Free Preview</button> 
            </form>
          </div>
          </div>       
           <p><a href="#" class="text-like">Learn More</a></p>
        </div>
      </div>
      <div class="small-12 large-4 bg-2 bg-img one half overflow columns">
        <div class="pt-35 half  small-centered text-center">
          <h5 class="subheader uppercase m0 weight-600">Build a New Website</h5>
          <p>that works on desktop, tablet and mobile</p>
          <a href="#" class="button-250 button radius m-auto show-for-large-up">Go Multi-Screen</a>
          <a href="#" class="button-250 button radius m-auto show-for-medium-down" data-reveal-id="create-account" data-reveal>Sign Up</a>
          <p><a href="#" class="text-like">Learn More</a></p>
        </div>
      </div>
      <div class="small-12 large-4 bg-1 half bg-img partners overflow columns">
        <div class="pt-35 small-centered text-center">
          <h5 class="subheader uppercase m0 weight-600">Start Selling Websites</h5>
          <p>by partnering with Duda</p>
          <a href="#" id="partners" class="button-250 button radius">Become a Partner</a>
          <p><a href="#" id="partners-learn-more" class="text-like">Learn More</a></p>
        </div>
      </div>
    <!-- DudaOne Create Account Modal for Mobile and Tablet -->
    <div id="create-account" class="reveal-modal large bg-2" data-reveal>
      <div class="row">
        <div class="small-12 columns">
          <h3>Create Your Account</h3>
          <form class="mobile-sign-up">
            <label class="error-message">&nbsp;</label>
            <label for="userName">Email Address: </label>
            <input name="userName" placeholder="john.smith@gmail.com" type="text"/>
            <label for="pwd">Password: </label>
            <input name="pwd" placeholder="********" type="password"/>
            <label for="pwd2">Confirm password: </label>
            <input name="pwd2" placeholder="********" type="password"/>
            <input type="submit" class="button expand radius" value="Create Account"/>
          </form>
        </div>
        <div class="small-12 success columns" style="display:none;">
          <h3 class="text-center">Congratulations!</h3>
          <p class="f-white p10-0 text-center">You have now <br/>created your</p>
          <p class="f-white text-center"><img src="/templates/img/logos/duda-grey-trans.png" alt="Duda"> account</p>
          <hr>
          <p class="f-white text-center">You will recieve a confirmation email shortly; simply log in from your desktop to begin creating your new DudaOne site.</p>
        </div>
      </div>
      <a class="close-reveal-modal">&#215;</a>
    </div>
    <!-- /DudaOne Create Account Modal for Mobile and Tablet -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="/duda-voyager/bower_components/foundation/js/foundation.min.js"></script>
    <script src="/duda-voyager/js/min/production.min.js"></script>
  </body>
</html>