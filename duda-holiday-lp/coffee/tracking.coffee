#Clicked Main Greeting CTA
greetingButton.on('click', ->
    ga('send', 'event', 'holiday page button', 'click', 'greeting-button')
)
#Clicked Holidays
$('.left-menu-trigger').on('click', ->
    ga('send', 'event', 'holiday page button', 'click', 'holidays-menu')
)
#Clicked Gifts
$('.right-menu-trigger').on('click', ->
     ga('send', 'event', 'holiday page button', 'click', 'gifts-menu')
)
#Clicked 'Use This Template'
$('#bottom a.button:first-of-type').on('click', ->
     ga('send', 'event', 'holiday page button', 'click', 'use-this-template')
)
#Clicked 'Add Holiday inSites to My Sites'
$('#bottom a.button:nth-of-type(2)').on('click', ->
     ga('send', 'event', 'holiday page button', 'click', 'add-insite-to-my-sites')
)
#Downloaded E-Book
$('a.e-book').on('click', ->
     ga('send', 'event', 'holiday page asset', 'download', 'e-book')
     console.log('e-book click registered')
)
#Downloaded Graphics
$('a.graphic').on('click', ->
     ga('send', 'event', 'holiday page asset', 'download', 'graphics')
)
#Downloaded Icon Set
$('a.icons').on('click', ->
     ga('send', 'event', 'holiday page asset', 'download', 'icon-set')
     console.log('icon-set click registered')
)
#Downloaded inSite Ideas
$('a.insite').on('click', ->
     ga('send', 'event', 'holiday page asset', 'download', 'insite-ideas')
)
#Downloaded Social Posts & Banner
$('a.social').on('click', ->
     ga('send', 'event', 'holiday page asset', 'download', 'social-posts')
)
#Downloaded Email Templates 
$('a.email').on('click', ->
     ga('send', 'event', 'holiday page asset', 'download', 'email-templates')
)
#Template Preview Tracking
$('.templates li > button').on('click', ->
    template = $(this).data('template')
    ga('send', 'event', 'holiday page template', 'preview', template + '-preview')
    console.log( template + '-preview click registered')
)
#Shares
$('.share .fb').on('click', ->
    ga('send', 'event', 'holiday page share', 'click', 'fb')
)
$('.share .twitter').on('click', ->
    ga('send', 'event', 'holiday page share', 'click', 'twitter')
)

