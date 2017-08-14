/**
 * @appName    electric-castle

 * @version    0.0.1
 * @date       2017/08/01 08:27:51
 * @author     
 * @copyright  
 * @licensed   
 */window.MODULES = (function ElectricCastle (ng, modules) {
    'use strict';

    var dependencies = [];

    _.assign(modules, {
        APPLICATION      : {NAME : 'ElectricCastle'},
        GENERATED_CONST  : {NAME : 'ElectricCastle.GeneratedConstants'},
        UI_ROUTER        : {NAME : 'ui.router'},
        UI_ROUTER_TABS   : {NAME : 'ui.router.tabs'},
        UI_MASK          : {NAME : 'ui.mask'},
        NG_TRANSLATE     : {NAME : 'pascalprecht.translate'},
        NG_COOKIE        : {NAME : 'ipCookie'},
        NG_BOOTBOX       : {NAME : 'ngBootbox'},
        NG_VIDEO         : {NAME : 'ngVideo'},
        REST_ANGULAR     : {NAME : 'restangular'},
        UI_BOOTSTRAP     : {NAME : 'ui.bootstrap'},
        ANGULARITICS     : {NAME : 'angulartics'},
        ANGULARITICS_GA  : {NAME : 'angulartics.google.analytics'},
        ANGULARITICS_FB  : {NAME : 'angulartics.facebook.pixel'},
        BOOTSTRAP_SELECT : {NAME : 'angular-bootstrap-select'},
        NG_MESSAGES      : {NAME : 'ngMessages'},
        NG_SANITIZE      : {NAME : 'ngSanitize'},
        NG_SCROLL        : {NAME : 'duScroll'},
        SOCIAL_SHARE     : {NAME : '720kb.socialshare'},
        UI_SELECT        : {NAME : 'ui.select'},
        NUMBER_PICKER    : {NAME : 'ngNumberPicker'}
    });

    _.forEach(modules, function (moduleDefinition) {
        if (moduleDefinition.NAME !== modules.APPLICATION.NAME) {
            if (_.isArray(moduleDefinition)) {
                _.forEach(moduleDefinition, function (subModule) {
                    dependencies.push(subModule.NAME);
                });
            } else {
                dependencies.push(moduleDefinition.NAME);
            }
        }
    });

    ng.module(modules.APPLICATION.NAME, dependencies);

    return modules;
}(angular, window.MODULES || {}));
;(function ApplicationConfigWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        dependencies = [
            '$compileProvider', '$translateProvider', '$locationProvider', '$logProvider',
            'datepickerConfig', 'datepickerPopupConfig', 'FLAGS', 'TRANSLATIONS'
        ];

    function ApplicationConfig ($compileProvider, $translateProvider, $locationProvider,
                                $logProvider, $datePicker, $datePickerPopup, FLAGS, TRANSLATIONS) {
        $compileProvider.debugInfoEnabled(false);

        $translateProvider.translations('en', TRANSLATIONS.en);
        $translateProvider.translations('ro', TRANSLATIONS.ro);

        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escaped');

        $locationProvider.html5Mode(FLAGS.IS_HTML5_MODE_ENABLED);

        $logProvider.debugEnabled(FLAGS.IS_DEBUG_ENABLED);

        $datePicker.showWeeks          = false;
        $datePickerPopup.showButtonBar = false;
    }

    dependencies.push(ApplicationConfig);

    module.config(dependencies);
}(angular, MODULES));
;(function ApplicationConstantWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        constantName = 'APP_CONST',
        APP_CONST = {};

    APP_CONST.PATH = {
        VIEWS : 'assets/views/',
        SVG   : 'assets/img/svg/'
    };

    APP_CONST.IMAGE_FALLBACK = {
        LINE_UP_ARTIST_IMAGE : '/assets/img/artist-placeholder.png',
        PRODUCT_IMAGE        : 'http://placehold.it/300x310'
    };

    APP_CONST.STATES = {
        APPLICATION : {
            PUBLIC  : 'ElectricCastlePublic',
            PRIVATE : 'ElectricCastlePrivate'
        },
        INTERNAL_ERROR    : 'InternalError',
        CONCURRENCY_ERROR : 'ConcurrencyError',
        NOT_FOUND         : 'NotFound',
        HOME              : 'Home',
        HOME_PRERENDER    : 'HomePrerender',
        TICKETS           : 'Tickets',
        TICKETS_INFO      : 'TicketsInfo',
        NEW_TICKETS       : 'NewTickets',
        FROM_ABROAD       : 'FromAbroad',
        TICKET_TYPE       : 'Type',
        SPONSORS          : 'Sponsors',
        PARTNERS          : 'Partners',
        LOGIN             : 'Login',
        CHANGE_PASSWORD   : 'ChangePassword',
        FORGOT_PASSWORD   : 'ForgotPassword',
        REGISTER          : 'Register',
        BASKET            : 'Basket',
        ORDER_SUCCESS     : 'OrderSuccess',
        ORDER_FAILED      : 'OrderFailed',
        MAP               : 'Map',
        FESTIVAL_MAP      : 'FestivalMap',
        GETTING_THERE     : 'GettingThere',
        SCHEDULE          : 'Schedule',
        NEW_SCHEDULE      : 'NewSchedule',
        OWN_THE_STAGE     : 'OwnTheStage',
        LIVE_WALL         : 'LiveWall',
        ACCESS            : 'Access',
        LOST_AND_FOUND    : 'LostAndFound',
        RULES             : 'Rules',
        CONTEST_RULES     : 'ContestRules',
        REGULAMENT        : 'Regulament',
        RULES_REGULATIONS : 'RulesAndRegulations',
        PRIVACY_POLICY    : 'PrivacyPolicy',

        ABOUT         : 'About',
        THE_CASTLE    : 'TheCastle',
        HISTORY       : 'History',
        TRAVEL        : 'Travel',
        PREMIUM       : 'Premium',
        ACCOMMODATION : 'Accommodation',
        PACKAGES      : 'Packages',
        PRESS         : 'Press',
        ADVERTISING   : 'Advertising',
        PROJECTS      : 'Projects',
        ECO           : 'Eco',

        CALL_FOR_PROJECTS : 'CallForProjects',
        RFID_HOW_IT_WORKS : 'RFIDHowItWorks',

        TICKETS_REDESIGN : {
            BUY : 'Tickets'
        },

        FAQ : {
            ROOT                        : 'Faq',
            TICKETS                     : 'Tickets',
            FESTIVAL_AREA               : 'FestivalArea',
            ACCOMMODATION_AND_TRANSPORT : 'AccommodationAndTransport',
            VENDORS_VOLUNTEERS_AND_JOBS : 'VendorsVolunteersAndJobs'
        },
        LINE_UP : {
            ROOT         : 'LineUp',
            LIST         : 'List',
            ALPHABETICAL : 'Alphabetical'
        },
        SHOP : {
            ROOT : 'Shop'
        },
        MERCHANDISE : {
            ROOT : 'Merchandise'
        },
        NEWSROOM : {
            ROOT    : 'Newsroom',
            ARTICLE : 'NewsroomArticle'
        },
        STORIES : {
            ROOT    : 'Stories',
            ARTICLE : 'StoriesArticle'
        },
        MY_ACCOUNT : {
            ROOT     : 'MyAccount',
            ORDERS   : 'Orders',
            SETTINGS : 'Settings'
        },
        INVITATIONS   : 'Invitations',
        CAREERS       : 'Careers',
        TERMS         : 'TermsAndConditions',
        VOLUNTEERS    : 'Volunteers',
        EN_VOLUNTEERS : 'EnVolunteers',
        VENDORS       : 'Vendors'
    };

    APP_CONST.API_PATH = {
        PRODUCTS    : 'products',
        BASKET      : 'quotes',
        ORDERS      : 'orderedproducts',
        ARTIST      : 'egrpeJG5xhCfv3rmRD8r/json.php?type=lineup',
        CONTENT_BOX : 'egrpeJG5xhCfv3rmRD8r/json.php?type=homepage',
        SHOP        : 'egrpeJG5xhCfv3rmRD8r/json.php?type=shop',
        INVITATIONS : 'invitations',
        NEWSROOM    : 'newsroom',
        STORIES     : 'stories',

        PAY_FULL_RECURRING : '/egrpeJG5xhCfv3rmRD8r/recurring/pay-full.php?order={orderId}&client={email}',
        CANCEL_RECURRING   : '/egrpeJG5xhCfv3rmRD8r/recurring/cancel-payment.php?order={orderId}&client={email}',
        UPDATE_CARD        : '/egrpeJG5xhCfv3rmRD8r/recurring/update-credit-card.php?order={orderId}&client={email}',

        EXTERNAL_TICKET : '/eventim',
        USER_VOUCHERS   : '/vouchers',
        TICKET_INFO     : '/ticket_info'
    };

    /**
     * So dear reader or beloved developer or maybe a bitter reviewer,
     * if you encounter this constants in the code you should definitely,
     * (remember this is the keyword, DEFINITELY) blame the almighty
     * MAGENTO.
     */
    APP_CONST.MAGIC_NUMBERS = {
        TICKETS          : 3,
        PRODUCTS         : 4,
        PACKAGES         : 11,
        FEATURED_NEWS_ID : 0
    };

    APP_CONST.URL_PLACEHOLDER = {
        LOADER         : '[hasLoader]',
        AUTH_TOKEN     : '[attachAuthToken]',
        REQUEST_ACCESS : '[requestAccess]',
        KEEP_LOADER    : '[keepLoader]'
    };

    APP_CONST.DATE_FORMAT = {
        SERVER : 'YYYY-MM-DD HH:mm:ss',
        APP    : 'DD MMMM YYYY'
    };

    APP_CONST.UI_VIEWS = {
        PUBLIC  : 'content@' + APP_CONST.STATES.APPLICATION.PUBLIC,
        PRIVATE : 'content@' + APP_CONST.STATES.APPLICATION.PRIVATE
    };

    APP_CONST.TIME = {
        ERROR_TIMEOUT : 20000,
        PULSATING     : 10000
    };

    APP_CONST.PRODUCT_STATES = {
        AVAILABLE           : 'AVAILABLE',
        ONLY_FOR_REGISTERED : 'ONLY_FOR_REGISTERED',
        SOLD_OUT            : 'SOLD_OUT',
        COMING_SOON         : 'COMING_SOON'
    };

    _.assign(module, {
        constants : APP_CONST
    });

    module.constant(constantName, APP_CONST);
}(angular, MODULES));
;(function ApplicationConstantWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        constantName = 'APP_EVENTS',

        APP_EVENTS   = {
            LOGIN : {
                SUCCESS           : 'SUCCESS',
                SHOW_HIDE_OVERLAY : 'SHOW_HIDE_LOGIN_OVERLAY'
            },
            LOGOUT : {
                SUCCESS : 'SUCCESS'
            },
            GENERAL : {
                STATE_CHANGED : 'STATE_CHANGED',
                INVALID_TOKEN : 'INVALID_TOKEN'
            },
            TICKETS : {
                NEW_PRODUCT_ADDED_TO_BASKET : 'NEW_PRODUCT_ADDED_TO_BASKET',
                NO_TICKET_SELECTED          : 'NO_TICKET_SELECTED',
                NO_CAMPING_SELECTED         : 'NO_CAMPING_SELECTED',
                ERROR                       : 'ERROR',
                ADD_TO_CART                 : 'ADD_TO_CART',
                VALIDATE_AND_ADD_TO_CART    : 'VALIDATE_AND_ADD_TO_CART',
                ON_PRODUCT_QTY_CHANGE       : 'ON_PRODUCT_QTY_CHANGE',

                CLOSE_TICKETS_CART : 'CLOSE_TICKETS_CART',

                OPEN_NO_CAMPING  : 'OPEN_NO_CAMPING',
                CLOSE_NO_CAMPING : 'CLOSE_NO_CAMPING',

                OPEN_CONFIRMATION  : 'OPEN_CONFIRMATION',
                CLOSE_CONFIRMATION : 'CLOSE_CONFIRMATION',
                GO_TO_CAMPING      : 'GO_TO_CAMPING',
                ON_GO_BACK         : 'ON_GO_BACK',

                PATH_CHOSEN : 'PATH_CHOSEN'
            },
            BASKET : {
                UPDATE          : 'UPDATE',
                ERROR           : 'ERROR',
                CHECKOUT        : 'CHECKOUT',
                ADD_FROM_COOKIE : 'EVENTS.BASKET.ADD_FROM_COOKIE'
            },
            GIFT_CARD : {
                UPDATE : 'UPDATE'
            },
            MODAL : {
                OPEN  : 'OPEN',
                CLOSE : 'CLOSE',

                TYPES : {
                    LOGIN                 : 'LOGIN',
                    REDEEM_CARD           : 'REDEEM_CARD',
                    PARTNER_LOCATIONS     : 'PARTNER_LOCATIONS',
                    HOME_INFO             : 'HOME_INFO',
                    REFUND                : 'REFUND',
                    FIRST_LOGIN_THANK_YOU : 'FIRST_LOGIN_THANK_YOU',
                    ADD_EXTERNAL_TICKET   : 'ADD_EXTERNAL_TICKET',
                    TICKET_NAME           : 'TICKET_NAME'
                }
            },
            LOADER : {
                SHOW : 'SHOW',
                HIDE : 'HIDE'
            },
            LINE_UP : {
                SORT_ARTISTS : 'SORT_ARTISTS'
            },
            APP_MENU : {
                TOGGLE      : 'TOGGLE',
                CHANGE_ICON : 'CHANGE_ICON'
            }
        };

    _.assign(module.constants, {
        APP_EVENTS : APP_EVENTS
    });

    module.constant(constantName, APP_EVENTS);
}(angular, MODULES));
;(function ApplicationRunWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        dependencies = ['$rootScope', '$urlRouter', '$location', '$state', 'AuthService', 'PublisherSubscriber'];

    function ApplicationRun ($rootScope, $urlRouter, $location, $state, AuthService, PubSub) {
        var STATES = module.constants.STATES,
            EVENTS = module.constants.APP_EVENTS;

        $rootScope.hasQueue = false;

        $rootScope.$on('$locationChangeStart', function (e, newUrl, oldUrl) {
            var currentStateName = $state.current.name,
                abroadState      = [
                    STATES.APPLICATION.PUBLIC,
                    STATES.FROM_ABROAD
                ].join('.');

            if (currentStateName !== abroadState || currentStateName === abroadState && $location.hash() === '') {
                $urlRouter.sync();
            } else if (currentStateName === abroadState && newUrl !== oldUrl) {
                e.preventDefault();
            }
        });

        $urlRouter.listen();

        $rootScope.$on('$stateChangeStart', function () {
            PubSub.publish(EVENTS.APP_MENU.CLOSE);
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            var name = toState.data.name;

            name = name.replace(STATES.APPLICATION.PUBLIC + '.', '');
            name = name.replace(STATES.APPLICATION.PRIVATE + '.', '');

            $rootScope.pageClass = _.kebabCase(name);

            PubSub.publish(EVENTS.GENERAL.STATE_CHANGED);
        });

        AuthService.determineUserStatus();
        AuthService.subscribeToRouterEvents();
    }

    dependencies.push(ApplicationRun);

    module.run(dependencies);
}(angular, MODULES));
;(function CountryAndNationalityConstantWrap (ng, MODULES) {
    'use strict';

    var module              = ng.module(MODULES.APPLICATION.NAME),
        constantName        = 'COUNTRY_NATIONALITY',
        COUNTRY_NATIONALITY = {
            COUNTRY     : [{"name":"Romania","code":"RO"},{"name":"Hungary","code":"HU"},{"name":"United Kingdom","code":"GB"},{"name":"Germany","code":"DE"},{"name":"France","code":"FR"},{"name":"Italy","code":"IT"},{"name":"Spain","code":"ES"},{"name":"Belgium","code":"BE"},{"name":"United States","code":"US"},{"name":"Afghanistan","code":"AF"},{"name":"Åland Islands","code":"AX"},{"name":"Albania","code":"AL"},{"name":"Algeria","code":"DZ"},{"name":"American Samoa","code":"AS"},{"name":"Andorra","code":"AD"},{"name":"Angola","code":"AO"},{"name":"Anguilla","code":"AI"},{"name":"Antarctica","code":"AQ"},{"name":"Antigua and Barbuda","code":"AG"},{"name":"Argentina","code":"AR"},{"name":"Armenia","code":"AM"},{"name":"Aruba","code":"AW"},{"name":"Australia","code":"AU"},{"name":"Austria","code":"AT"},{"name":"Azerbaijan","code":"AZ"},{"name":"Bahamas","code":"BS"},{"name":"Bahrain","code":"BH"},{"name":"Bangladesh","code":"BD"},{"name":"Barbados","code":"BB"},{"name":"Belarus","code":"BY"},{"name":"Belize","code":"BZ"},{"name":"Benin","code":"BJ"},{"name":"Bermuda","code":"BM"},{"name":"Bhutan","code":"BT"},{"name":"Bolivia","code":"BO"},{"name":"Bosnia and Herzegovina","code":"BA"},{"name":"Botswana","code":"BW"},{"name":"Bouvet Island","code":"BV"},{"name":"Brazil","code":"BR"},{"name":"British Indian Ocean Territory","code":"IO"},{"name":"Brunei Darussalam","code":"BN"},{"name":"Bulgaria","code":"BG"},{"name":"Burkina Faso","code":"BF"},{"name":"Burundi","code":"BI"},{"name":"Cambodia","code":"KH"},{"name":"Cameroon","code":"CM"},{"name":"Canada","code":"CA"},{"name":"Cape Verde","code":"CV"},{"name":"Cayman Islands","code":"KY"},{"name":"Central African Republic","code":"CF"},{"name":"Chad","code":"TD"},{"name":"Chile","code":"CL"},{"name":"China","code":"CN"},{"name":"Christmas Island","code":"CX"},{"name":"Cocos (Keeling) Islands","code":"CC"},{"name":"Colombia","code":"CO"},{"name":"Comoros","code":"KM"},{"name":"Congo","code":"CG"},{"name":"Congo, The Democratic Republic of the","code":"CD"},{"name":"Cook Islands","code":"CK"},{"name":"Costa Rica","code":"CR"},{"name":"Cote D'Ivoire","code":"CI"},{"name":"Croatia","code":"HR"},{"name":"Cuba","code":"CU"},{"name":"Cyprus","code":"CY"},{"name":"Czech Republic","code":"CZ"},{"name":"Denmark","code":"DK"},{"name":"Djibouti","code":"DJ"},{"name":"Dominica","code":"DM"},{"name":"Dominican Republic","code":"DO"},{"name":"Ecuador","code":"EC"},{"name":"Egypt","code":"EG"},{"name":"El Salvador","code":"SV"},{"name":"Equatorial Guinea","code":"GQ"},{"name":"Eritrea","code":"ER"},{"name":"Estonia","code":"EE"},{"name":"Ethiopia","code":"ET"},{"name":"Falkland Islands (Malvinas)","code":"FK"},{"name":"Faroe Islands","code":"FO"},{"name":"Fiji","code":"FJ"},{"name":"Finland","code":"FI"},{"name":"French Guiana","code":"GF"},{"name":"French Polynesia","code":"PF"},{"name":"French Southern Territories","code":"TF"},{"name":"Gabon","code":"GA"},{"name":"Gambia","code":"GM"},{"name":"Georgia","code":"GE"},{"name":"Ghana","code":"GH"},{"name":"Gibraltar","code":"GI"},{"name":"Greece","code":"GR"},{"name":"Greenland","code":"GL"},{"name":"Grenada","code":"GD"},{"name":"Guadeloupe","code":"GP"},{"name":"Guam","code":"GU"},{"name":"Guatemala","code":"GT"},{"name":"Guernsey","code":"GG"},{"name":"Guinea","code":"GN"},{"name":"Guinea-Bissau","code":"GW"},{"name":"Guyana","code":"GY"},{"name":"Haiti","code":"HT"},{"name":"Heard Island and Mcdonald Islands","code":"HM"},{"name":"Holy See (Vatican City State)","code":"VA"},{"name":"Honduras","code":"HN"},{"name":"Hong Kong","code":"HK"},{"name":"Iceland","code":"IS"},{"name":"India","code":"IN"},{"name":"Indonesia","code":"ID"},{"name":"Iran, Islamic Republic Of","code":"IR"},{"name":"Iraq","code":"IQ"},{"name":"Ireland","code":"IE"},{"name":"Isle of Man","code":"IM"},{"name":"Israel","code":"IL"},{"name":"Jamaica","code":"JM"},{"name":"Japan","code":"JP"},{"name":"Jersey","code":"JE"},{"name":"Jordan","code":"JO"},{"name":"Kazakhstan","code":"KZ"},{"name":"Kenya","code":"KE"},{"name":"Kiribati","code":"KI"},{"name":"Korea, Democratic People\"S Republic of","code":"KP"},{"name":"Korea, Republic of","code":"KR"},{"name":"Kuwait","code":"KW"},{"name":"Kyrgyzstan","code":"KG"},{"name":"Lao People's Democratic Republic","code":"LA"},{"name":"Latvia","code":"LV"},{"name":"Lebanon","code":"LB"},{"name":"Lesotho","code":"LS"},{"name":"Liberia","code":"LR"},{"name":"Libyan Arab Jamahiriya","code":"LY"},{"name":"Liechtenstein","code":"LI"},{"name":"Lithuania","code":"LT"},{"name":"Luxembourg","code":"LU"},{"name":"Macao","code":"MO"},{"name":"Macedonia, The Former Yugoslav Republic of","code":"MK"},{"name":"Madagascar","code":"MG"},{"name":"Malawi","code":"MW"},{"name":"Malaysia","code":"MY"},{"name":"Maldives","code":"MV"},{"name":"Mali","code":"ML"},{"name":"Malta","code":"MT"},{"name":"Marshall Islands","code":"MH"},{"name":"Martinique","code":"MQ"},{"name":"Mauritania","code":"MR"},{"name":"Mauritius","code":"MU"},{"name":"Mayotte","code":"YT"},{"name":"Mexico","code":"MX"},{"name":"Micronesia, Federated States of","code":"FM"},{"name":"Moldova, Republic of","code":"MD"},{"name":"Monaco","code":"MC"},{"name":"Mongolia","code":"MN"},{"name":"Montserrat","code":"MS"},{"name":"Morocco","code":"MA"},{"name":"Mozambique","code":"MZ"},{"name":"Myanmar","code":"MM"},{"name":"Namibia","code":"NA"},{"name":"Nauru","code":"NR"},{"name":"Nepal","code":"NP"},{"name":"Netherlands","code":"NL"},{"name":"Netherlands Antilles","code":"AN"},{"name":"New Caledonia","code":"NC"},{"name":"New Zealand","code":"NZ"},{"name":"Nicaragua","code":"NI"},{"name":"Niger","code":"NE"},{"name":"Nigeria","code":"NG"},{"name":"Niue","code":"NU"},{"name":"Norfolk Island","code":"NF"},{"name":"Northern Mariana Islands","code":"MP"},{"name":"Norway","code":"NO"},{"name":"Oman","code":"OM"},{"name":"Pakistan","code":"PK"},{"name":"Palau","code":"PW"},{"name":"Palestinian Territory, Occupied","code":"PS"},{"name":"Panama","code":"PA"},{"name":"Papua New Guinea","code":"PG"},{"name":"Paraguay","code":"PY"},{"name":"Peru","code":"PE"},{"name":"Philippines","code":"PH"},{"name":"Pitcairn","code":"PN"},{"name":"Poland","code":"PL"},{"name":"Portugal","code":"PT"},{"name":"Puerto Rico","code":"PR"},{"name":"Qatar","code":"QA"},{"name":"Reunion","code":"RE"},{"name":"Russian Federation","code":"RU"},{"name":"RWANDA","code":"RW"},{"name":"Saint Helena","code":"SH"},{"name":"Saint Kitts and Nevis","code":"KN"},{"name":"Saint Lucia","code":"LC"},{"name":"Saint Pierre and Miquelon","code":"PM"},{"name":"Saint Vincent and the Grenadines","code":"VC"},{"name":"Samoa","code":"WS"},{"name":"San Marino","code":"SM"},{"name":"Sao Tome and Principe","code":"ST"},{"name":"Saudi Arabia","code":"SA"},{"name":"Senegal","code":"SN"},{"name":"Serbia and Montenegro","code":"CS"},{"name":"Seychelles","code":"SC"},{"name":"Sierra Leone","code":"SL"},{"name":"Singapore","code":"SG"},{"name":"Slovakia","code":"SK"},{"name":"Slovenia","code":"SI"},{"name":"Solomon Islands","code":"SB"},{"name":"Somalia","code":"SO"},{"name":"South Africa","code":"ZA"},{"name":"South Georgia and the South Sandwich Islands","code":"GS"},{"name":"Sri Lanka","code":"LK"},{"name":"Sudan","code":"SD"},{"name":"Suriname","code":"SR"},{"name":"Svalbard and Jan Mayen","code":"SJ"},{"name":"Swaziland","code":"SZ"},{"name":"Sweden","code":"SE"},{"name":"Switzerland","code":"CH"},{"name":"Syrian Arab Republic","code":"SY"},{"name":"Taiwan, Province of China","code":"TW"},{"name":"Tajikistan","code":"TJ"},{"name":"Tanzania, United Republic of","code":"TZ"},{"name":"Thailand","code":"TH"},{"name":"Timor-Leste","code":"TL"},{"name":"Togo","code":"TG"},{"name":"Tokelau","code":"TK"},{"name":"Tonga","code":"TO"},{"name":"Trinidad and Tobago","code":"TT"},{"name":"Tunisia","code":"TN"},{"name":"Turkey","code":"TR"},{"name":"Turkmenistan","code":"TM"},{"name":"Turks and Caicos Islands","code":"TC"},{"name":"Tuvalu","code":"TV"},{"name":"Uganda","code":"UG"},{"name":"Ukraine","code":"UA"},{"name":"United Arab Emirates","code":"AE"},{"name":"United States Minor Outlying Islands","code":"UM"},{"name":"Uruguay","code":"UY"},{"name":"Uzbekistan","code":"UZ"},{"name":"Vanuatu","code":"VU"},{"name":"Venezuela","code":"VE"},{"name":"Viet Nam","code":"VN"},{"name":"Virgin Islands, British","code":"VG"},{"name":"Virgin Islands, U.S.","code":"VI"},{"name":"Wallis and Futuna","code":"WF"},{"name":"Western Sahara","code":"EH"},{"name":"Yemen","code":"YE"},{"name":"Zambia","code":"ZM"},{"name":"Zimbabwe","code":"ZW"}],
            NATIONALITY : [{"name":"Romanian"},{"name":"Hungarian"},{"name":"British"},{"name":"German"},{"name":"French"},{"name":"Italian"},{"name":"Spanish"},{"name":"Belgian"},{"name":"American"},{"name":"Afghan"},{"name":"Albanian"},{"name":"Algerian"},{"name":"Andorran"},{"name":"Angolan"},{"name":"Antiguans"},{"name":"Argentinean"},{"name":"Armenian"},{"name":"Australian"},{"name":"Austrian"},{"name":"Azerbaijani"},{"name":"Bahamian"},{"name":"Bahraini"},{"name":"Bangladeshi"},{"name":"Barbadian"},{"name":"Barbudans"},{"name":"Batswana"},{"name":"Belarusian"},{"name":"Belizean"},{"name":"Beninese"},{"name":"Bhutanese"},{"name":"Bolivian"},{"name":"Bosnian"},{"name":"Brazilian"},{"name":"Bruneian"},{"name":"Bulgarian"},{"name":"Burkinabe"},{"name":"Burmese"},{"name":"Burundian"},{"name":"Cambodian"},{"name":"Cameroonian"},{"name":"Canadian"},{"name":"Cape Verdean"},{"name":"Central African"},{"name":"Chadian"},{"name":"Chilean"},{"name":"Chinese"},{"name":"Colombian"},{"name":"Comoran"},{"name":"Congolese"},{"name":"Costa Rican"},{"name":"Croatian"},{"name":"Cuban"},{"name":"Cypriot"},{"name":"Czech"},{"name":"Danish"},{"name":"Djibouti"},{"name":"Dominican"},{"name":"Dutch"},{"name":"East Timorese"},{"name":"Ecuadorean"},{"name":"Egyptian"},{"name":"Emirian"},{"name":"Equatorial Guinean"},{"name":"Eritrean"},{"name":"Estonian"},{"name":"Ethiopian"},{"name":"Fijian"},{"name":"Filipino"},{"name":"Finnish"},{"name":"Gabonese"},{"name":"Gambian"},{"name":"Georgian"},{"name":"Ghanaian"},{"name":"Greek"},{"name":"Grenadian"},{"name":"Guatemalan"},"Guinea-Bissauan",{"name":"Guinean"},{"name":"Guyanese"},{"name":"Haitian"},{"name":"Herzegovinian"},{"name":"Honduran"},"I-Kiribati",{"name":"Icelander"},{"name":"Indian"},{"name":"Indonesian"},{"name":"Iranian"},{"name":"Iraqi"},{"name":"Irish"},{"name":"Israeli"},{"name":"Ivorian"},{"name":"Jamaican"},{"name":"Japanese"},{"name":"Jordanian"},{"name":"Kazakhstani"},{"name":"Kenyan"},{"name":"Kittian and Nevisian"},{"name":"Kuwaiti"},{"name":"Kyrgyz"},{"name":"Laotian"},{"name":"Latvian"},{"name":"Lebanese"},{"name":"Liberian"},{"name":"Libyan"},{"name":"Liechtensteiner"},{"name":"Lithuanian"},{"name":"Luxembourger"},{"name":"Macedonian"},{"name":"Malagasy"},{"name":"Malawian"},{"name":"Malaysian"},{"name":"Maldivan"},{"name":"Malian"},{"name":"Maltese"},{"name":"Marshallese"},{"name":"Mauritanian"},{"name":"Mauritian"},{"name":"Mexican"},{"name":"Micronesian"},{"name":"Moldovan"},{"name":"Monacan"},{"name":"Mongolian"},{"name":"Moroccan"},{"name":"Mosotho"},{"name":"Motswana"},{"name":"Mozambican"},{"name":"Namibian"},{"name":"Nauruan"},{"name":"Nepalese"},{"name":"New Zealander"},{"name":"Nicaraguan"},{"name":"Nigerian"},{"name":"Nigerien"},{"name":"North Korean"},{"name":"Northern Irish"},{"name":"Norwegian"},{"name":"Omani"},{"name":"Pakistani"},{"name":"Palauan"},{"name":"Panamanian"},{"name":"Papua New Guinean"},{"name":"Paraguayan"},{"name":"Peruvian"},{"name":"Polish"},{"name":"Portuguese"},{"name":"Qatari"},{"name":"Russian"},{"name":"Rwandan"},{"name":"Saint Lucian"},{"name":"Salvadoran"},{"name":"Samoan"},{"name":"San Marinese"},{"name":"Sao Tomean"},{"name":"Saudi"},{"name":"Scottish"},{"name":"Senegalese"},{"name":"Serbian"},{"name":"Seychellois"},{"name":"Sierra Leonean"},{"name":"Singaporean"},{"name":"Slovakian"},{"name":"Slovenian"},{"name":"Solomon Islander"},{"name":"Somali"},{"name":"South African"},{"name":"South Korean"},{"name":"Sri Lankan"},{"name":"Sudanese"},{"name":"Surinamer"},{"name":"Swazi"},{"name":"Swedish"},{"name":"Swiss"},{"name":"Syrian"},{"name":"Taiwanese"},{"name":"Tajik"},{"name":"Tanzanian"},{"name":"Thai"},{"name":"Togolese"},{"name":"Tongan"},{"name":"Trinidadian or Tobagonian"},{"name":"Tunisian"},{"name":"Turkish"},{"name":"Tuvaluan"},{"name":"Ugandan"},{"name":"Ukrainian"},{"name":"Uruguayan"},{"name":"Uzbekistani"},{"name":"Venezuelan"},{"name":"Vietnamese"},{"name":"Welsh"},{"name":"Yemenite"},{"name":"Zambian"},{"name":"Zimbabwean"}],
            CITY        : [{"name":"București"},{"name":"Cluj-Napoca"},{"name":"Timișoara"},{"name":"Iași"},{"name":"Constanța"},{"name":"Craiova"},{"name":"Brașov"},{"name":"Sibiu"},{"name":"Târgu Mureș"},{"name":"Baia Mare"},{"name":"Abrud"},{"name":"Adjud"},{"name":"Agnita"},{"name":"Aiud"},{"name":"Alba Iulia"},{"name":"Aleșd"},{"name":"Alexandria"},{"name":"Amara"},{"name":"Anina"},{"name":"Aninoasa"},{"name":"Arad"},{"name":"Ardud"},{"name":"Avrig"},{"name":"Azuga"},{"name":"Babadag"},{"name":"Băbeni"},{"name":"Bacău"},{"name":"Baia de Aramă"},{"name":"Baia de Arieș"},{"name":"Baia Sprie"},{"name":"Băicoi"},{"name":"Băile Govora"},{"name":"Băile Herculane"},{"name":"Băile Olănești"},{"name":"Băile Tușnad"},{"name":"Băilești"},{"name":"Bălan"},{"name":"Bălcești"},{"name":"Balș"},{"name":"Băneasa"},{"name":"Baraolt"},{"name":"Bârlad"},{"name":"Bechet"},{"name":"Beclean"},{"name":"Beiuș"},{"name":"Berbești"},{"name":"Berești"},{"name":"Bicaz"},{"name":"Bistrița"},{"name":"Blaj"},{"name":"Bocșa"},{"name":"Boldești-Scăeni"},{"name":"Bolintin-Vale"},{"name":"Borșa"},{"name":"Borsec"},{"name":"Botoșani"},{"name":"Brad"},{"name":"Bragadiru"},{"name":"Brăila"},{"name":"Breaza"},{"name":"Brezoi"},{"name":"Broșteni"},{"name":"Bucecea"},{"name":"Budești"},{"name":"Buftea"},{"name":"Buhuși"},{"name":"Bumbești-Jiu"},{"name":"Bușteni"},{"name":"Buzău"},{"name":"Buziaș"},{"name":"Cajvana"},{"name":"Calafat"},{"name":"Călan"},{"name":"Călărași"},{"name":"Călimănești"},{"name":"Câmpeni"},{"name":"Câmpia Turzii"},{"name":"Câmpina"},{"name":"Câmpulung Moldovenesc"},{"name":"Câmpulung"},{"name":"Caracal"},{"name":"Caransebeș"},{"name":"Carei"},{"name":"Cavnic"},{"name":"Căzănești"},{"name":"Cehu Silvaniei"},{"name":"Cernavodă"},{"name":"Chișineu-Criș"},{"name":"Chitila"},{"name":"Ciacova"},{"name":"Cisnădie"},{"name":"Codlea"},{"name":"Comănești"},{"name":"Comarnic"},{"name":"Copșa Mică"},{"name":"Corabia"},{"name":"Costești"},{"name":"Covasna"},{"name":"Cristuru Secuiesc"},{"name":"Cugir"},{"name":"Curtea de Argeș"},{"name":"Curtici"},{"name":"Dăbuleni"},{"name":"Darabani"},{"name":"Dărmănești"},{"name":"Dej"},{"name":"Deta"},{"name":"Deva"},{"name":"Dolhasca"},{"name":"Dorohoi"},{"name":"Drăgănești-Olt"},{"name":"Drăgășani"},{"name":"Dragomirești"},{"name":"Drobeta-Turnu Severin"},{"name":"Dumbrăveni"},{"name":"Eforie"},{"name":"Făgăraș"},{"name":"Făget"},{"name":"Fălticeni"},{"name":"Făurei"},{"name":"Fetești"},{"name":"Fieni"},{"name":"Fierbinți-Târg"},{"name":"Filiași"},{"name":"Flămânzi"},{"name":"Focșani"},{"name":"Frasin"},{"name":"Fundulea"},{"name":"Găești"},{"name":"Galați"},{"name":"Gătaia"},{"name":"Geoagiu"},{"name":"Gheorgheni"},{"name":"Gherla"},{"name":"Ghimbav"},{"name":"Giurgiu"},{"name":"Gura Humorului"},{"name":"Hârlău"},{"name":"Hârșova"},{"name":"Hațeg"},{"name":"Horezu"},{"name":"Huedin"},{"name":"Hunedoara"},{"name":"Huși"},{"name":"Ianca"},{"name":"Iernut"},{"name":"Ineu"},{"name":"Însurăței"},{"name":"Întorsura Buzăului"},{"name":"Isaccea"},{"name":"Jibou"},{"name":"Jimbolia"},{"name":"Lehliu Gară"},{"name":"Lipova"},{"name":"Liteni"},{"name":"Livada"},{"name":"Luduș"},{"name":"Lugoj"},{"name":"Lupeni"},{"name":"Măcin"},{"name":"Măgurele"},{"name":"Mangalia"},{"name":"Mărășești"},{"name":"Marghita"},{"name":"Medgidia"},{"name":"Mediaș"},{"name":"Miercurea Ciuc"},{"name":"Miercurea Nirajului"},{"name":"Miercurea Sibiului"},{"name":"Mihăilești"},{"name":"Milișăuți"},{"name":"Mioveni"},{"name":"Mizil"},{"name":"Moinești"},{"name":"Moldova Nouă"},{"name":"Moreni"},{"name":"Motru"},{"name":"Murfatlar"},{"name":"Murgeni"},{"name":"Nădlac"},{"name":"Năsăud"},{"name":"Năvodari"},{"name":"Negrești"},{"name":"Negrești-Oaș"},{"name":"Negru Vodă"},{"name":"Nehoiu"},{"name":"Novaci"},{"name":"Nucet"},{"name":"Ocna Mureș"},{"name":"Ocna Sibiului"},{"name":"Ocnele Mari"},{"name":"Odobești"},{"name":"Odorheiu Secuiesc"},{"name":"Oltenița"},{"name":"Onești"},{"name":"Oradea"},{"name":"Orăștie"},{"name":"Oravița"},{"name":"Orșova"},{"name":"Oțelu Roșu"},{"name":"Otopeni"},{"name":"Ovidiu"},{"name":"Panciu"},{"name":"Pâncota"},{"name":"Pantelimon"},{"name":"Pașcani"},{"name":"Pătârlagele"},{"name":"Pecica"},{"name":"Petrila"},{"name":"Petroșani"},{"name":"Piatra Neamț"},{"name":"Piatra-Olt"},{"name":"Pitești"},{"name":"Ploiești"},{"name":"Plopeni"},{"name":"Podu Iloaiei"},{"name":"Pogoanele"},{"name":"Popești-Leordeni"},{"name":"Potcoava"},{"name":"Predeal"},{"name":"Pucioasa"},{"name":"Răcari"},{"name":"Rădăuți"},{"name":"Râmnicu Sărat"},{"name":"Râmnicu Vâlcea"},{"name":"Râșnov"},{"name":"Recaș"},{"name":"Reghin"},{"name":"Reșița"},{"name":"Roman"},{"name":"Roșiorii de Vede"},{"name":"Rovinari"},{"name":"Roznov"},{"name":"Rupea"},{"name":"Săcele"},{"name":"Săcueni"},{"name":"Salcea"},{"name":"Săliște"},{"name":"Săliștea de Sus"},{"name":"Salonta"},{"name":"Sângeorgiu de Pădure"},{"name":"Sângeorz-Băi"},{"name":"Sânnicolau Mare"},{"name":"Sântana"},{"name":"Sărmașu"},{"name":"Satu Mare"},{"name":"Săveni"},{"name":"Scornicești"},{"name":"Sebeș"},{"name":"Sebiș"},{"name":"Segarcea"},{"name":"Seini"},{"name":"Sfântu Gheorghe"},{"name":"Sighetu Marmației"},{"name":"Sighișoara"},{"name":"Simeria"},{"name":"Șimleu Silvaniei"},{"name":"Sinaia"},{"name":"Siret"},{"name":"Slănic"},{"name":"Slănic-Moldova"},{"name":"Slatina"},{"name":"Slobozia"},{"name":"Solca"},{"name":"Șomcuta Mare"},{"name":"Sovata"},{"name":"Ștefănești, Argeș"},{"name":"Ștefănești, Botoșani"},{"name":"Ștei"},{"name":"Strehaia"},{"name":"Suceava"},{"name":"Sulina"},{"name":"Tălmaciu"},{"name":"Țăndărei"},{"name":"Târgoviște"},{"name":"Târgu Bujor"},{"name":"Târgu Cărbunești"},{"name":"Târgu Frumos"},{"name":"Târgu Jiu"},{"name":"Târgu Lăpuș"},{"name":"Târgu Neamț"},{"name":"Târgu Ocna"},{"name":"Târgu Secuiesc"},{"name":"Târnăveni"},{"name":"Tășnad"},{"name":"Tăuții-Măgherăuș"},{"name":"Techirghiol"},{"name":"Tecuci"},{"name":"Teiuș"},{"name":"Țicleni"},{"name":"Tismana"},{"name":"Titu"},{"name":"Toplița"},{"name":"Topoloveni"},{"name":"Tulcea"},{"name":"Turceni"},{"name":"Turda"},{"name":"Turnu Măgurele"},{"name":"Ulmeni"},{"name":"Ungheni"},{"name":"Uricani"},{"name":"Urlați"},{"name":"Urziceni"},{"name":"Valea lui Mihai"},{"name":"Vălenii de Munte"},{"name":"Vânju Mare"},{"name":"Vașcău"},{"name":"Vaslui"},{"name":"Vatra Dornei"},{"name":"Vicovu de Sus"},{"name":"Victoria"},{"name":"Videle"},{"name":"Vișeu de Sus"},{"name":"Vlăhița"},{"name":"Voluntari"},{"name":"Vulcan"},{"name":"Zalău"},{"name":"Zărnești"},{"name":"Zimnicea"},{"name":"Zlatna"}]
        };

    _.assign(module, {
        COUNTRY_NATIONALITY : COUNTRY_NATIONALITY
    });

    module.constant(constantName, COUNTRY_NATIONALITY);
}(angular, MODULES));
;'use strict';

angular.module('ElectricCastle.GeneratedConstants', [])

.constant('FLAGS', {IS_HTML5_MODE_ENABLED:true,IS_DEBUG_ENABLED:false,SHOULD_CHECK_FOR_ACCESS:false})

.constant('API', {ENDPOINT:'https://api2.electriccastle.ro/api/rest',HAS_ACCESS:'/check.php'})

;;(function ModelConfigWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        dependencies = ['RestangularProvider', 'API'];

    function ModelConfig (RestangularProvider, API) {
        var factory = {},

            CASE_TYPES = {
                CAMEL : 'CAMEL',
                SNAKE : 'SNAKE'
            };

        function toCase (object, resultObject, caseType) {
            var method = caseType === CASE_TYPES.CAMEL ? 'camelCase' : 'snakeCase';

            _.forOwn(object, function (value, propertyName) {
                if (_.isObject(value)) {
                    resultObject[_[method](propertyName)] = {};

                    toCase(value, resultObject[_[method](propertyName)], caseType);
                } else {
                    resultObject[_[method](propertyName)] = value;
                }
            });
        }

        /**
         * Function used to convert the property names of each JSON
         * to different case (camelCase, snake_case, kebab-case)
         * notation
         *
         * @param data     - the raw data received from server
         * @param caseType - either kebab or snake
         */
        factory.toCase = function (data, caseType) {
            var resultObject = {},
                resultArray  = [];

            if (_.isArray(data)) {
                _.forEach(data, function (object) {
                    resultObject = {};

                    toCase(object, resultObject, caseType);

                    resultArray.push(resultObject);
                });

                return resultArray;
            }

            toCase(data, resultObject, caseType);

            return resultObject;
        };

        RestangularProvider.setBaseUrl(API.ENDPOINT);

        RestangularProvider.addResponseInterceptor(function (data) {
            return factory.toCase(data, CASE_TYPES.CAMEL);
        });

        RestangularProvider.addRequestInterceptor(function (data) {
            return factory.toCase(data, CASE_TYPES.SNAKE);
        });
    }

    dependencies.push(ModelConfig);

    module.config(dependencies);
}(angular, MODULES));
;(function StatesManagerWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        dependencies = ['$stateProvider', '$urlRouterProvider'];

    function StatesManager ($stateProvider, $urlRouterProvider) {
        var states = {},

            SN         = module.constants.STATES,
            VIEWS_PATH = module.constants.PATH.VIEWS,

            UI_VIEW_PUBLIC = module.constants.UI_VIEWS.PUBLIC;

        states.private = {
            abstract    : true,
            url         : '',
            controller  : 'ElectricCastleController as ecc',
            templateUrl : VIEWS_PATH + 'application/root-view.tpl.html',
            data        : {
                name        : SN.APPLICATION.PRIVATE,
                isDisabled  : false,
                isPrivate   : true,
                pageTitle   : 'July 12-16 2017, Banffy Castle, Cluj, Romania',
                description : 'ELECTRIC CASTLE is a Romanian music festival that takes place every year on the Transylvanian spectacular domain of Banffy Castle, near Cluj-Napoca.',
                keywords    : 'electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/4.jpg',
                hasQueue    : false
            }
        };

        states.public = {
            abstract    : true,
            url         : '',
            controller  : 'ElectricCastleController as ecc',
            templateUrl : VIEWS_PATH + 'application/root-view.tpl.html',
            data        : {
                name        : SN.APPLICATION.PUBLIC,
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'July 12-16 2017, Banffy Castle, Cluj, Romania',
                description : 'ELECTRIC CASTLE is a Romanian music festival that takes place every year on the Transylvanian spectacular domain of Banffy Castle, near Cluj-Napoca.',
                keywords    : 'electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/4.jpg',
                hasQueue    : false
            }
        };

        states.home = {
            url   : '/',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.HOME].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'July 12-16 2017, Banffy Castle, Cluj, Romania',
                description : 'ELECTRIC CASTLE is a Romanian music festival that takes place every year on the Transylvanian spectacular domain of Banffy Castle, near Cluj-Napoca.',
                keywords    : 'electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/4.jpg',
                hasQueue    : false
            }
        };

        states.homePrerender = {
            url   : '/index.html.var',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.HOME_PRERENDER].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'July 12-16 2017, Banffy Castle, Cluj, Romania',
                description : 'ELECTRIC CASTLE is a Romanian music festival that takes place every year on the Transylvanian spectacular domain of Banffy Castle, near Cluj-Napoca.',
                keywords    : 'electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/4.jpg',
                hasQueue    : false
            }
        };

        states.login = {
            url   : '/login',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.LOGIN].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Login',
                description : 'Login to your account',
                keywords    : 'electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/6.jpg',
                hasQueue    : false
            }
        };

        states.changePassword = {
            url   : '/change-password',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.CHANGE_PASSWORD].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Change Password',
                description : 'Change your password',
                keywords    : 'electric castle festival, banffy castle, cluj, cluj-napoca, electro, live music, electronic music, festival, music festival',
                image       : 'https://electriccastle.ro/assets/img/meta/6.jpg',
                hasQueue    : false
            }
        };

        states.forgotPassword = {
            url   : '/forgot-password',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.FORGOT_PASSWORD].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Forgot Password',
                description : 'Did you forgot your password?',
                keywords    : 'electric castle festival, banffy castle, cluj, cluj-napoca, electro, live music, electronic music, festival, music festival',
                image       : 'https://electriccastle.ro/assets/img/meta/6.jpg',
                hasQueue    : false
            }
        };

        states.register = {
            url   : '/register',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.REGISTER].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Create an Account',
                description : 'Create an account to buy tickets at Electric Castle Festival and to have access to special offers!',
                keywords    : 'electric castle festival, account, register, buy tickets, special offers, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/6.jpg',
                hasQueue    : false
            }
        };

        states.sponsors = {
            url   : '/sponsors',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.SPONSORS].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Partners and Sponsors',
                description : 'Electric Castle Festival sponsors and partners.',
                keywords    : 'partners, sponsors, electric castle, festival, banffy, cluj, live music, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/11.jpg',
                hasQueue    : false
            }
        };

        states.partners = {
            url   : '/partners',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.PARTNERS].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Partners and Sponsors',
                description : 'Electric Castle Festival sponsors and partners.',
                keywords    : 'partners, sponsors, electric castle, festival, banffy, cluj, live music, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/11.jpg',
                hasQueue    : false
            }
        };

        states.advertising = {
            url   : '/media-and-advertising',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.ADVERTISING].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Media and advertising',
                description : 'Electric Castle Festival sponsors and partners.',
                keywords    : 'partners, sponsors, electric castle, festival, banffy, cluj, live music, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/11.jpg',
                hasQueue    : false
            }
        };

        states.careers = {
            url   : '/careers',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.CAREERS].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Careers',
                description : 'Join the Electric Castle Festival team! apply for one of the available positions.',
                keywords    : 'careers, team, jobs, electric castle, festival, banffy, cluj, live music, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/5.jpg',
                hasQueue    : false
            }
        };

        states.volunteers = {
            url   : '/volunteers',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.VOLUNTEERS].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Volunteers',
                description : 'How to volunteer at Electric Castle Festival.',
                keywords    : 'volunteers, team, electric castle, festival, banffy, cluj, live music, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/5.jpg',
                hasQueue    : false
            }
        };

        states.enVolunteers = {
            url   : '/en/volunteers',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.EN_VOLUNTEERS].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Volunteers',
                description : 'How to volunteer at Electric Castle Festival.',
                keywords    : 'volunteers, team, electric castle, festival, banffy, cluj, live music, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/5.jpg',
                hasQueue    : false
            }
        };

        states.vendors = {
            url   : '/vendors',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.VENDORS].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Vendors',
                description : 'Become a vendor at Electric Castle Festival.',
                keywords    : 'vendors, sale, food, electric castle, festival, banffy, cluj, live music, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/5.jpg',
                hasQueue    : false
            }
        };

        states.schedule = {
            url            : '/schedule?day',
            reloadOnSearch : false,
            views          : {},
            data           : {
                name        : [SN.APPLICATION.PUBLIC, SN.NEW_SCHEDULE].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Schedule',
                description : 'The schedule for ELECTRIC CASTLE, a Romanian music festival that takes place every year on the Transylvanian spectacular domain of Banffy Castle, near Cluj-Napoca.',
                keywords    : 'schedule, electric castle schedule, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/2.jpg',
                hasQueue    : false
            }
        };

        states.simpleSchedule = {
            url            : '/daily-schedule',
            reloadOnSearch : false,
            views          : {},
            data           : {
                name        : [SN.APPLICATION.PUBLIC, SN.SCHEDULE].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Schedule',
                description : 'The schedule for ELECTRIC CASTLE, a Romanian music festival that takes place every year on the Transylvanian spectacular domain of Banffy Castle, near Cluj-Napoca.',
                keywords    : 'schedule, electric castle schedule, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/2.jpg',
                hasQueue    : false
            }
        };

        states.ownTheStage = {
            url   : '/ownthestage',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.OWN_THE_STAGE].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Own the Stage',
                description : 'Creative music people we want you to Own the Stage at Electric Castle 2017!',
                keywords    : 'contest, band contest, dj contest, own the stage, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/ownthestage.jpg',
                hasQueue    : false
            }
        };

        states.termsAndConditions = {
            url   : '/terms-and-conditions',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.TERMS].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Terms and Conditions',
                description : 'Electric Castle Festival terms and conditions.',
                keywords    : 'terms and conditions, electric castle, festival, banffy, cluj, live music, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/5.jpg',
                hasQueue    : false
            }
        };

        states.internalServerError = {
            url   : '/not-available',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.INTERNAL_ERROR].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Service Unavailable',
                description : 'Internal Server Error',
                keywords    : 'electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/4.jpg',
                hasQueue    : false
            }
        };

        states.concurrencyError = {
            url   : '/high-load',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.CONCURRENCY_ERROR].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'High Load',
                description : 'Due to high load you`re waiting on a queue',
                keywords    : 'electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/4.jpg',
                hasQueue    : false
            }
        };

        states.notFound = {
            url   : '/not-found',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.NOT_FOUND].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : '',
                description : 'The page you\'re looking for does not exist',
                keywords    : 'electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/4.jpg',
                hasQueue    : false
            }
        };

        states.liveWall = {
            url   : '/livewall',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.LIVE_WALL].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Live Wall',
                description : 'Electric Castle 2016 Live wall',
                keywords    : 'live, feed, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/3.jpg',
                hasQueue    : false
            }
        };

        states.howRFIDWorks = {
            url   : '/rfid-how-it-works',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.RFID_HOW_IT_WORKS].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'RFID - How it works',
                description : 'Electric Castle 2016 RFID how it works',
                keywords    : 'rfid, how it works, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/3.jpg',
                hasQueue    : false
            }
        };

        states.access = {
            url   : '/access',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.ACCESS].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Festival Access',
                description : 'Electric Castle festival access',
                keywords    : 'access, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/access.jpg',
                hasQueue    : false
            }
        };

        states.lostAndFound = {
            url   : '/lost-and-found',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.LOST_AND_FOUND].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Lost and Found',
                description : 'Electric Castle Lost and found stuff',
                keywords    : 'lost and found, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/lost.jpg',
                hasQueue    : false
            }
        };

        states.rules = {
            url   : '/rules',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.RULES].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Rules',
                description : 'Electric Castle Rules and Regulations',
                keywords    : 'rules, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/12.jpg',
                hasQueue    : false
            }
        };

        states.contestRules = {
            url   : '/contest-rules',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.CONTEST_RULES].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Contest Rules',
                description : 'Electric Castle Contest Rules and Regulations',
                keywords    : 'rules, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/12.jpg',
                hasQueue    : false
            }
        };

        states.regulament = {
            url   : '/regulament',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.REGULAMENT].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Rules',
                description : 'Electric Castle Rules and Regulations',
                keywords    : 'rules, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/12.jpg',
                hasQueue    : false
            }
        };

        states.rulesAndRegulations = {
            url   : '/rules-and-regulations',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.RULES_REGULATIONS].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Rules',
                description : 'Electric Castle Rules and Regulations',
                keywords    : 'rules, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/12.jpg',
                hasQueue    : false
            }
        };

        states.privacyPolicy = {
            url   : '/privacy-policy',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.PRIVACY_POLICY].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Rules',
                description : 'Electric Castle Rules and Regulations',
                keywords    : 'rules, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/12.jpg',
                hasQueue    : false
            }
        };

        states.projects = {
            url   : '/projects',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.PROJECTS].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Call for Projects',
                description : 'Join the show at Electric Castle and see your dream project come to life!',
                keywords    : 'projects, creative people, electric castle, festival, banffy, cluj, live music, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/projects.jpg',
                hasQueue    : false
            }
        };

        states.callForProjects = {
            url   : '/call-for-projects',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.CALL_FOR_PROJECTS].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Call for Projects',
                description : 'Join the show at Electric Castle and see your dream project come to life!',
                keywords    : 'projects, creative people, electric castle, festival, banffy, cluj, live music, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/projects.jpg',
                hasQueue    : false
            }
        };

        states.eco = {
            url   : '/eco',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.ECO].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Be an Eco citizen!',
                description : 'This edition we are kicking-off our EC ZeroWaste campaign, which we embrace as a long-term goal to reduce, reuse and recycle all the waste generated at the festival.',
                keywords    : 'eco, zero waste, eco ambassadors, eco game, electric castle, festival, banffy, cluj, live music, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/eco.jpg',
                hasQueue    : false
            }
        };

        states.home.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'home/home.tpl.html',
            controller  : 'HomeController as hc'
        };

        states.homePrerender.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'home/home.tpl.html',
            controller  : 'HomeController as hc'
        };

        states.sponsors.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'sponsors/sponsors.tpl.html'
        };

        states.partners.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'sponsors/sponsors.tpl.html'
        };

        states.advertising.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'sponsors/advertising.tpl.html'
        };

        states.login.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'auth/login.tpl.html',
            controller  : 'LoginController as lc'
        };

        states.changePassword.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'auth/change-password.tpl.html',
            controller  : 'ChangePasswordController as cpc'
        };

        states.forgotPassword.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'auth/forgot-password.tpl.html',
            controller  : 'ForgotPasswordController as fpc'
        };

        states.register.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'auth/register.tpl.html',
            controller  : 'RegisterController as rc'
        };

        states.careers.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'careers/careers.tpl.html'
        };

        states.volunteers.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'volunteers/volunteers.tpl.html'
        };

        states.enVolunteers.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'volunteers/volunteers.tpl.html'
        };

        states.vendors.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'vendors/vendors.tpl.html'
        };

        states.schedule.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'schedule/new-schedule.tpl.html',
            controller  : 'NewScheduleController as nsc'
        };

        states.simpleSchedule.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'schedule/schedule.tpl.html',
            controller  : 'ScheduleController as schc'
        };

        states.ownTheStage.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'own-the-stage/own-the-stage.tpl.html'
        };

        states.liveWall.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'live-wall/live-wall.tpl.html'
        };

        states.howRFIDWorks.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'rfid/how-it-works.tpl.html'
        };

        states.access.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'access/access.html'
        };

        states.lostAndFound.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'info/lost.tpl.html'
        };

        states.termsAndConditions.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'info/terms.tpl.html'
        };

        states.rulesAndRegulations.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'info/rules-and-regulations.tpl.html'
        };

        states.privacyPolicy.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'info/privacy-policy.tpl.html'
        };

        states.internalServerError.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'application/internal-error.tpl.html'
        };

        states.concurrencyError.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'application/concurrency-error.tpl.html'
        };

        states.notFound.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'application/not-found.tpl.html'
        };

        states.rules.views[UI_VIEW_PUBLIC] = {
            templateUrl : '',
            controller  : 'RulesController as rc'
        };

        states.regulament.views[UI_VIEW_PUBLIC] = {
            templateUrl : '',
            controller  : 'RulesController as rc'
        };

        states.contestRules.views[UI_VIEW_PUBLIC] = {
            templateUrl : '',
            controller  : 'ContestRulesController as crc'
        };

        states.projects.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'projects/projects.tpl.html'
        };

        states.callForProjects.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'projects/projects.tpl.html'
        };

        states.eco.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'eco/eco.tpl.html'
        };

        _.forEach(states, function (state) {
            if (!state.data.isDisabled) {
                $stateProvider.state(state.data.name, state);
            }
        });

        $urlRouterProvider.otherwise('/not-found');
    }

    dependencies.push(StatesManager);

    module.config(dependencies);
}(angular, MODULES));
;(function TranslationsConstantWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        constantName = 'TRANSLATIONS',
        TRANSLATIONS = {
            en : {"GENERAL":{"COOKIE_CONSENT":"We use cookies to ensure that we give you the best experience on our website. All your personal data is safe with us. <a href=\"/privacy-policy\" target=\"_blank\">Read more</a> &raquo;","CONCURRENCY_ERROR":"Due to high load you’re waiting in a queue.<br />No worries, in a few minutes you'll be able to buy your ticket.<br />Thank you for your patience!<br /><br /><a ui-sref=\"ElectricCastlePublic.Home\">Go to home page</a>","NOT_FOUND":"The page you're looking for does not exist. The link you used is wrong or the page was removed.<br />Here's an adorable kitten instead.<br /><br /><a ui-sref=\"ElectricCastlePublic.Home\">Go to home page</a>"},"HEADER":{"HOME":"Home","TICKETS":"Tickets","BUY_TICKETS":"Buy Tickets & Accommodation","ABROAD":"From Abroad","LINE_UP":"Line up","FESTIVAL":"Festival","INFO":"Information","SHOP":"Merchandise","NEWSROOM":"Newsroom 2016","STORIES":"Stories","EC_STORIES":"EC Stories","SPONSORS":"Sponsors","MAP":"Festival Map","GETTING":"Getting There","SCHEDULE":"Schedule","SCHEDULE_TODAY":"Schedule for today","ACTIVITIES":"Activities","LIVE_WALL":"Live Wall","CAREERS":"Careers","ABOUT":"About","VOLUNTEERS":"Volunteers","FAQ":"FAQ","LOGIN":"Login","LOGOUT":"Logout","MY_ACCOUNT":"My Account","GREETING":"Hi {{name}}!","BASKET":"My Basket","ACCESS":"Access"},"ACTIONS":{"CLOSE":"Close","REGISTER":"Register"},"FOOTER":{"EMAIL_SUBSCRIBE":"Subscribe to our awesome news and offers. We won’t spam you, we promise!","EMAIL_SUBSCRIBE_SUCCESS":"Thanks for subscribing! We promise we won't spam you. You are awesome!"},"HOME":{"LOGO":{"DATE":"July 12-16, 2017","SLOGAN":"We are the people"},"REGISTER":"Register for Early Bird","TICKETS":"Get your Ticket Now!","REGISTER_TICKET":"Register your ticket here","IMPORTANT_INFO":"Read important info","TICKETS_SALE":"Get your 4 day pass<br />at a special price only today!","LINEUP":"See the full lineup","PRESS_CONF":"EC Launch Party (Live Video)","SOCIAL_TITLE":"Let's keep in touch","APPS_TITLE":"Get the official mobile app","APPS_TEXT":"The complete guide with interactive map, gps positioning, find my car & tent, party schedule activities and hot notifications.","BANNER":{"REGISTER_NOW":"Register now!","TICKETS":"Tickets","GALLERY":"Gallery","ABOUT":"About","LINEUP":"Lineup","INFO":"Info"}},"TICKETS":{"TAG_LINE":"Choose what suits you the best","AVAILABLE_UNTIL":"Early bird until {{until}}","LOCATIONS":"To buy a Hard Copy Ticket, not an online e-ticket, please visit one of our <a class=\"hvr-overline-from-left\" href=\"javascript:void(0)\" ng-click=\"{{callback}}\">Partner Locations</a> around the country or the ones in the <a class=\"hvr-overline-from-left\" href=\"http://www.eventim.ro/ro/outlete/\" target=\"_blank\">Eventim Network</a>.<br />If you're coming from abroad and would like to purchase your ticket in a different currency than Romanian Lei, you can do it with our partner <a class=\"hvr-overline-from-left\" href=\"/from-abroad\">Festicket here</a>.<br /><br/>To upgrade a ticket you already bought, please <a ui-sref=\"ElectricCastlePublic.MyAccount.Orders\" class=\"hvr-overline-from-left\">go to your account</a>. The upgrade is available for Regular Camping (to Premium Camping), 1-Day Pass (to 4-Days Pass) and 4-Days Pass (to 4-Days Pass VIP).","ADD_TO_BASKET":"Add to cart","TICKET_PRICE":"{{price}} Lei","AVAILABLE_SOON":"Coming soon","ONLY_FOR_REGISTERED":"Login to select","SOLD_OUT":"Sold out","COMING_SOON":"Available soon","TRY_AGAIN_LATER":"There was an error processing your request. Please try again in a few minutes.<br />Here's an adorable kitten instead.<br /><br /><a ui-sref=\"ElectricCastlePublic.Home\">Back to home page</a>","FEST_TICKET":"<p>Electric Castle has partnered with Festicket to offer you a wide range of Tickets & Accommodation Packages tailored specifically for our 2017 edition.</p><p>You can choose to get your Ticket now in €, £ or $ and come back later to get your accommodation. Or you can choose to get everything together and browse through pre-pitched tents on the campsite, Hostels or Hotels options. Have a look at their offering below:</p>","PRICE_TBA":"Price TBA","STEP":"Step","CLICK_FOR_MORE":"Details","SHOW_LESS":"Show less","INFO_BAR":{"SELECTED_PRODUCTS":{"PREFIX":"You have selected","SUFFIX":""},"TOTAL_VALUE":"<span class=\"hidden-xs\">Order total:</span><strong>{{totalPrice}}&nbsp;RON</strong>&nbsp;&nbsp;&nbsp;({{totalPriceEur}}&nbsp;EUR)","MESSAGES":{"NOTHING_SELECTED":"Please select the items you want and the desired quantity","TICKET_SELECTED":{"PREFIX":"You have selected","SUFFIX":"tickets"},"SELECT_CAMPING":"Good! Now choose your camping!","FINALIZE":"Looking good! Now finalize your order.","NO_TICKET_SELECTED":"Please select at least one ticket.","NO_CAMPING_SELECTED":"Please select at least one camping option or check 'No thanks'."}},"MODAL":{"PARTNER_LOCATIONS":{"HEADER":"Partner Locations"},"FIRST_LOGIN_THANK_YOU":{"TITLE":"Thank you for confirming your account!","DESCRIPTION":"In order to finalize the confirmation process, please fill all your details in your settings page below. Then, come back on <strong>October 5</strong> to get your EarlyBird tickets.","CLOSE":"OK"},"HOME_INFO":{"HEADER":{"RO":"Lucruri de stiut inainte sa ajungi la castel","EN":"Things to know before you arrive at the castle"},"BODY":{"BUTTONS":{"EN":"English","RO":"Romana"},"CLOSE":{"EN":"Close","RO":"Inchide"}}}},"SECTION":{"HEADING":"Choose your {{ticketType}}","PRICE":"{{price}} Lei","NOTHING_SELECTED":"Select quantity"},"CONTROLS":{"NO_CAMPING":"No thanks, I don't need camping","CAMPING_WARNING":"Are you sure? The camping tickets are limited!","FINALIZE":"Finalize"},"TABS":{"ENTRY":"Entry","CAMPING":"Camping","VIP":"Vip","PACKAGES":"Packages"},"BASKET":{"MODAL":{"ADD":{"TITLE":"Add to cart","MESSAGE":"You've just added 1 x {{productName}} ({{productPrice}} Lei) to your cart.","LIMIT_REACHED":"You have reached the maximum number of {{productName}} in your cart.","VIEW_BASKET":"View cart","CLOSE":"Continue shopping"},"REMOVE":{"TITLE":"Are you sure you want to delete this item?"}}},"WAITING":{"REGISTER_MESSAGE":"Register to get a chance of buying one of the first 5000 tickets!","VALID_FROM":"Registration period opens on 15.10.2015"}},"TICKETS_REDESIGN":{"PAGE":{"TITLE":"Your festival pass"},"CONFIRM_NOT_FINALIZED_ORDER":{"TITLE":"Are you sure do you want to leave?","MESSAGE":"You have items in your order and you did not finalize it! Are you sure do you want to leave?","YES":"Yes, I want to leave","NO":"No, keep me on this page"}},"TICKETS_V2":{"GO_BACK":"Go back","GO_TO_NEXT":"Next","FINALIZE":"Finalize","CHOOSE_YOUR_TICKET":"Plan your electric adventure, choose a ticket","FOUR_DAY_PASS":"Four days pass","CAMPING":"Camping","CHOOSE_YOUR_PASS":"Choose your pass","CHOOSE_YOUR_CAMPING":"Move to Bonţida, get a camping pass","CHOOSE_YOUR_ADD_ON":"Tune-up your stay, get a premium add-on","PREMIUM_CAMPING_ADD_ONS":"+ Premium camping add ons +","CAMPING_ADD_ON":"Camping add on","TICKETS_CART":{"EMPTY":"Nothing added yet.","TOTAL":"Total","CHECKOUT":"Finalize","TITLE":"Your selection(s)","START_OVER":"Start Over","NEED_HELP":"Heed Help?","MAIL_AND_LINK":"If you need help visit the <a ui-sref=\"{{sref}}\">FAQ</a> section or contact us at <a href=\"mailto:{{mail}}\">{{mail}}</a>."},"NO_CAMPING":{"TITLE":"Are you sure you don't want camping?<br />The camping tickets <br />are limited!","GO_BACK_TO_CAMPING":"Get me back to camping","FINALIZE":"Finalize as it is"},"CAMPING_CONFIRMATION":{"TITLE":"Are you sure you want regular camping?","SUBTITLE":"If you choose premium camping <br />you have different add ons.","GO_BACK_TO_CAMPING":"Ok, let's see it","FINALIZE":"Finalize as it is"}},"LINE_UP":{"TABS":{"LIST":"List","ALPHABETICAL":"Alphabetical"},"SCHEDULE":{"DAY":"Day","HOUR":"Hour","STAGE":"Stage","DAY_0":"Wednesday, July 12","DAY_1":"Thursday, July 13","DAY_2":"Friday, July 14","DAY_3":"Saturday, July 15","DAY_4":"Sunday, July 16"},"COMING_SOON":"Line up coming soon","SCHEDULE_COMING_SOON":"Schedule coming soon"},"INFO":{"TABS":{"THE_CASTLE":"The Castle","HISTORY":"Festival History","PRESS":"Press","ECO":"Eco"},"PRESS":{"AREA":"Go to Press Area"}},"FAQ":{"TABS":{"TICKETS":"Tickets & Merchandise","FESTIVAL_AREA":"Festival Area","VENDORS_VOLUNTEERS_AND_JOBS":"Vendors, Volunteers, Jobs","ACCOMMODATION_AND_TRANSPORT":"Accommodation & Transport"}},"MY_ACCOUNT":{"TABS":{"ORDERS":"My Orders","SCHEDULE":"My Schedule","REDEEM_CARD":"Redeem Gift Card","SETTINGS":"Settings","INVITATIONS":"Invitations"}},"SHOP":{"PRODUCT_FREE":"Free","PRODUCT_PRICE":"{{price}} Lei","NO_PRODUCTS":"Our awesome products will be available soon. Stay tuned!"},"BASKET":{"SHOPPING_CART":"Your cart","ITEMS_ADDED":"Added items?","UPDATE_CART":"Update cart","NO_PRODUCT":"You currently do not have any products added to your cart.","CHECKOUT":"Checkout","SUBTOTAL":"Total: <strong>{{subTotal}}</strong> Lei","SHIPPING":"Shipping: <strong>{{shipping}}</strong> Lei","DISCOUNT":"Discount: <strong>-{{discount}}</strong> Lei","TOTAL":"To Pay: <strong>{{total}}</strong> Lei","ACCOUNT_BALANCE":"Your discount balance: <strong>{{balance}}</strong> Lei","REDEEM_GIFT_CARD":"Add coupon","CONTINUE_SHOPPING":"Merchandise","CONTINUE_TICKETS":"Tickets","ADDITIONAL_INFO":{"CHECKOUT":{"TITLE":"Checkout","DESCRIPTION":"Following this option you will buy your ticket instantly using our online platform. The payment will be made using your debit/credit card. You will receive the confirmation of your payment and instructions on how to download your e-ticket(s) on your email."},"EVENTIM":{"TITLE":"Reserve on Eventim","DESCRIPTION":"You will be redirected to the Eventim platform where you can reserve your ticket for a week (7 days). This will keep your ticket “locked” until you will make the payment. You will have the options to either print your ticket(s) at home or pick-up a “physical” ticket from the <a href=\"http://www.eventim.ro/\" target=\"_blank\">Eventim Network</a>."},"TOTALS":"Shipping price and discount (if applicable) will be added to your cart total after you login."},"ERROR":{"QUANTITY_EXCEEDED":"Please check your order history or your cart.","ONLY_FOUR_TICKETS":"You can select only 4 passes of the same type.","ONLY_SIX_TICKETS":"You can select only 6 passes of the same type.","ONLY_NINE_TICKETS":"You can select only 9 passes of the same type."}},"LOGIN":{"EMAIL":"Email","PASSWORD":"Password","OLD_PASSWORD":"Old password","REMEMBER_ME":"Remember me","PASSWORD_HELP":"Forgot password?","BUTTON":"Login","CREATE_ACCOUNT":"Create account","REGISTER":"Register","CHANGE_PASSWORD":"Change password"},"ORDERS":{"NO_ORDER":"You currently do not have any orders.","PRODUCT_NAME":"Product","PRICE":"Total","DOWNLOAD":"Download","UPGRADE":"Upgrade","QUANTITY":"Quantity","DOWNLOAD_SOON":"Download available soon","UPGRADED":"Upgraded","PLACED_AT":"Order #{{orderId}} from","CANCEL_INSTALLMENTS":{"TITLE":"Cancel payment plan","MESSAGE":"Are you sure you want to cancel your payment plan? By doing this you will lose your first 2 monthly payments.","CLOSE":"Close","CANCEL_ORDER":"Yes, Cancel Payments"},"UPDATE_CARD":{"TITLE":"Update Credit Card Details","MESSAGE":"Are you sure you want to change your credit card details? To do this, you need to make the next monthly payment now. After this, the next payments will be automatically deducted from the new credit card. If you don't make the payment, your card details will remain unchanged.","CLOSE":"Close","CANCEL_ORDER":"Yes, Update Card Details"},"PAY_FULL":{"TITLE":"Pay Remainder Amount","MESSAGE":"By choosing this option you can pay the remainder amount and end the payment plan now.","CLOSE":"Close","CANCEL_ORDER":"Yes, Pay Now"}},"REGISTER":{"FIRST_NAME":"First Name","LAST_NAME":"Last Name","EMAIL":"Email Address","PHONE":"Phone","NATIONALITY":"Nationality","CITY":"City","ZIP":"Zip Code","STREET":"Street","NUMBER":"Number","BLOCK":"Block","FLOOR":"Floor","APARTMENT":"Apt.","ADDRESS":"Address","PASSWORD":"Password","CONFIRM_PASSWORD":"Confirm Password","BIRTH_DATE":"Birth date (DD/MM/YYYY)","BIRTH_DATE_PLACEHOLDER":"Birth date","GENDER":"Gender","SING_UP_NEWSLETTER":"Sign up for our awesome news and offers! We won’t spam you, we promise!","JOIN_COMMUNITY":"Join the community","TERMS_AND_CONDITIONS":"By clicking REGISTER you are agreeing to the Electric Castle Festival <a href=\"/terms-and-conditions\" class=\"link--text\" target=\"_blank\">Terms &amp; Conditions</a>. And don’t worry. All your personal data is safe with us, you can read our <a class=\"link--text\" href=\"/privacy-policy\" target=\"_blank\">Privacy Policy</a>","COUNTRY":"Country","WHERE_YOU_LIVE":"Where do you live?","ABOUT_YOU":"About you","SHIPPING_ADDRESS":"Shipping address","SAVE_CHANGES":"Save changes","UPDATE_SUCCESS":"Your account data has been successfully updated."},"CHANGE_PASSWORD":{"UPDATE_SUCCESS":"Your password has been successfully changed"},"RESET_PASSWORD":{"DESCRIPTION":"Enter your email address and we'll help you reset your password.","SUBMIT":"Reset password","UPDATE_SUCCESS":"An email has been sent to {{emailAddress}}. Please check your inbox and follow the instructions to reset your password."},"GIFT_CARD":{"CODE":"Your discount coupon code","BUTTON":"Submit","MODAL_HEADER":"Add discount coupon code","BALANCE":"Your gift card balance: {{balance}} Lei","INFO":"If you have a gift card you can redeem it below. After you redeem it you will use the amount for your next purchases."},"INVITATIONS":{"NAME":"Full Name","EMAIL":"Email","ACTIONS":"Actions","EDIT":"Edit","SAVE":"Save","SEND_FINAL":"Send","USED_INVITATIONS":"Assigned invitations","AVAILABLE_INVITATIONS":"Available invitations","NUMBER_OF_AVAILABLE_INVITATIONS":"You have {{howMany}} invitations to assign.","NO_USED_INVITATIONS":"You currently do not have any assigned invitations.","NO_AVAILABLE_INVITATIONS":"You currently do not have any available invitations.","MAIN_CTA":"Assign invitations","SECONDARY_CTA":"Add row"},"VALIDATIONS_ERRORS":{"IS_REQUIRED":"This field is required.","NOT_A_VALID_EMAIL":"The email is not in the proper format.","NOT_A_VALID_PHONE_NUMBER":"The entered value is not a valid phone number.","NOT_A_VALID_DATE":"Please enter the date in the following format {{acceptedFormat}}","MIN_LENGTH":"Please enter at least {{min}} characters.","MUST_MATCH":"Please enter the same password again.","LENGTH":"Quantity must be between {{min}} and {{max}}."},"MODAL":{"LOGIN":{"HEADER":"Login or register to continue","LOGIN_LABEL":"Welcome back! Please login:","REGISTER_LABEL":"New to EC? Please register:"}},"CHECKOUT":{"SUCCESS":{"TITLE":"All good! The payment has been made","DESCRIPTION":"You will receive details in your email and you can also check the order(s) in your account.<br />If you need help, don’t hesitate to contact us at <a href='mailto:orders@electriccastle.ro'>orders&commat;electriccastle.ro</a>"},"FAILED":{"TITLE":"Something went wrong with your payment","DESCRIPTION":"Your card details were wrong or your bank did not approve the transaction.<br />If you need help, don’t hesitate to contact us at <a href='mailto:orders@electriccastle.ro'>orders&commat;electriccastle.ro</a>"}}},
            ro : {"GENERAL":{"COOKIE_CONSENT":"We use cookies to ensure that we give you the best experience on our website. All your personal data is safe with us. <a href=\"/assets/docs/privacy.pdf\" target=\"_blank\">Read more</a> &raquo;"},"HEADER":{"HOME":"Home","TICKETS":"Tickets","LINE_UP":"Line up","FESTIVAL":"Festival","INFO":"Info","SHOP":"Shop","SPONSORS":"Sponsors","ABOUT":"About","FAQ":"FAQ","LOGIN":"Login","LOGOUT":"Logout","MY_ACCOUNT":"My Account","GREETING":"Hi {{name}}!","BASKET":"My Basket"},"FOOTER":{"EMAIL_SUBSCRIBE":"Subscribe to our awesome news and offers. We won’t spam you, we promise!","EMAIL_SUBSCRIBE_SUCCESS":"Thank you for subscribing to the our news and offers!"},"HOME":{"LOGO":{"DATE":"July 12-16, 2017","SLOGAN":"We are the people"},"REGISTER":"Register for Early Bird","TICKETS":"Tickets Information","SOCIAL_TITLE":"Let's keep in touch","APPS_TITLE":"Get the official mobile app","APPS_TEXT":"The complete guide with interactive map, gps positioning, find my car & tent, party schedule activities and hot notifications.","BANNER":{"REGISTER_NOW":"Register now!","TICKETS":"Tickets","GALLERY":"Gallery","ABOUT":"About"}},"TICKETS":{"TAG_LINE":"Choose what suits you the best","AVAILABLE_UNTIL":"Early bird until {{until}}","ADD_TO_BASKET":"Add to basket","TICKET_PRICE":"{{price}} Lei","INFO_BAR":{"SELECTED_PRODUCTS":{"PREFIX":"You have selected","SUFFIX":"tickets"},"TOTAL_VALUE":"Amount to pay <strong>{{totalPrice}}&nbsp;Lei</strong>","MESSAGES":{"NOTHING_SELECTED":"Please select the ticket you want and the desired quantity","TICKET_SELECTED":{"PREFIX":"You have selected","SUFFIX":"tickets"},"SELECT_CAMPING":"Good! Now choose your camping!","FINALIZE":"Looking good! Now finalize your order","NO_TICKET_SELECTED":"Please select at least one ticket","NO_CAMPING_SELECTED":"Select one camping option or check 'No thanks'"}},"SECTION":{"HEADING":"Choose your {{ticketType}}","PRICE":"{{price}} Lei","NOTHING_SELECTED":"Choose quantity"},"CONTROLS":{"NO_CAMPING":"No thanks, I don't need camping","CAMPING_WARNING":"Are you sure? The camping tickets are limited!","FINALIZE":"Finalize"},"TABS":{"ENTRY":"Entry","CAMPING":"Camping","VIP":"Vip","PACKAGES":"Packages"},"BASKET":{"MODAL":{"ADD":{"TITLE":"The ticket had been added to your basket","MESSAGE":"You've just added 1 x {{ticketName}} ({{ticketPrice}}) tickets to your basket","VIEW_BASKET":"View basket","CLOSE":"Close"},"REMOVE":{"TITLE":"Are you sure you want to delete this ticket?"}}},"WAITING":{"REGISTER_MESSAGE":"Register to get a chance of buying one of the first 5000 tickets!","VALID_FROM":"Registration period opens on 15.10.2015"}},"FESTIVAL":{"TABS":{"OVERVIEW":"Overview","GETTING_THERE":"Getting there","MAP":"Map","SUSTAINABILITY":"Eco","HISTORY":"History"}},"LINE_UP":{"TABS":{"LIST":"List","ALPHABETICAL":"Alphabetical","SCHEDULE":"Schedule"}},"INFO":{"TABS":{"RULES":"Rules","PRESS":"Press","FAQ":"Faq","L_AND_F":"Lost & Found"},"PRESS":{"AREA":"Go to Press Area"}},"MY_ACCOUNT":{"TABS":{"ORDERS":"Orders","SCHEDULE":"Schedule","MY_RFID":"RFID Card","SETTINGS":"Settings"}},"BASKET":{"SHOPPING_CART":"Your basket","ITEMS_ADDED":"Added items?","UPDATE_CART":"Update cart","NO_PRODUCT":"You currently do not have any products added to your basket.","CHECKOUT":"Checkout","ERROR":{"QUANTITY_EXCEEDED":"Please check your order history or your basket."}},"LOGIN":{"EMAIL":"Email","PASSWORD":"Password","OLD_PASSWORD":"Old password","REMEMBER_ME":"Remember me","PASSWORD_HELP":"Forgot password?","BUTTON":"Login","CREATE_ACCOUNT":"Create account","CHANGE_PASSWORD":"Change password"},"ORDERS":{"NO_ORDER":"You currently do not have any orders.","PRODUCT_NAME":"Product name","PRICE":"Total","DOWNLOAD":"Download","PLACED_AT":"Order placed"},"REGISTER":{"FIRST_NAME":"First Name","LAST_NAME":"Last Name","EMAIL":"Email Address","PHONE":"Phone","NATIONALITY":"Nationality","ZIP_CITY":"City","PASSWORD":"Password","CONFIRM_PASSWORD":"Confirm Password","BIRTH_DATE":"Birth date (DD/MM/YYYY)","BIRTH_DATE_PLACEHOLDER":"Birth date","GENDER":"Gender","SING_UP_NEWSLETTER":"Sign up for our awesome news and offers! We won’t spam you, we promise!","JOIN_COMMUNITY":"Join the community","TERMS_AND_CONDITIONS":"By clicking JOIN THE COMMUNITY<br />you are agreeing to the<br />Electric Castle Festival <a href=\"/assets/docs/rules.pdf\" target=\"_blank\">Terms &amp; Conditions</a>.<br />And don’t worry. All your personal data is safe with us,<br /> you can read our <a href=\"/assets/docs/privacy.pdf\" target=\"_blank\">Privacy Policy</a>","COUNTRY":"Country","WHERE_YOU_LIVE":"Where do you live?","SAVE_CHANGES":"Save changes","UPDATE_SUCCESS":"Your account data has been successfully updated."},"CHANGE_PASSWORD":{"UPDATE_SUCCESS":"Your password has been successfully changed"},"RESET_PASSWORD":{"DESCRIPTION":"Enter your email address and we'll help you reset your password.","SUBMIT":"Reset password","UPDATE_SUCCESS":"An email has been sent to {{emailAddress}}. Please check your inbox and follow the instructions to reset your password."},"VALIDATIONS_ERRORS":{"IS_REQUIRED":"This field is required.","NOT_A_VALID_EMAIL":"The email is not in the proper format.","NOT_A_VALID_PHONE_NUMBER":"The entered value is not a valid phone number.","NOT_A_VALID_DATE":"Please enter the date in the following format {{acceptedFormat}}","MIN_LENGTH":"Please enter at least {{min}} characters.","MUST_MATCH":"Please enter the same password again.","LENGTH":"Quantity must be between {{min}} and {{max}}."},"MODAL":{"LOGIN":{"HEADER":"Login"}},"CHECKOUT":{"SUCCESS":{"TITLE":"All good! The payment has been made.","DESCRIPTION":"You will receive details about your ticket(s) and all the information you need in your email. See you at the Castle!<br /><br />WE ARE THE PEOPLE!"},"FAILED":{"TITLE":"Something went wrong with your payment!","DESCRIPTION":"Something went wrong with your payment! We are looking into it and we’re trying to solve this as fast as we can.<br />If need help, don’t hesitate to contact us: <a href='mailto:contact@electriccastle.ro'>contact&commat;electriccastle.ro</a>.<br />Thanks!"}}}
        };

    _.assign(module, {
        TRANSLATIONS : TRANSLATIONS
    });

    module.constant(constantName, TRANSLATIONS);
}(angular, MODULES));
;angular.module('ElectricCastle').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('assets/views/application/application-logo.tpl.html',
    "<div class=application-logo ui-sref=ElectricCastlePublic.Home itemprop=url content=\"https://electriccastle.ro/\"><h1 class=\"text-uppercase text-center margin-top-80 margin-bottom-10\">{{'HOME.LOGO.DATE' | translate}}<br>{{'HOME.LOGO.SLOGAN' | translate}}</h1><img ng-if=!inverted src=/assets/img/logo-small.png itemprop=image content=/assets/img/logo-small.png alt=\"Electric Castle\" class=\"img-responsive center-block logo-small\"> <img ng-if=inverted src=/assets/img/logo-small-white.png itemprop=image content=/assets/img/logo-small-white.png alt=\"Electric Castle\" class=\"img-responsive center-block logo-small\"></div>"
  );


  $templateCache.put('assets/views/application/concurrency-error.tpl.html',
    "<div class=\"page-container page-container__bg\"><div class=container><h1>The Server is Busy</h1><p class=text-medium bind-html-compile=\"'GENERAL.CONCURRENCY_ERROR' | translate\"></p></div></div>"
  );


  $templateCache.put('assets/views/application/cookie-consent.tpl.html',
    "<section class=\"cookie-consent animated fadeInUp\" ng-hide=ccc.consent()><div class=container><div class=row><div class=\"col-md-11 col-xs-10\"><p translate=\"{{'GENERAL.COOKIE_CONSENT'}}\" class=no-margin></p></div><div class=\"col-md-1 col-xs-2\"><button class=\"btn btn-default\" ng-click=ccc.consent(true)>OK</button></div></div></div></section>"
  );


  $templateCache.put('assets/views/application/footer.tpl.html',
    "<footer ng-hide=fc.shouldHideFooter data-js=footer><div class=container><div class=\"col-md-2 col-sm-4\"><ul><li><a ui-sref=ElectricCastlePublic.Home>{{'HEADER.HOME' | translate}}</a></li><li><a ui-sref=ElectricCastlePublic.LineUp.List>Line up</a></li><li><a ui-sref=ElectricCastlePublic.Tickets>{{'HEADER.TICKETS' | translate}}</a></li><li><a ui-sref=ElectricCastlePublic.Merchandise>{{'HEADER.SHOP' | translate}}</a></li></ul></div><div class=\"col-md-2 col-sm-4\"><ul><li><a ui-sref=ElectricCastlePublic.Partners>Partners</a></li><li><a ui-sref=ElectricCastlePublic.TheCastle>{{'INFO.TABS.THE_CASTLE' | translate}}</a></li><li><a ui-sref=ElectricCastlePublic.History>{{'INFO.TABS.HISTORY' | translate}}</a></li></ul></div><div class=\"col-md-3 col-sm-4\"><ul><li><a ui-sref=ElectricCastlePublic.TicketsInfo>Tickets Info</a></li><li><a ui-sref=ElectricCastlePublic.PrivacyPolicy>Privacy Policy</a></li><li><a ui-sref=ElectricCastlePublic.TermsAndConditions>Terms &amp; Conditions</a></li><li><a ui-sref=ElectricCastlePublic.RulesAndRegulations>Rules &amp; Regulations</a></li></ul></div><div class=\"clearfix visible-xs\"></div><div class=\"col-md-5 col-sm-12\"><img ui-sref=ElectricCastlePublic.Home src=/assets/img/logo-footer.png class=\"logo img-responsive\" alt=\"\"><div class=clearfix></div></div><p class=\"text-smaller col-md-12 margin-top-10 text-right\">Contact us at: <a href=mailto:contact@electriccastle.ro>contact@electriccastle.ro</a><br>Copyright &copy; SC Festival Tickets Management SRL, CUI: RO35190617, Reg. Com.: J12/3329/02.11.2015</p></div></footer>"
  );


  $templateCache.put('assets/views/application/header.tpl.html',
    "<nav class=\"navbar navbar-fixed-top header\" ng-hide=hc.shouldHideHeader><div class=\"container flex flex-space-between flex-v-center\"><div class=\"flex flex-v-center\"><img ui-sref=ElectricCastlePublic.Home src=/assets/img/logo-square.png data-js=header-logo class=\"header__logo img-responsive center-block\" alt=\"\"> <a href=javascript:void(0) class=\"link text-uppercase link--festival-date hidden-xs\">JULY 12-16, 2017</a></div><div class=flex><header-account></header-account><button class=\"si-icon si-icon-hamburger-cross\" ng-click=hc.toggleMenu() data-icon-name=hamburgerCross svg-icon data-js=menu-toggle analytics-on analytics-event=\"Menu open\" analytics-category=Navigation><span class=\"menu-label hidden-xs\">Menu</span></button></div></div></nav>"
  );


  $templateCache.put('assets/views/application/home-box.tpl.html',
    "<figure class=home-box ui-sref=ElectricCastlePublic.Tickets><svg id=Layer_1 data-name=\"Layer 1\" xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink viewbox=\"0 0 190.02 179.21\"><defs><style>.cls-1 {\n" +
    "                    fill: #8ec9ab;\n" +
    "                }\n" +
    "\n" +
    "                .cls-2, .cls-3 {\n" +
    "                    fill: #23242d;\n" +
    "                }\n" +
    "\n" +
    "                .cls-4 {\n" +
    "                    fill: #302d39;\n" +
    "                }</style><lineargradient id=linear-gradient x1=304.72 y1=620.88 x2=319.16 y2=462.22 gradienttransform=\"translate(239.24 -512.9) rotate(43.39)\" gradientunits=userSpaceOnUse><stop offset=0 stop-color=#e03330></stop><stop offset=1 stop-color=#fdeb30></stop></lineargradient></defs><g><path class=\"cls-1 rotate-reverse\" d=M187.9,113.06C175,165.53,113.8,187,64.27,176.72S-7.05,116.6,2,72.82,54-8.55,103.49,1.7,200.75,60.87,187.9,113.06Z transform=\"translate(0 0)\"></path><path class=\"cls-2 rotate\" d=M178.58,114.62c-8.58,11.46-16.88,23.12-25.86,34.27a85.71,85.71,0,0,1-14.68,14A22.26,22.26,0,0,1,114.9,166c-5-2.07-10-2.42-15.32-2.18-17.11.77-32.94-3.85-47.48-13.23a14.18,14.18,0,0,0-5.18-2c-10.9-1.8-19.76-6.37-25.16-16.25-2.7-4.94-6-9.59-8.68-14.54C7.55,107.5,9.19,97.9,15.18,88.72a15.2,15.2,0,0,0,2.19-6.53Q20.84,49.82,48,31.13a13.9,13.9,0,0,0,4-4.31,28.54,28.54,0,0,1,21-14.45,75,75,0,0,1,29.37.81,12.48,12.48,0,0,0,4.06.39c10.06-1.12,18.91,2,26.52,8.39a176.71,176.71,0,0,1,16.8,15.92c2.49,2.71,3.72,6.51,5.3,9.9s3,7,4.43,10.59q4,9.59,7.9,19.18c0.5,1.21.79,2.64,1.67,3.53,8.56,8.69,12.6,18.61,10.71,30.25ZM84.21,152.56c2.7,1.06,5.45,2,8.08,3.21,2.09,1,3.59.85,5.31-.68a37.12,37.12,0,0,1,21.88-9.25c6.91-.61,13.9-0.83,20.87-0.77,3,0,5.37-.44,7.09-2.71,4.34-5.75,8.69-11.5,13-17.3,2.68-3.64,2.83-7.55.67-11.74-1.91-3.69-3.36-7.6-5.4-11.22a29.32,29.32,0,0,1-3.92-16.3,81.79,81.79,0,0,1,1.13-11.31c0.63-3.21-.21-5.23-3.14-7.21-11-7.43-19.18-17-23.55-29.28a46.81,46.81,0,0,0-4.35-8.87,8.85,8.85,0,0,0-4.09-3.4c-19.22-7.09-38-6.67-56.55.45C54,28.93,49.39,33,48,40.55c-2.36,12.85-9.27,23.33-18.42,32.6a104.57,104.57,0,0,0-8.91,10.64,8.33,8.33,0,0,0-1.58,4.82c0.29,19.5,7.89,36.36,22.06,51,5.92,6.11,12.37,9.62,21.11,9C69.76,148.18,77.26,148.84,84.21,152.56ZM124,28.31c5.68,16.29,13.3,30.56,29.78,39.5,0.29-3.32.67-6.45,0.78-9.6,0.05-1.73.25-3.87-.67-5.17A75.21,75.21,0,0,0,124,28.31Zm-78.46,118c-17.62-15.23-27.11-33.89-28.52-57-5.73,8.5-7.78,16.59-3.56,25.22,3.3,6.77,7.64,13.12,11.51,19.66C29.45,141.84,36.82,145,45.5,146.32ZM19.75,81.38c13.51-13.44,26-27.6,28.08-47.33C34.89,39.44,18.63,66.67,19.75,81.38Zm135.82-9.8c-6.32,16.37,1,30.14,8.62,44,3.65-8.69,4.75-25,2.33-33.81a4,4,0,0,0-.92-1.92C162.32,77.07,159,74.35,155.57,71.57ZM97.24,157.51c5.56,2.53,10.41,5.15,16.13,2.92,6.46-2.52,13.08-4.7,19.41-7.44,3.25-1.41,6-3.72,9-5.62l-0.51-1C125.64,146.28,109.88,145.8,97.24,157.51Zm72-73.6c0.06,5.53.54,10.92,0,16.19s-2.17,10.37-3,15.61c-0.66,4.29-.81,8.68-1.18,13l1.54,0.45c3.19-4.79,6.82-9.36,9.48-14.42C181.28,105,178.13,91.91,169.28,83.91Zm-57.76,78.75c6.21,3.6,11.76,4.58,17.45,2.88,11.29-3.37,17.85-11.92,24.49-20.39-3.13.53-6.63,0.69-8.82,2.36A80.43,80.43,0,0,1,111.51,162.66Zm41.78-114c-2.79-14.9-30.65-36.13-43.38-33.17,2.09,1.4,4.5,2.36,5.88,4.07,4.06,5,9.76,7.57,15.29,10.45,0.22,0.11.42,0.28,0.64,0.4A89.67,89.67,0,0,1,153.29,48.67ZM53.7,27.6c1.6-.7,2.48-1.06,3.32-1.46,8.9-4.19,18.42-6.25,28.39-7.31,4.85-.52,9.47-2.5,15.09-4.06C82.73,8.67,61.25,14.58,53.7,27.6ZM93.42,158.25c-11.73-6.54-26.55-9.67-38.28-8,0.7,0.5,1.13.87,1.62,1.15a84.48,84.48,0,0,0,29.78,10.23C89.84,162.11,92.1,161.46,93.42,158.25Zm71.21-81.51,1.14-.4-8.4-18.93c-2.63,12-2.63,12,6.93,19.18A1.86,1.86,0,0,0,164.63,76.74Zm-1,47.63-14.4,19.81C158.32,142.54,165.5,132.68,163.63,124.37ZM116.69,22.87c-4.86-7.19-14.2-9.05-22.08-4.39Zm-14.3,139.21c-5.87-3.77-6.75-3.75-9.1.12Z transform=\"translate(0 0)\"></path><g><g><circle class=cls-3 cx=139.16 cy=83.87 r=3.26></circle><circle class=cls-3 cx=46.08 cy=83.87 r=3.26></circle></g><g><path class=cls-3 d=M55.73,75.87c2-6.87,6.57-8.63,11-8.63,5.62,0,9.83,2.91,9.83,9a7.51,7.51,0,0,1-4.91,7.42c4.31,1.4,5.62,4.46,5.62,8,0,8.78-7.57,10.08-10.93,10.08a12,12,0,0,1-8.48-3.16A11.47,11.47,0,0,1,55,91.82l6.52-1.05c0.2,1.76.65,5,4.36,5,2.51,0,3.86-1.81,3.86-4.62,0-3.36-2.06-4.61-5.17-4.56h-2V81.18h2c1.6,0,4.76,0,4.76-4.16a5.38,5.38,0,0,0-.8-2.91A2.85,2.85,0,0,0,66,73c-2.66,0-3.36,2.16-3.81,4.11Z transform=\"translate(0 0)\"></path><path class=cls-3 d=M88.38,92.32c0.3,1.56.8,4,3.56,4,4.26,0,4.11-7.62,4.06-10.48a6.44,6.44,0,0,1-5.77,3c-6.37,0-9-6-9-10.68,0-3.16,1.4-10.93,10.58-10.93,3.81,0,6.57,1.1,8.73,4.71s2.36,9.88,2.36,12c0,9.38-2.26,17.76-11.23,17.76-7.52,0-8.93-5.37-9.68-8.18ZM88.33,77.72c0,2.91.85,5.17,3.71,5.17,3.11,0,3.71-2.71,3.71-5.17,0-3.31-1.5-5.12-3.81-5.12C89.33,72.61,88.33,75.17,88.33,77.72Z transform=\"translate(0 0)\"></path><path class=cls-3 d=M114,92.32c0.3,1.56.8,4,3.56,4,4.26,0,4.11-7.62,4.06-10.48a6.44,6.44,0,0,1-5.77,3c-6.37,0-9-6-9-10.68,0-3.16,1.4-10.93,10.58-10.93,3.81,0,6.57,1.1,8.73,4.71s2.36,9.88,2.36,12c0,9.38-2.26,17.76-11.23,17.76-7.52,0-8.93-5.37-9.68-8.18Zm0-14.59c0,2.91.85,5.17,3.71,5.17,3.11,0,3.71-2.71,3.71-5.17,0-3.31-1.5-5.12-3.81-5.12C115,72.61,114,75.17,114,77.72Z transform=\"translate(0 0)\"></path><path class=cls-3 d=M74.11,106.76A8.35,8.35,0,0,1,78.62,108a5.9,5.9,0,0,1,2.14,4.85,6,6,0,0,1-3.68,5.85l4.18,10.37H78.36l-3.74-9.73H70.33v9.73H67.62v-22.3h6.49ZM70.33,109v8.09h3.38c3.14,0,4.35-1.87,4.35-4.28,0-3.21-2.47-3.81-4.15-3.81H70.33Z transform=\"translate(0 0)\"></path><path class=cls-3 d=M99.69,117.93c0,4.88-1.2,11.6-7.86,11.6-6.92,0-8-7.15-8-11.6,0-4.68,1.17-11.63,8-11.63C98.45,106.29,99.69,112.95,99.69,117.93Zm-11.77-7a16.44,16.44,0,0,0-1.27,7,16,16,0,0,0,1.27,7,4.29,4.29,0,0,0,7.69,0,16,16,0,0,0,1.27-7,15.84,15.84,0,0,0-1.27-7,3.92,3.92,0,0,0-3.84-2.41A4,4,0,0,0,87.92,110.91Z transform=\"translate(0 0)\"></path><path class=cls-3 d=M106.85,106.76l8.53,17.62V106.76h2.34v22.3H115l-9.29-19v19H103.4v-22.3h3.44Z transform=\"translate(0 0)\"></path></g><g><path class=cls-3 d=M72.25,53.22v5.52h1.08v0.72H72.25v1.93H71.34V59.45H68V58.81l3-5.59h1.2Zm-0.91,5.52V54l-2.42,4.76h2.42Z transform=\"translate(0 0)\"></path><path class=cls-3 d=M76.8,58.05v0.72H74.16V58.05H76.8Z transform=\"translate(0 0)\"></path><path class=cls-3 d=M78.06,53.39h1.73c3,0,3.66,2.4,3.66,3.95,0,2.12-1.13,4.05-3.66,4.05H78.06v-8Zm1,7.2h0.76c2,0,2.63-1.59,2.63-3.17,0-1.93-.9-3.23-2.63-3.23H79v6.39Z transform=\"translate(0 0)\"></path><path class=cls-3 d=M84.67,56.83a1.7,1.7,0,0,1,1-1.27,2.5,2.5,0,0,1,1.14-.25,2,2,0,0,1,1.56.62,2.94,2.94,0,0,1,.36,1.82v1.74a8.14,8.14,0,0,0,.11,1.9H88a6.13,6.13,0,0,1-.07-1,1.81,1.81,0,0,1-1.7,1.21,1.65,1.65,0,0,1-1.74-1.77,2.08,2.08,0,0,1,.44-1.32A2.66,2.66,0,0,1,87,57.7a6.31,6.31,0,0,1,.78,0V57.5A1.19,1.19,0,0,0,86.71,56a1.12,1.12,0,0,0-1.17.94Zm2.46,1.55c-1.21,0-1.76.47-1.76,1.43a0.9,0.9,0,0,0,1,1,1.36,1.36,0,0,0,1.21-.76,2.73,2.73,0,0,0,.25-1.62A3.22,3.22,0,0,0,87.13,58.38Z transform=\"translate(0 0)\"></path><path class=cls-3 d=M90.58,55.47L91.8,59.9l1.31-4.43h0.84L91.9,62c-0.28.88-.56,1.54-1.55,1.54a3.62,3.62,0,0,1-.58-0.06V62.74a2,2,0,0,0,.41,0c0.66,0,.8-0.28,1.19-1.67l-1.67-5.65h0.88Z transform=\"translate(0 0)\"></path><path class=cls-3 d=M99.54,53.39a2.87,2.87,0,0,1,2.29.7,2.56,2.56,0,0,1,.62,1.72,2.27,2.27,0,0,1-1,2,3.63,3.63,0,0,1-1.94.38H98.79v3.25h-1v-8h1.71Zm-0.74.8v3.14h0.74c0.84,0,1.91,0,1.91-1.54a1.73,1.73,0,0,0-.36-1.16,1.65,1.65,0,0,0-1.55-.44H98.79Z transform=\"translate(0 0)\"></path><path class=cls-3 d=M103.41,56.83a1.69,1.69,0,0,1,1-1.27,2.49,2.49,0,0,1,1.14-.25,2,2,0,0,1,1.56.62,2.93,2.93,0,0,1,.36,1.82v1.74a8.14,8.14,0,0,0,.11,1.9H106.7a6.14,6.14,0,0,1-.07-1,1.81,1.81,0,0,1-1.7,1.21,1.65,1.65,0,0,1-1.74-1.77,2.09,2.09,0,0,1,.44-1.32,2.67,2.67,0,0,1,2.15-.76,6.3,6.3,0,0,1,.78,0V57.5a1.19,1.19,0,0,0-1.1-1.46,1.12,1.12,0,0,0-1.17.94Zm2.46,1.55c-1.21,0-1.76.47-1.76,1.43a0.9,0.9,0,0,0,1,1,1.35,1.35,0,0,0,1.21-.76,2.72,2.72,0,0,0,.25-1.62A3.22,3.22,0,0,0,105.87,58.38Z transform=\"translate(0 0)\"></path><path class=cls-3 d=M111.68,57a1.23,1.23,0,0,0-1.15-1,0.93,0.93,0,0,0-1,.91c0,0.6.41,0.73,1.38,1,0.76,0.24,1.81.59,1.81,1.77a2.18,2.18,0,0,1-4.27.12l0.81-.18a1.25,1.25,0,0,0,1.37,1.14,1,1,0,0,0,1.18-1,1.23,1.23,0,0,0-1.15-1,2.8,2.8,0,0,1-1.7-.89,1.49,1.49,0,0,1-.29-0.88,1.83,1.83,0,0,1,1.93-1.76,1.8,1.8,0,0,1,1.87,1.5Z transform=\"translate(0 0)\"></path><path class=cls-3 d=M116.38,57a1.23,1.23,0,0,0-1.15-1,0.93,0.93,0,0,0-1,.91c0,0.6.41,0.73,1.38,1,0.76,0.24,1.81.59,1.81,1.77a2.18,2.18,0,0,1-4.27.12l0.82-.18a1.25,1.25,0,0,0,1.37,1.14,1,1,0,0,0,1.18-1,1.23,1.23,0,0,0-1.15-1,2.81,2.81,0,0,1-1.7-.89,1.5,1.5,0,0,1-.29-0.88,1.83,1.83,0,0,1,1.93-1.76,1.8,1.8,0,0,1,1.87,1.5Z transform=\"translate(0 0)\"></path></g></g></g></svg></figure>"
  );


  $templateCache.put('assets/views/application/internal-error.tpl.html',
    "<div class=\"page-container page-container__bg-light padding-bottom-0\"><div class=container><div class=row><div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\"><h1>Ooops, there was an error!</h1><p class=text-medium bind-html-compile=\"'TICKETS.TRY_AGAIN_LATER' | translate\"></p><img src=/assets/img/kitten.jpg class=\"img-responsive center-block\"></div></div></div></div>"
  );


  $templateCache.put('assets/views/application/loader.tpl.html',
    "<div class=loader-container><div class=loader></div></div>"
  );


  $templateCache.put('assets/views/application/main-menu.tpl.html',
    "<nav class=app-menu><div class=\"container flex\"><section class=menu-items data-js=menu-items><div class=menu-items__item><h2 class=menu-items__item__title>Festival</h2><p class=links-container><a ui-sref=ElectricCastlePublic.About ui-sref-active=is-active class=link>About</a> <a ui-sref=ElectricCastlePublic.History ui-sref-active=is-active class=link>History</a> <a ui-sref=ElectricCastlePublic.TheCastle ui-sref-active=is-active class=link>Castle</a> <a ui-sref=ElectricCastlePublic.Travel ui-sref-active=is-active class=link>Travel Destination</a></p><p class=links-container><a ui-sref=ElectricCastlePublic.Merchandise ui-sref-active=is-active class=link>Merchandise</a> <a ui-sref=ElectricCastlePublic.Tickets ui-sref-active=is-active class=link>Tickets</a></p></div><div class=menu-items__item><h2 class=menu-items__item__title>EC 2017</h2><p class=links-container><a ui-sref=ElectricCastlePublic.LineUp.List ui-sref-active=is-active class=link>Line Up</a> <a ui-sref=ElectricCastlePublic.NewSchedule ui-sref-active=is-active class=link>Schedule</a> <a ui-sref=ElectricCastlePublic.GettingThere ui-sref-active=is-active class=link>Getting There</a> <a ui-sref=ElectricCastlePublic.LostAndFound ui-sref-active=is-active class=link>Lost &amp; Found</a></p><p class=links-container><a ui-sref=ElectricCastlePublic.Stories ui-sref-active=is-active class=link>The Journal</a> <a href=https://youtu.be/yKvWQbCrxHI target=_blank ui-sref-active=is-active class=link>'Thank You' Movie</a></p></div><div class=menu-items__item><h2 class=menu-items__item__title>Partners</h2><p class=links-container><a ui-sref=ElectricCastlePublic.Partners ui-sref-active=is-active class=link>Our Partners</a> <a ui-sref=ElectricCastlePublic.Advertising ui-sref-active=is-active class=link>Media &amp; Advertising</a></p></div><div class=\"menu-items__item margin-bottom-60\"><h2 class=menu-items__item__title>Technical Stuff</h2><p class=links-container><a ui-sref=ElectricCastlePublic.Faq.Tickets ui-sref-active=is-active class=link>FAQ</a> <a ui-sref=ElectricCastlePublic.RulesAndRegulations ui-sref-active=is-active class=link>Rules &amp; Regulations</a> <a ui-sref=ElectricCastlePublic.Press ui-sref-active=is-active class=link>Press &amp; Media</a></p></div></section><section class=\"festival-account hidden-xs\"><div class=festival-account__item ng-show=mmc.cb.isLoggedIn()><h2 class=festival-account__item__title ui-sref=ElectricCastlePublic.MyAccount.Orders>Festival account</h2><p class=links-container><a ui-sref=ElectricCastlePublic.MyAccount.Orders ui-sref-active=is-active class=link>My orders</a> <a ui-sref=ElectricCastlePublic.MyAccount.Settings ui-sref-active=is-active class=link>Settings</a> <a ui-sref=ElectricCastlePublic.ChangePassword ui-sref-active=is-active class=link>Change Pass.</a> <a ui-sref-active=is-active class=link href=javascript:void(0) ng-click=mmc.cb.logout()>Logout</a></p></div><div class=festival-account__item><h2 class=festival-account__item__title>Newsletter</h2><p class=text-light-grey>{{'FOOTER.EMAIL_SUBSCRIBE' | translate}}</p><form name=newsletterForm ng-submit=fc.subscribe(newsletterForm) class=newsletter novalidate><div class=flex><input type=email id=email name=email class=\"form-control margin-right-10\" placeholder=\"{{'REGISTER.EMAIL' | translate}}\" autocomplete=off ng-pattern=\"/^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$/\" ng-class=\"{'has-error': newsletterForm.email.$invalid && newsletterForm.$submitted}\" ng-required=true ng-model=\"fc.model.email\"> <button type=submit class=\"call-to-action call-to-action--in-form text-uppercase\">Subscribe</button></div><span ng-messages=newsletterForm.email.$error ng-show=newsletterForm.$submitted><span class=\"error text-error\" ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span> <span class=\"error text-error\" ng-message=pattern>{{'VALIDATIONS_ERRORS.NOT_A_VALID_EMAIL' | translate}}</span></span></form></div><div class=festival-account__item><h2 class=festival-account__item__title>Social links</h2><p class=links-container><a href=https://www.facebook.com/ElectricCastle target=_blank class=link>Facebook</a> <a href=\"https://instagram.com/electriccastle/\" target=_blank class=link>Instagram</a> <a href=https://twitter.com/Electric_Castle target=_blank class=link>Twitter</a> <a href=https://www.youtube.com/user/ElectricCastleCluj target=_blank class=link>Youtube</a></p></div></section></div></nav>"
  );


  $templateCache.put('assets/views/application/modal.tpl.html',
    "<div class=\"modal fade\" tabindex=-1 role=dialog aria-hidden=true data-backdrop={{options.backdropDismiss}} data-keyboard={{options.useKeyboard}} ng-switch=modalType><div class=\"modal-dialog modal-full {{modalType | formatter : 'kebab'}}\"><div ng-switch-when=LOGIN login-modal></div><div ng-switch-when=REDEEM_CARD redeem-card-modal></div><div ng-switch-when=PARTNER_LOCATIONS partner-locations></div><div ng-switch-when=HOME_INFO before-you-come></div><div ng-switch-when=REFUND refund></div><div ng-switch-when=FIRST_LOGIN_THANK_YOU first-login-thank-you></div><div ng-switch-when=ADD_EXTERNAL_TICKET add-external-ticket></div><div ng-switch-when=TICKET_NAME ticket-name></div></div></div>"
  );


  $templateCache.put('assets/views/application/not-found.tpl.html',
    "<meta name=prerender-status-code content=404><div class=\"page-container page-container__bg-light padding-bottom-0\"><div class=\"container text-center\"><div class=row><div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\"><h1>Ooops, the page was not found</h1><p class=text-medium bind-html-compile=\"'GENERAL.NOT_FOUND' | translate\"></p><img src=/assets/img/kitten.jpg class=\"img-responsive center-block\"></div></div></div></div>"
  );


  $templateCache.put('assets/views/application/root-view.tpl.html',
    "<main-menu></main-menu><login-form-overlay></login-form-overlay><div class=app-container data-js=scroll-content><application-header></application-header><div class=page-container scroll-to-top><div ui-view=content class={{pageClass}}></div></div><application-footer></application-footer></div><modal></modal><loader></loader><cookie-consent></cookie-consent>"
  );


  $templateCache.put('assets/views/auth/change-password.tpl.html',
    "<div class=\"page-container page-container__bg\"><div class=\"container login-page\"><div class=row><div class=\"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1\"><h1>Change your password</h1><form name=changePasswordForm ng-submit=cpc.changePassword(changePasswordForm) novalidate><fieldset class=\"form-group form-group__full\" ng-show=cpc.flags.showError><div class=error-alert>{{cpc.model.errorMessage}}</div></fieldset><fieldset class=\"form-group form-group__full\" ng-show=cpc.flags.showConfirmation><div class=\"col-md-12 info-alert\">{{'CHANGE_PASSWORD.UPDATE_SUCCESS' | translate}}</div></fieldset><fieldset class=\"form-group form-group__full\"><input type=password class=\"form-control form-control--dark\" name=oldPassword placeholder=\"{{'LOGIN.OLD_PASSWORD' | translate | uppercase}}\" autocomplete=off ng-class=\"{'has-error': changePasswordForm.password.$invalid && changePasswordForm.$submitted}\" ng-required=true ng-model=\"cpc.model.oldPassword\"> <span ng-messages=changePasswordForm.password.$error ng-show=changePasswordForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span></fieldset><fieldset class=\"form-group form-group__full\"><input type=password class=\"form-control form-control--dark\" name=password placeholder=\"{{'LOGIN.PASSWORD' | translate | uppercase}}\" autocomplete=off ng-class=\"{'has-error': changePasswordForm.password.$invalid && changePasswordForm.$submitted}\" ng-required=true ng-minlength=6 ng-model=\"cpc.model.password\"> <span ng-messages=changePasswordForm.password.$error ng-show=changePasswordForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span> <span class=error ng-message=minlength>{{'VALIDATIONS_ERRORS.MIN_LENGTH' | translate : '{min: 6}'}}</span></span></fieldset><fieldset class=\"form-group form-group__full\"><input type=password class=\"form-control form-control--dark\" name=passwordConfirmation placeholder=\"{{'REGISTER.CONFIRM_PASSWORD' | translate | uppercase}}\" autocomplete=off compare-to=cpc.model.password ng-class=\"{'has-error': changePasswordForm.passwordConfirmation.$invalid && changePasswordForm.$submitted, 'is-not-empty': !!cpc.model.passwordConfirmation}\" ng-required=true ng-minlength=6 ng-model-options=\"{allowInvalid: true}\" ng-model=\"cpc.model.passwordConfirmation\"> <span ng-messages=changePasswordForm.passwordConfirmation.$error ng-show=changePasswordForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span> <span class=error ng-message=minlength>{{'VALIDATIONS_ERRORS.MIN_LENGTH' | translate : '{min: 6}'}}</span> <span class=error ng-message=compareTo>{{'VALIDATIONS_ERRORS.MUST_MATCH' | translate}}</span></span></fieldset><div class=text-right><button class=\"std-button std-button--light std-button--wide\" type=submit>{{'LOGIN.CHANGE_PASSWORD' | translate}}</button><div class=clearfix></div></div></form></div></div></div></div>"
  );


  $templateCache.put('assets/views/auth/forgot-password.tpl.html',
    "<div class=\"page-container page-container__bg\"><div class=\"container login-page\"><div class=row><div class=\"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1\"><h1>{{'RESET_PASSWORD.DESCRIPTION' | translate}}</h1><form class=login-form name=resetPasswordForm ng-submit=fpc.submit(resetPasswordForm) novalidate><fieldset class=\"form-group form-group__full\" ng-show=fpc.flags.showError><div class=error-alert>{{fpc.model.errorMessage}}</div></fieldset><fieldset class=\"form-group form-group__full\" ng-show=fpc.flags.showConfirmation><div class=\"col-md-12 info-alert\">{{'RESET_PASSWORD.UPDATE_SUCCESS' | translate: {emailAddress: fpc.model.savedMail} }}</div></fieldset><fieldset class=\"form-group form-group__email\"><input type=email class=\"form-control form-control--dark\" id=email name=email placeholder=\"{{'REGISTER.EMAIL' | translate | uppercase}}\" autocomplete=off ng-class=\"{'has-error': resetPasswordForm.email.$invalid && resetPasswordForm.$submitted}\" ng-required=true ng-model=\"fpc.model.email\"> <span ng-messages=resetPasswordForm.email.$error ng-show=resetPasswordForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span> <span class=error ng-message=email>{{'VALIDATIONS_ERRORS.NOT_A_VALID_EMAIL' | translate}}</span></span></fieldset><div class=text-right><button class=\"std-button std-button--light std-button--wide button--dark\" type=submit>{{'RESET_PASSWORD.SUBMIT' | translate}}</button></div></form></div></div></div></div>"
  );


  $templateCache.put('assets/views/auth/header-account.tpl.html',
    "<div class=flex><div ng-show=hac.isLoggedIn()><a ui-sref=ElectricCastlePublic.MyAccount.Orders class=\"link text-uppercase\">My Account</a> <a ui-sref-active=is-active class=link href=javascript:void(0) ng-click=hac.logout()>Logout</a></div><div ng-hide=hac.isLoggedIn()><a ui-sref=ElectricCastlePublic.Login ui-sref-active=is-active class=\"link text-uppercase\">{{'LOGIN.BUTTON' | translate}}</a> <a ui-sref=ElectricCastlePublic.Register ui-sref-active=is-active class=\"link text-uppercase\">{{'LOGIN.REGISTER' | translate}}</a></div><div class=user-basket><a class=\"user-basket__link flex flex-v-center\" ui-sref-active=is-active ui-sref=ElectricCastlePublic.Basket><img src=/assets/img/redesign/svg/cart-icon.svg class=\"img-responsive center-block\" alt=\"\"> <span class=\"user-basket__link__quantity hidden-xs\">({{hac.getHeaderUserData().cartQty}})</span></a></div></div>"
  );


  $templateCache.put('assets/views/auth/invitations.tpl.html',
    "<div class=\"container invitations-page\"><div class=\"col-md-10 col-md-offset-1\"><section class=\"api-errors animated fadeIn margin-top-50\" ng-show=ic.flags.showErrors()>{{ic.getError()}}</section><section class=\"invitations__used margin-top-20\"><h2>{{'INVITATIONS.USED_INVITATIONS' | translate}} <small class=text-muted ng-show=ic.flags.displayNoUsedInvitations()>{{'INVITATIONS.NO_USED_INVITATIONS' | translate}}</small></h2><form name=assignedInvitations novalidate><table class=\"table table-striped\"><thead><tr><th>#</th><th>{{'INVITATIONS.NAME' | translate}}</th><th>{{'INVITATIONS.EMAIL' | translate}}</th><th>{{'INVITATIONS.ACTIONS' | translate}}</th></tr></thead><tbody><tr ng-repeat=\"usedInvitation in ic.getUsed()\" class=text-left ng-form name=assignedInvitationsRow><td>{{$index + 1}}</td><td><div class=text-input ng-class=\"{'has-errors': assignedInvitationsRow.name.$invalid && assignedInvitationsRow.name.$dirty}\"><input name=name ng-focus=ic.editClickHandler($index) ng-required=true ng-model=usedInvitation.name ng-class=\"{'edit-mode': usedInvitation.editMode}\"><p class=errors-container ng-messages=assignedInvitationsRow.name.$error ng-show=\"assignedInvitationsRow.name.$invalid && assignedInvitationsRow.name.$dirty\"><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></p></div></td><td><div class=text-input ng-class=\"{'has-errors': assignedInvitationsRow.email.$invalid && assignedInvitationsRow.email.$dirty}\"><input type=email name=email ng-required=true ng-model=usedInvitation.email ng-focus=ic.editClickHandler($index) ng-class=\"{'edit-mode': usedInvitation.editMode}\"><p class=errors-container ng-messages=assignedInvitationsRow.email.$error ng-show=\"assignedInvitationsRow.email.$invalid && assignedInvitationsRow.email.$dirty\"><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span> <span class=error ng-message=email>{{'VALIDATIONS_ERRORS.NOT_A_VALID_EMAIL' | translate}}</span></p></div></td><td><button class=\"btn button button-black button-small\" ng-click=\"ic.editClickHandler($index, true)\" ng-if=!usedInvitation.canBeSent ng-switch=usedInvitation.editMode ng-disabled=assignedInvitationsRow.$invalid><span ng-switch-when=true><i class=\"fa fa-save\"></i> {{'INVITATIONS.SAVE' | translate}}</span> <span ng-switch-when=false><i class=\"fa fa-edit\"></i> {{'INVITATIONS.EDIT' | translate}}</span></button> <button class=\"btn button button-yellow button-small\" ng-if=\"usedInvitation.canBeSent && !usedInvitation.wasSent\" ng-click=\"ic.sendInvitationEmail(usedInvitation.send, $index)\">{{'INVITATIONS.SEND_FINAL' | translate}}</button> <i class=\"fa fa-check fa-2x text-success\" ng-if=usedInvitation.wasSent></i></td></tr></tbody></table></form></section><div class=clearfix></div><form class=margin-bottom-50 name=invitations ng-submit=ic.sendInvitations(invitations) novalidate><section class=invitations__available><h2 class=margin-bottom-30>{{'INVITATIONS.AVAILABLE_INVITATIONS' | translate}} <small class=text-muted ng-hide=ic.flags.displayNoAvailableInvitations()>{{'INVITATIONS.NUMBER_OF_AVAILABLE_INVITATIONS' | translate: {howMany: ic.getNumberOfAvailableInvitations()} }}</small> <small class=text-muted ng-show=ic.flags.displayNoAvailableInvitations()>{{'INVITATIONS.NO_AVAILABLE_INVITATIONS' | translate}}</small></h2><button class=\"btn button button-yellow button-small pull-right margin-top-neg-80\" type=button ng-click=ic.addNewInvitation()><i class=\"fa fa-plus\"></i> {{'INVITATIONS.SECONDARY_CTA' | translate}}</button><ul class=list-unstyled><li ng-repeat=\"availableInvitation in ic.getAvailable()\" ng-if=availableInvitation.isVisible><ng-form name=invitationsRow><fieldset class=\"text-input is-third\" ng-class=\"{'has-errors': invitationsRow.name.$invalid && (invitationsRow.name.$dirty || invitations.$submitted)}\"><input name=name id=name-{{$index}} ng-required=true ng-model=\"availableInvitation.name\"><label for=name-{{$index}}>{{'INVITATIONS.NAME' | translate}}</label><p class=errors-container ng-messages=invitationsRow.name.$error ng-show=\"invitationsRow.name.$invalid && (invitationsRow.name.$dirty || invitations.$submitted)\"><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></p></fieldset><fieldset class=\"text-input is-third\" ng-class=\"{'has-errors': invitationsRow.email.$invalid && (invitationsRow.email.$dirty || invitations.$submitted)}\"><input name=email type=email id=email-{{$index}} ng-required=true ng-model=\"availableInvitation.email\"><label for=email-{{$index}}>{{'INVITATIONS.EMAIL' | translate}}</label><p class=errors-container ng-messages=invitationsRow.email.$error ng-show=\"invitationsRow.email.$invalid && (invitationsRow.email.$dirty || invitations.$submitted)\"><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span> <span class=error ng-message=email>{{'VALIDATIONS_ERRORS.NOT_A_VALID_EMAIL' | translate}}</span></p></fieldset><i class=\"remove-invitation fa fa-remove\" ng-show=ic.flags.shouldShowRemoveButton() ng-click=ic.makeInvisible($index)></i></ng-form></li></ul></section><section class=invitations__controls><button type=submit class=\"button button-yellow text-uppercase\" ng-hide=ic.flags.displayNoAvailableInvitations() analytics-on analytics-event=\"Invite users\" analytics-category=Invitations><strong>{{'INVITATIONS.MAIN_CTA' | translate}}</strong></button></section></form></div></div>"
  );


  $templateCache.put('assets/views/auth/login-form-overlay.tpl.html',
    "<div class=login-overlay><div class=container><div class=login-overlay__close><a href=javascript:void(0) class=link ng-click=lfoc.cb.close()>{{'ACTIONS.CLOSE' | translate}}</a></div><p class=\"text-center text-light login-overlay__description\">Enroll for Early Bird Tickets by simply logging into your existing account or by <a ui-sref=ElectricCastlePublic.Register class=link>registering</a> if you don't have one already.</p><login-form post-login-action=REDIRECT_TICKETS></login-form></div></div>"
  );


  $templateCache.put('assets/views/auth/login-form.tpl.html',
    "<form class=login-form name=loginForm ng-submit=lfc.login(loginForm) novalidate><fieldset class=\"form-group form-group__error\" ng-show=lfc.flags.showLoginError><div class=error-alert ng-bind-html=lfc.model.errorMessage></div></fieldset><fieldset class=\"form-group form-group__email\"><input type=email class=form-control id=user-email name=email placeholder=\"{{'LOGIN.EMAIL' | translate | uppercase}}\" autocomplete=off ng-class=\"{'has-error': loginForm.email.$invalid && loginForm.$submitted, 'form-control--dark': lfc.flags.darkVersion}\" ng-required=true ng-model=\"lfc.model.email\"> <span ng-messages=loginForm.email.$error ng-show=loginForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span> <span class=error ng-message=email>{{'VALIDATIONS_ERRORS.NOT_A_VALID_EMAIL' | translate}}</span></span></fieldset><fieldset class=\"form-group form-group__password\"><input type=password class=form-control id=user-password name=password placeholder=\"{{'LOGIN.PASSWORD' | translate | uppercase}}\" autocomplete=off ng-class=\"{'has-error': loginForm.password.$invalid && loginForm.$submitted, 'form-control--dark': lfc.flags.darkVersion}\" ng-required=true ng-model=\"lfc.model.password\"> <span ng-messages=loginForm.password.$error ng-show=loginForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span></fieldset><fieldset class=\"form-group form-group__remember-me\"><label class=\"checkbox text-light\" ng-class=\"{'checkbox--dark': lfc.flags.darkVersion}\"><input type=checkbox id=remember-me ng-model=\"lfc.model.rememberMe\"> <span class=checkbox__tick-box></span> &nbsp;{{'LOGIN.REMEMBER_ME' | translate}}</label></fieldset><fieldset class=\"form-group form-group__actions\"><div class=\"actions-wrapper flex flex-v-center flex-space-between\"><a ui-sref=ElectricCastlePublic.ForgotPassword class=link ng-class=\"{'link--text': lfc.flags.darkVersion}\">{{'LOGIN.PASSWORD_HELP' | translate}}</a><div class=\"flex flex-v-center flex-space-between actions-wrapper\"><a href=javascript:void(0) class=\"link hidden-xs register-link\" ng-class=\"{'link--text': lfc.flags.darkVersion}\" ng-click=lfc.goToRegister() analytics-on analytics-event=Register analytics-category=Navigation>{{'LOGIN.REGISTER' | translate}}</a> <button class=\"std-button std-button--light std-button--wide\" ng-class=\"{'button--dark': lfc.flags.darkVersion}\" type=submit ng-disabled=\"loginForm.$submitted && !loginForm.$valid\" analytics-on analytics-event=\"Login submit\" analytics-category=Authentication>{{'LOGIN.BUTTON' | translate}}</button></div></div></fieldset></form>"
  );


  $templateCache.put('assets/views/auth/login.tpl.html',
    "<div class=\"page-container page-container__bg\"><div class=\"container login-page\"><div class=row><div class=\"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1\"><h1>Login</h1><login-form post-login-action=REDIRECT_MY_ACCOUNT theme=dark></login-form></div></div></div></div>"
  );


  $templateCache.put('assets/views/auth/my-account.tpl.html',
    "<div class=page-container__bg><div class=\"container my-account-page\"><tabs class=\"ec-tabs my-account-tabs\" data=mac.tabData type=tabs justified=true></tabs><div ui-view></div></div></div>"
  );


  $templateCache.put('assets/views/auth/order-product.tpl.html',
    "<section class=ticket><div ng-switch=product.productType><img ng-switch-when=virtual class=ticket__image src=/assets/img/tickets/icon-ticket-yellow.png alt=\"Ticket\"> <img ng-switch-when=simple class=ticket__image src=/assets/img/tickets/icon-tshirt-yellow.png alt=\"Ticket\"></div><div class=ticket__description><p class=ticket__description__wrap><strong><span ng-if=product.qty>{{::product.qty}} x</span> {{::product.productName}}</strong> <a class=\"btn padding-bottom-0 padding-top-0 name-on-ticket\" ng-click=opc.editNameOnTicket(product.ticketInfoId) ng-show=product.ticketInfoId title=\"Change name on ticket\">Name on ticket: <strong>{{::product.ticketName}}</strong> <i class=\"fa fa-pencil\"></i></a> <span ng-show=\"product.ticketNumber && !product.wasUpgraded\"><br><span class=hidden-xs>Ticket Number:</span> <em>{{::product.ticketNumber}}</em></span></p></div><div class=ticket__download ng-switch=product.productType><div ng-switch-when=virtual><div class=\"dropdown ticket__upgrade pull-left\" ng-if=product.upgradeTo><button class=\"std-button std-button--bordered std-button--in-form dropdown-toggle\" type=button id=dropdownMenu1 data-toggle=dropdown aria-haspopup=true aria-expanded=true>Upgrade to <span class=caret></span></button><ul class=\"dropdown-menu animated flipInX\" aria-labelledby=dropdownMenu1><li><a ng-repeat=\"upgrade in product.upgradeTo\" class=pointer ng-click=\"opc.upgradeTicket(upgrade, product.ticketId)\" analytics-on analytics-event=\"Ticket upgrade\" analytics-category=Account>{{upgrade.name}}</a></li></ul></div><a class=\"std-button std-button--light std-button--in-form margin-left-10\" href={{::product.downloadUrl}} target=_blank ng-show=product.downloadUrl analytics-on analytics-event=\"Ticket download\" analytics-category=Account>{{::'ORDERS.DOWNLOAD' | translate}} <i class=\"glyphicon glyphicon-download-alt\"></i></a> <span ng-show=product.wasUpgraded class=ticket__upgrade>{{::'ORDERS.UPGRADED' | translate}}</span> <span ng-show=product.giftcardCoupon>{{::'GIFT_CARD.CODE' | translate}}: <strong>{{::product.giftcardCoupon}}</strong></span></div></div></section>"
  );


  $templateCache.put('assets/views/auth/orders.tpl.html',
    "<div class=\"ec-tab padding-top-20\"><div class=row><div class=\"col-lg-12 col-md-12\"><article ng-repeat=\"order in oc.get()\" class=\"order margin-bottom-15\"><header class=order__info><h3 class=order-title>Order #<strong>{{::order.id}}</strong>/{{::order.orderDate}}</h3><h4 class=\"text-right pull-right\"><span>{{::'ORDERS.PRICE' | translate}}:</span> <strong>{{order.orderTotal}}</strong> Lei<br><span ng-if=order.isInstallment><span>Paid: <strong>{{order.totalPaid}}</strong> Lei</span><br><span ng-if=\"order.totalRemaining > 0\">Remaining: <strong class=text-orange>{{order.totalRemaining}}</strong> Lei</span></span></h4><p class=text-small><span>Status: <strong>{{::order.status}}</strong><br>Payment method: <strong ng-if=order.isInstallment>payment plan</strong> <strong ng-if=!order.isInstallment>one time</strong></span></p><div class=clear></div></header><div class=products-list><order-product ng-repeat=\"product in order.products.simple\" order-item=product></order-product><order-product ng-repeat=\"product in order.products.virtual\" order-item=product></order-product></div><div class=\"table-responsive margin-top-30\" ng-if=\"order.isInstallment && order.products.installment\"><table class=table><thead><tr><th>Payment</th><th>Date/Time</th><th>Status</th><th class=text-right>Amount</th></tr></thead><tbody><tr ng-repeat=\"item in order.products.installment\"><td>{{item.productName}}</td><td>{{item.orderDate}}</td><td>{{item.installmentStatus}}</td><td class=text-right>{{item.totalPaid}} Lei</td></tr></tbody></table></div><div ng-if=\"order.installmentsRemaining && order.products.installment\" class=\"margin-top-15 row\"><div class=col-md-4>Remaining payments: <strong class=text-orange>{{order.installmentsRemaining}}</strong><br>Next payment: <strong class=text-orange>{{order.nextPayment}}</strong><p class=margin-top-10><a href=javascript:null ng-click=oc.updateCard(order.updateCardUrl)>Update Credit Card</a></p></div><div class=\"col-md-8 text-right\"><button ng-click=oc.cancelOrder(order.cancelOrderUrl) class=\"btn std-button std-button--bordered std-button--wide margin-right-10\">Cancel Payment Plan</button> <button ng-click=oc.payFull(order.payFullUrl) class=\"btn std-button std-button--light std-button--wide\">Pay Remainder Amount</button></div><div class=clearfix></div></div></article><h2 ng-show=oc.shouldDisplayNoOrdersMessage() class=no-orders>{{'ORDERS.NO_ORDER' | translate}}</h2></div></div></div>"
  );


  $templateCache.put('assets/views/auth/redeem-card-form.tpl.html',
    "<form name=redeemCardForm ng-submit=rcfc.submitCoupon(redeemCardForm) class=redeem-giftcard-form novalidate><fieldset class=\"form-group form-group__error\" ng-show=rcfc.flags.showError><div class=error-alert ng-bind-html=rcfc.model.errorMessage></div></fieldset><fieldset class=\"form-group form-group--full-width margin-bottom-5\"><div class=\"col-md-8 no-padding-left\"><input id=code class=\"form-control form-control--dark margin-bottom-5\" name=code placeholder=\"{{'GIFT_CARD.CODE' | translate | uppercase}}\" autocomplete=off ng-class=\"{'has-error': redeemCardForm.code.$invalid && redeemCardForm.$submitted}\" ng-required=true ng-model=\"rcfc.model.code\"></div><div class=\"col-md-4 no-padding-left\"><button class=\"std-button std-button--light std-button--wide std-button--in-form\" type=submit ng-disabled=\"redeemCardForm.$submitted && !redeemCardForm.$valid\" analytics-on analytics-event=\"Redeem card submit\" analytics-category=Shop>{{'GIFT_CARD.BUTTON' | translate}}</button></div><div class=clearfix></div><span ng-messages=redeemCardForm.code.$error ng-show=redeemCardForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span></fieldset></form>"
  );


  $templateCache.put('assets/views/auth/redeem-card.tpl.html',
    "<div class=ec-tab><div class=col-md-12><h2>{{'GIFT_CARD.BALANCE' | translate: {balance: rc.giftCardBalance} }}</h2><p>{{'GIFT_CARD.INFO' | translate}}</p></div><div class=\"margin-top-20 col-md-6\"><redeem-card-form post-redeem-action=REDIRECT_MY_ACCOUNT></redeem-card-form></div></div>"
  );


  $templateCache.put('assets/views/auth/register-minimal-form.tpl.html',
    "<form class=register-minimal-form name=registerMinimalForm ng-submit=rmfc.register(registerMinimalForm) novalidate autocomplete=off><fieldset class=form-group ng-show=rmfc.flags.showRegisterError><div class=error-alert>{{rmfc.model.errorMessage}}</div></fieldset><fieldset class=\"form-group form-group--a-half\"><input class=form-control id=first-name name=firstName placeholder=\"{{'REGISTER.FIRST_NAME' | translate}}\" autocomplete=off ng-class=\"{'has-error': registerMinimalForm.firstName.$invalid && registerMinimalForm.$submitted}\" ng-required=true ng-model=\"rmfc.model.firstName\"> <span ng-messages=registerMinimalForm.firstName.$error ng-show=registerMinimalForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span></fieldset><fieldset class=\"form-group form-group--a-half\"><input class=form-control id=last-name name=lastName placeholder=\"{{'REGISTER.LAST_NAME' | translate}}\" autocomplete=off ng-class=\"{'has-error': registerMinimalForm.lastName.$invalid && registerMinimalForm.$submitted}\" ng-required=true ng-model=\"rmfc.model.lastName\"> <span ng-messages=registerMinimalForm.lastName.$error ng-show=registerMinimalForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span></fieldset><fieldset class=\"form-group form-group--a-half\"><input type=email class=form-control id=email name=email placeholder=\"{{'REGISTER.EMAIL' | translate}}\" autocomplete=off ng-pattern=\"/^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$/\" ng-class=\"{'has-error': registerMinimalForm.email.$invalid && registerMinimalForm.$submitted}\" ng-required=true ng-model=\"rmfc.model.email\"> <span ng-messages=registerMinimalForm.email.$error ng-show=registerMinimalForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span> <span class=error ng-message=pattern>{{'VALIDATIONS_ERRORS.NOT_A_VALID_EMAIL' | translate}}</span></span></fieldset><fieldset class=\"form-group form-group--a-half\"><input class=form-control id=phone name=phone placeholder=\"{{'REGISTER.PHONE' | translate}}\" autocomplete=off ng-pattern=\"/^[+]?([0-9]*[\\.\\s\\-\\(\\)]|[0-9]+){3,24}$/\" ng-class=\"{'has-error': registerMinimalForm.phone.$invalid && registerMinimalForm.$submitted}\" ng-required=true ng-model=\"rmfc.model.phone\"> <span ng-messages=registerMinimalForm.phone.$error ng-show=registerMinimalForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span> <span class=error ng-message=pattern>{{'VALIDATIONS_ERRORS.NOT_A_VALID_PHONE_NUMBER' | translate}}</span></span></fieldset><fieldset class=form-group><ui-select ng-model=rmfc.model.country search-enabled=true ng-change=rmfc.countryChanged()><ui-select-match placeholder=Country>{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"country.name as country in rmfc.model.countryList  | filter: {name: $select.search}\"><div ng-bind-html=country.name></div></ui-select-choices></ui-select></fieldset><fieldset class=form-group><span ng-click=\"rmfc.flags.showCityTextBox = !rmfc.flags.showCityTextBox\" ng-show=\"rmfc.flags.countryHasCityList && !rmfc.flags.showCityTextBox\" class=\"pull-right pointer\">Other? Please add it.</span> <span ng-click=\"rmfc.flags.showCityTextBox = !rmfc.flags.showCityTextBox\" ng-show=\"rmfc.flags.countryHasCityList && rmfc.flags.showCityTextBox\" class=\"pull-right pointer\">Back to list.</span><div class=clearfix></div><input id=city class=\"form-control form-control--dark\" name=city placeholder=\"{{'REGISTER.CITY' | translate}}\" autocomplete=off ng-class=\"{'has-error': registerMinimalForm.city.$invalid && registerMinimalForm.$submitted}\" ng-required=true ng-model=rmfc.model.city ng-if=\"rmfc.flags.showCityTextBox\"> <span ng-messages=registerMinimalForm.city.$error ng-show=registerMinimalForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span><ui-select ng-model=rmfc.model.city search-enabled=true ng-if=!rmfc.flags.showCityTextBox><ui-select-match placeholder=City>{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"city.name as city in rmfc.model.cityList  | filter: {name: $select.search}\"><div ng-bind-html=city.name></div></ui-select-choices></ui-select></fieldset><fieldset class=\"form-group form-group--a-half\"><input id=street class=\"form-control form-control--dark\" name=street placeholder=\"{{'REGISTER.STREET' | translate}}\" autocomplete=off ng-class=\"{'has-error': registerMinimalForm.street.$invalid && registerMinimalForm.$submitted}\" ng-required=true ng-model=\"rmfc.model.street\"> <span ng-messages=registerMinimalForm.street.$error ng-show=registerMinimalForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span></fieldset><fieldset class=\"form-group form-group--a-half\"><input id=number class=\"form-control form-control--dark\" name=number placeholder=\"{{'REGISTER.NUMBER' | translate}}\" autocomplete=off ng-class=\"{'has-error': registerMinimalForm.number.$invalid && registerMinimalForm.$submitted}\" ng-required=true ng-model=\"rmfc.model.number\"> <span ng-messages=registerMinimalForm.number.$error ng-show=registerMinimalForm.$submitted><span class=\"error auto\" ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span></fieldset><fieldset class=\"form-group form-group--a-half\"><input id=zip class=\"form-control form-control--dark\" name=zip placeholder=\"{{'REGISTER.ZIP' | translate}}\" autocomplete=off ng-class=\"{'has-error': registerMinimalForm.zip.$invalid && registerMinimalForm.$submitted}\" ng-required=true ng-model=\"rmfc.model.zipCode\"> <span ng-messages=registerMinimalForm.zip.$error ng-show=registerMinimalForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span></fieldset><hr class=\"margin-top-5\"><fieldset class=form-group><input type=password class=form-control id=password name=password placeholder=\"{{'REGISTER.PASSWORD' | translate}}\" autocomplete=off ng-class=\"{'has-error': registerMinimalForm.password.$invalid && registerMinimalForm.$submitted, 'is-not-empty': !!rmfc.model.password}\" ng-required=true ng-minlength=6 ng-model=\"rmfc.model.password\"> <span ng-messages=registerMinimalForm.password.$error ng-show=registerMinimalForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span> <span class=error ng-message=pattern>{{'VALIDATIONS_ERRORS.NOT_A_VALID_DATE' | translate: '{acceptedFormat: \"DD/MM/YYYY\"}'}}</span> <span class=error ng-message=minlength>{{'VALIDATIONS_ERRORS.MIN_LENGTH' | translate : '{min: 6}'}}</span></span></fieldset><fieldset class=form-group><input type=password class=form-control id=password-confirmation name=passwordConfirmation placeholder=\"{{'REGISTER.CONFIRM_PASSWORD' | translate}}\" autocomplete=off compare-to=rmfc.model.password ng-class=\"{'has-error': registerMinimalForm.passwordConfirmation.$invalid && registerMinimalForm.$submitted, 'is-not-empty': !!rmfc.model.passwordConfirmation}\" ng-required=true ng-minlength=6 ng-model-options=\"{allowInvalid: true}\" ng-model=\"rmfc.model.passwordConfirmation\"> <span ng-messages=registerMinimalForm.passwordConfirmation.$error ng-show=registerMinimalForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span> <span class=error ng-message=minlength>{{'VALIDATIONS_ERRORS.MIN_LENGTH' | translate : '{min: 6}'}}</span> <span class=error ng-message=compareTo>{{'VALIDATIONS_ERRORS.MUST_MATCH' | translate : '{min: 6}'}}</span></span></fieldset><fieldset class=\"form-group margin-top-20\"><button class=\"std-button std-button--light std-button--wide pull-right\" type=submit ng-disabled=\"(registerMinimalForm.$submitted && !registerMinimalForm.$valid) || rmfc.flags.disableRegisterBtn\" analytics-on analytics-event=\"Register submit\" analytics-category=Authentication>{{'LOGIN.REGISTER' | translate | uppercase}}</button><div class=clear></div></fieldset><fieldset class=\"form-group margin-top-20\"><p class=text-smaller ng-bind-html=\"'REGISTER.TERMS_AND_CONDITIONS' | translate\"></p></fieldset></form>"
  );


  $templateCache.put('assets/views/auth/register.tpl.html',
    "<div class=\"page-container page-container__bg\"><div class=\"container register-page\"><h1>Create account</h1><form class=margin-top-40 name=registerForm ng-submit=rc.register(registerForm) novalidate><fieldset class=\"form-group form-group--full-width\" ng-show=rc.flags.showRegisterError><div class=error-alert>{{rc.model.errorMessage}}</div></fieldset><fieldset class=form-group><label for=first-name class=\"hidden-xs control-label control-label--dark\">{{'REGISTER.FIRST_NAME' | translate}}</label><input id=first-name class=\"form-control form-control--dark\" name=firstName placeholder=\"{{'REGISTER.FIRST_NAME' | translate}}\" autocomplete=off ng-class=\"{'has-error': registerForm.firstName.$invalid && registerForm.$submitted}\" ng-required=true ng-model=\"rc.model.firstName\"> <span ng-messages=registerForm.firstName.$error ng-show=registerForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span></fieldset><fieldset class=form-group><label for=last-name class=\"hidden-xs control-label control-label--dark\">{{'REGISTER.LAST_NAME' | translate}}</label><input id=last-name class=\"form-control form-control--dark\" name=lastName placeholder=\"{{'REGISTER.LAST_NAME' | translate}}\" autocomplete=off ng-class=\"{'has-error': registerForm.lastName.$invalid && registerForm.$submitted}\" ng-required=true ng-model=\"rc.model.lastName\"> <span ng-messages=registerForm.lastName.$error ng-show=registerForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span></fieldset><fieldset class=form-group><label for=email class=\"hidden-xs control-label control-label--dark\">{{'REGISTER.EMAIL' | translate}}</label><input type=email id=email class=\"form-control form-control--dark\" name=email placeholder=\"{{'REGISTER.EMAIL' | translate}}\" autocomplete=off ng-pattern=\"/^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$/\" ng-class=\"{'has-error': registerForm.email.$invalid && registerForm.$submitted}\" ng-required=true ng-model=\"rc.model.email\"> <span ng-messages=registerForm.email.$error ng-show=registerForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span> <span class=error ng-message=pattern>{{'VALIDATIONS_ERRORS.NOT_A_VALID_EMAIL' | translate}}</span></span></fieldset><fieldset class=form-group><label for=phone class=\"hidden-xs control-label control-label--dark\">{{'REGISTER.PHONE' | translate}}</label><input id=phone class=\"form-control form-control--dark\" name=phone placeholder=\"{{'REGISTER.PHONE' | translate}}\" autocomplete=off ng-pattern=\"/^[+]?([0-9]*[\\.\\s\\-\\(\\)]|[0-9]+){3,24}$/\" ng-class=\"{'has-error': registerForm.phone.$invalid && registerForm.$submitted}\" ng-required=true ng-model=\"rc.model.phone\"> <span ng-messages=registerForm.phone.$error ng-show=registerForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span> <span class=error ng-message=pattern>{{'VALIDATIONS_ERRORS.NOT_A_VALID_PHONE_NUMBER' | translate}}</span></span></fieldset><fieldset class=form-group><label for=password class=\"hidden-xs control-label control-label--dark\">{{'REGISTER.PASSWORD' | translate}}</label><input type=password id=password class=\"form-control form-control--dark\" name=password placeholder=\"{{'REGISTER.PASSWORD' | translate}}\" autocomplete=off ng-class=\"{'has-error': registerForm.password.$invalid && registerForm.$submitted, 'is-not-empty': !!rc.model.password}\" ng-required=true ng-minlength=6 ng-model=\"rc.model.password\"> <span ng-messages=registerForm.password.$error ng-show=registerForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span> <span class=error ng-message=pattern>{{'VALIDATIONS_ERRORS.NOT_A_VALID_DATE' | translate: '{acceptedFormat: \"DD/MM/YYYY\"}'}}</span> <span class=error ng-message=minlength>{{'VALIDATIONS_ERRORS.MIN_LENGTH' | translate : '{min: 6}'}}</span></span></fieldset><fieldset class=form-group><label for=password-confirmation class=\"hidden-xs control-label control-label--dark\">{{'REGISTER.CONFIRM_PASSWORD' | translate}}</label><input type=password id=password-confirmation class=\"form-control form-control--dark\" name=passwordConfirmation placeholder=\"{{'REGISTER.CONFIRM_PASSWORD' | translate}}\" autocomplete=off compare-to=rc.model.password ng-class=\"{'has-error': registerForm.passwordConfirmation.$invalid && registerForm.$submitted, 'is-not-empty': !!rc.model.passwordConfirmation}\" ng-required=true ng-minlength=6 ng-model-options=\"{allowInvalid: true}\" ng-model=\"rc.model.passwordConfirmation\"> <span ng-messages=registerForm.passwordConfirmation.$error ng-show=registerForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span> <span class=error ng-message=minlength>{{'VALIDATIONS_ERRORS.MIN_LENGTH' | translate : '{min: 6}'}}</span> <span class=error ng-message=compareTo>{{'VALIDATIONS_ERRORS.MUST_MATCH' | translate : '{min: 6}'}}</span></span></fieldset><h2 class=margin-top-30>{{'REGISTER.SHIPPING_ADDRESS' | translate}}</h2><fieldset class=\"form-group form-group--a-quarter\"><label class=\"control-label control-label--dark hidden-xs\">{{'REGISTER.COUNTRY' | translate}}</label><ui-select ng-model=rc.model.country search-enabled=true ng-change=rc.countryChanged()><ui-select-match placeholder=\"Please select a country\">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"country.name as country in rc.model.countryList  | filter: {name: $select.search}\"><div ng-bind-html=country.name></div></ui-select-choices></ui-select></fieldset><fieldset class=\"form-group form-group--a-quarter\"><label for=city class=\"control-label control-label--dark hidden-xs\">{{'REGISTER.CITY' | translate}}</label><span ng-click=\"rc.flags.showCityTextBox = !rc.flags.showCityTextBox\" ng-show=\"rc.flags.countryHasCityList && !rc.flags.showCityTextBox\" class=\"pull-right pointer\">Other? Please add it.</span> <span ng-click=\"rc.flags.showCityTextBox = !rc.flags.showCityTextBox\" ng-show=\"rc.flags.countryHasCityList && rc.flags.showCityTextBox\" class=\"pull-right pointer\">Back to list.</span><div class=clearfix></div><input id=city class=\"form-control form-control--dark\" name=city placeholder=\"{{'REGISTER.CITY' | translate}}\" autocomplete=off ng-class=\"{'has-error': registerForm.city.$invalid && registerForm.$submitted}\" ng-required=true ng-model=rc.model.city ng-if=\"rc.flags.showCityTextBox\"> <span ng-messages=registerForm.city.$error ng-show=registerForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span><ui-select ng-model=rc.model.city search-enabled=true ng-if=!rc.flags.showCityTextBox><ui-select-match placeholder=\"Please select a city\">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"city.name as city in rc.model.cityList  | filter: {name: $select.search}\"><div ng-bind-html=city.name></div></ui-select-choices></ui-select></fieldset><fieldset class=\"form-group form-group--a-quarter\"><label for=street class=\"control-label control-label--dark hidden-xs\">{{'REGISTER.STREET' | translate}}</label><input id=street class=\"form-control form-control--dark\" name=street placeholder=\"{{'REGISTER.STREET' | translate}}\" autocomplete=off ng-class=\"{'has-error': registerForm.street.$invalid && registerForm.$submitted}\" ng-required=true ng-model=\"rc.model.street\"> <span ng-messages=registerForm.street.$error ng-show=registerForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span></fieldset><fieldset class=\"form-group form-group--a-quarter\"><label for=number class=\"control-label control-label--dark hidden-xs\">{{'REGISTER.NUMBER' | translate}}</label><input id=number class=\"form-control form-control--dark\" name=number placeholder=\"{{'REGISTER.NUMBER' | translate}}\" autocomplete=off ng-class=\"{'has-error': registerForm.number.$invalid && registerForm.$submitted}\" ng-required=true ng-model=\"rc.model.number\"> <span ng-messages=registerForm.number.$error ng-show=registerForm.$submitted><span class=\"error auto\" ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span></fieldset><fieldset class=\"form-group form-group--a-quarter\"><label for=block class=\"control-label control-label--dark auto hidden-xs\">{{'REGISTER.BLOCK' | translate}}</label><input id=block class=\"form-control form-control--dark\" name=block placeholder=\"{{'REGISTER.BLOCK' | translate}}\" autocomplete=off ng-model=\"rc.model.block\"></fieldset><fieldset class=\"form-group form-group--a-quarter\"><label for=floorNumber class=\"control-label control-label--dark hidden-xs\">{{'REGISTER.FLOOR' | translate}}</label><input id=floorNumber class=\"form-control form-control--dark\" name=floorNumber placeholder=\"{{'REGISTER.NUMBER' | translate}}\" autocomplete=off ng-model=\"rc.model.floorNumber\"></fieldset><fieldset class=\"form-group form-group--a-quarter\"><label for=apartment class=\"control-label control-label--dark auto hidden-xs\">{{'REGISTER.APARTMENT' | translate}}</label><input id=apartment class=\"form-control form-control--dark\" name=apartment placeholder=\"{{'REGISTER.APARTMENT' | translate}}\" autocomplete=off ng-model=\"rc.model.apartment\"></fieldset><fieldset class=\"form-group form-group--a-quarter\"><label for=zip class=\"control-label control-label--dark hidden-xs\">{{'REGISTER.ZIP' | translate}}</label><input id=zip class=\"form-control form-control--dark\" name=zip placeholder=\"{{'REGISTER.ZIP' | translate}}\" autocomplete=off ng-class=\"{'has-error': registerForm.zip.$invalid && registerForm.$submitted}\" ng-required=true ng-model=\"rc.model.zipCode\"> <span ng-messages=registerForm.zip.$error ng-show=registerForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span></fieldset><div class=\"text-center margin-top-30\"><label class=\"checkbox text-dark\" for=sign-up-for-newsletter><input type=checkbox id=sign-up-for-newsletter ng-model=\"rc.model.subscribeNewsletter\"> <span class=checkbox__tick-box></span> &nbsp;{{'REGISTER.SING_UP_NEWSLETTER' | translate}}</label></div><div class=\"text-center margin-top-40\"><button class=\"std-button std-button--light std-button--wide\" type=submit ng-disabled=\"registerForm.$submitted && !registerForm.$valid\" analytics-on analytics-event=\"Register submit\" analytics-category=Authentication>{{'ACTIONS.REGISTER' | translate | uppercase}}</button></div><div class=\"text-center margin-top-30\"><p class=text-smaller ng-bind-html=\"'REGISTER.TERMS_AND_CONDITIONS' | translate\"></p></div></form></div></div>"
  );


  $templateCache.put('assets/views/auth/settings.tpl.html',
    "<div class=\"ec-tab my-account-page\"><form name=registerForm ng-submit=sc.update(registerForm) novalidate><fieldset class=\"form-group form-group--full-width\" ng-show=sc.flags.showError><div class=\"col-md-12 error-alert margin-top-20\">{{sc.model.errorMessage}}</div></fieldset><fieldset class=\"form-group form-group--full-width\" ng-show=sc.flags.showConfirmation><div class=\"col-md-12 info-alert margin-top-20\">{{'REGISTER.UPDATE_SUCCESS' | translate}}</div></fieldset><fieldset class=\"form-group form-group--full-width\" ng-show=sc.flags.showConfirmAccountMessage><p class=\"col-md-12 info-alert margin-top-20 text-medium\">Your account is confirmed and you will be able to buy Early Bird tickets on October 5. Please make sure all your details below are complete and correct.</p></fieldset><h2>{{'REGISTER.ABOUT_YOU' | translate}}</h2><fieldset class=form-group><label for=first-name class=\"control-label control-label--dark hidden-xs\">{{'REGISTER.FIRST_NAME' | translate}}</label><input id=first-name class=\"form-control form-control--dark\" name=firstName placeholder=\"{{'REGISTER.FIRST_NAME' | translate}}\" autocomplete=off ng-class=\"{'has-error': registerForm.firstName.$invalid && registerForm.$submitted}\" ng-required=true ng-model=\"sc.model.firstName\"> <span ng-messages=registerForm.firstName.$error ng-show=registerForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span></fieldset><fieldset class=form-group><label for=last-name class=\"control-label control-label--dark hidden-xs\">{{'REGISTER.LAST_NAME' | translate}}</label><input id=last-name class=\"form-control form-control--dark\" name=lastName placeholder=\"{{'REGISTER.LAST_NAME' | translate}}\" autocomplete=off ng-class=\"{'has-error': registerForm.lastName.$invalid && registerForm.$submitted}\" ng-required=true ng-model=\"sc.model.lastName\"> <span ng-messages=registerForm.lastName.$error ng-show=registerForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span></fieldset><fieldset class=form-group><label for=email class=\"control-label control-label--dark hidden-xs\">{{'REGISTER.EMAIL' | translate}}</label><input type=email id=email class=\"form-control form-control--dark\" name=email placeholder=\"{{'REGISTER.EMAIL' | translate}}\" autocomplete=off ng-pattern=\"/^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$/\" ng-class=\"{'has-error': registerForm.email.$invalid && registerForm.$submitted}\" ng-required=true ng-model=\"sc.model.email\"> <span ng-messages=registerForm.email.$error ng-show=registerForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span> <span class=error ng-message=pattern>{{'VALIDATIONS_ERRORS.NOT_A_VALID_EMAIL' | translate}}</span></span></fieldset><fieldset class=form-group><label for=phone class=\"control-label control-label--dark hidden-xs\">{{'REGISTER.PHONE' | translate}}</label><input id=phone class=\"form-control form-control--dark\" name=phone placeholder=\"{{'REGISTER.PHONE' | translate}}\" autocomplete=off ng-pattern=\"/^[+]?([0-9]*[\\.\\s\\-\\(\\)]|[0-9]+){3,24}$/\" ng-class=\"{'has-error': registerForm.phone.$invalid && registerForm.$submitted}\" ng-required=true ng-model=\"sc.model.phone\"> <span ng-messages=registerForm.phone.$error ng-show=registerForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span> <span class=error ng-message=pattern>{{'VALIDATIONS_ERRORS.NOT_A_VALID_PHONE_NUMBER' | translate}}</span></span></fieldset><fieldset class=\"form-group nationality\"><label class=\"control-label control-label--dark hidden-xs\">{{'REGISTER.NATIONALITY' | translate}}</label><ui-select ng-model=sc.model.nationality search-enabled=true><ui-select-match placeholder=\"Please select your nationality\">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"nationality.name as nationality in sc.model.nationalityList  | filter: {name: $select.search}\"><div ng-bind-html=nationality.name></div></ui-select-choices></ui-select></fieldset><fieldset class=\"form-group gender\"><label class=\"control-label control-label--dark hidden-xs\">{{'REGISTER.GENDER' | translate}}</label><ui-select ng-model=sc.model.gender search-enabled=true><ui-select-match placeholder=\"Please select your gender\">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"gender.value as gender in sc.model.genderList  | filter: {name: $select.search}\"><div ng-bind-html=gender.name></div></ui-select-choices></ui-select></fieldset><fieldset class=form-group><label class=\"control-label control-label--dark hidden-xs\" ng-bind-html=\"'REGISTER.BIRTH_DATE' | translate\"></label><div class=select-wrapper><input name=birthDate data-format=DD/MM/YYYY data-template=\"DD MM YYYY\" data-first-item=none combodate ng-model=sc.model.birthDate nq-required=\"true\"></div><span ng-messages=registerForm.birthDate.$error ng-show=registerForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span> <span class=error ng-message=validateDate>{{'VALIDATIONS_ERRORS.NOT_A_VALID_DATE' | translate: '{acceptedFormat: \"DD/MM/YYYY\"}'}}</span></span></fieldset><h2 class=margin-top-30>{{'REGISTER.SHIPPING_ADDRESS' | translate}}</h2><fieldset class=\"form-group form-group--a-quarter\"><label class=\"control-label control-label--dark hidden-xs\">{{'REGISTER.COUNTRY' | translate}}</label><ui-select ng-model=sc.model.country search-enabled=true ng-change=sc.countryChanged()><ui-select-match placeholder=\"Please select a country\">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"country.name as country in sc.model.countryList  | filter: {name: $select.search}\"><div ng-bind-html=country.name></div></ui-select-choices></ui-select></fieldset><fieldset class=\"form-group form-group--a-quarter\"><label for=city class=\"control-label control-label--dark hidden-xs\">{{'REGISTER.CITY' | translate}}</label><span ng-click=\"sc.flags.showCityTextBox = !sc.flags.showCityTextBox\" ng-show=\"sc.flags.countryHasCityList && !sc.flags.showCityTextBox\" class=\"pull-right pointer\">Other? Please add it.</span> <span ng-click=\"sc.flags.showCityTextBox = !sc.flags.showCityTextBox\" ng-show=\"sc.flags.countryHasCityList && sc.flags.showCityTextBox\" class=\"pull-right pointer\">Back to list.</span><div class=clearfix></div><input id=city class=\"form-control form-control--dark\" name=city placeholder=\"{{'REGISTER.CITY' | translate}}\" autocomplete=off ng-class=\"{'has-error': registerForm.city.$invalid && registerForm.$submitted}\" ng-required=true ng-model=sc.model.city ng-if=\"sc.flags.showCityTextBox\"> <span ng-messages=registerForm.city.$error ng-show=registerForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span><ui-select ng-model=sc.model.city search-enabled=true ng-if=!sc.flags.showCityTextBox><ui-select-match placeholder=\"Please select a city\">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"city.name as city in sc.model.cityList  | filter: {name: $select.search}\"><div ng-bind-html=city.name></div></ui-select-choices></ui-select></fieldset><fieldset class=\"form-group form-group--a-quarter\"><label for=street class=\"control-label control-label--dark hidden-xs\">{{'REGISTER.STREET' | translate}}</label><input id=street class=\"form-control form-control--dark\" name=street placeholder=\"{{'REGISTER.STREET' | translate}}\" autocomplete=off ng-class=\"{'has-error': registerForm.street.$invalid && registerForm.$submitted}\" ng-required=true ng-model=\"sc.model.street\"> <span ng-messages=registerForm.street.$error ng-show=registerForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span></fieldset><fieldset class=\"form-group form-group--a-quarter\"><label for=number class=\"control-label control-label--dark hidden-xs\">{{'REGISTER.NUMBER' | translate}}</label><input id=number class=\"form-control form-control--dark\" name=number placeholder=\"{{'REGISTER.NUMBER' | translate}}\" autocomplete=off ng-class=\"{'has-error': registerForm.number.$invalid && registerForm.$submitted}\" ng-required=true ng-model=\"sc.model.number\"> <span ng-messages=registerForm.number.$error ng-show=registerForm.$submitted><span class=\"error auto\" ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span></fieldset><fieldset class=\"form-group form-group--a-quarter\"><label for=block class=\"control-label control-label--dark auto hidden-xs\">{{'REGISTER.BLOCK' | translate}}</label><input id=block class=\"form-control form-control--dark\" name=block placeholder=\"{{'REGISTER.BLOCK' | translate}}\" autocomplete=off ng-model=\"sc.model.block\"></fieldset><fieldset class=\"form-group form-group--a-quarter\"><label for=floorNumber class=\"control-label control-label--dark hidden-xs\">{{'REGISTER.FLOOR' | translate}}</label><input id=floorNumber class=\"form-control form-control--dark\" name=floorNumber placeholder=\"{{'REGISTER.NUMBER' | translate}}\" autocomplete=off ng-model=\"sc.model.floorNumber\"></fieldset><fieldset class=\"form-group form-group--a-quarter\"><label for=apartment class=\"control-label control-label--dark auto hidden-xs\">{{'REGISTER.APARTMENT' | translate}}</label><input id=apartment class=\"form-control form-control--dark\" name=apartment placeholder=\"{{'REGISTER.APARTMENT' | translate}}\" autocomplete=off ng-model=\"sc.model.apartment\"></fieldset><fieldset class=\"form-group form-group--a-quarter\"><label for=zip class=\"control-label control-label--dark hidden-xs\">{{'REGISTER.ZIP' | translate}}</label><input id=zip class=\"form-control form-control--dark\" name=zip placeholder=\"{{'REGISTER.ZIP' | translate}}\" autocomplete=off ng-class=\"{'has-error': registerForm.zip.$invalid && registerForm.$submitted}\" ng-required=true ng-model=\"sc.model.zipCode\"> <span ng-messages=registerForm.zip.$error ng-show=registerForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span></fieldset><fieldset class=\"form-group form-group--actions\"><div class=flex><a ui-sref=ElectricCastlePublic.ChangePassword class=\"link link--text text-large\" analytics-on analytics-event=\"Change password\" analytics-category=Navigation>{{'LOGIN.CHANGE_PASSWORD' | translate}}</a> <button class=\"std-button std-button--light std-button--wide\" type=submit ng-disabled=\"registerForm.$submitted && !registerForm.$valid\" analytics-on analytics-event=\"Register submit\" analytics-category=Authentication>{{'REGISTER.SAVE_CHANGES' | translate | uppercase}}</button></div></fieldset></form></div>"
  );


  $templateCache.put('assets/views/careers/careers.tpl.html',
    "<div class=\"page-container page-container__bg\"><div class=\"container text-justify\"><div class=row><div class=col-md-12><h1>Electric People Wanted!</h1><p>No jobs available at the moment, but if you want to be notified about openings in the team, write us at <a href=mailto:careers@electriccastle.ro>careers@electriccastle.ro</a>.</p></div></div></div></div>"
  );


  $templateCache.put('assets/views/configure-products.tpl.html',
    "<ul><li>Access to the camping area</li><li>Facilities & services: showers, eco-toilets and security</li></ul><ul><li>Access to the premium camping area</li><li>Access to the Camping Lounge</li><li>Facilities & Services: Upgraded Showers, Normal Toilets, security, free locker rooms, free charging points, supermarket</li></ul><ul><li>Yurta (sleeping mattress for 4 persons, sleeping sheets, rugs, light, a small nightstand)</li><li>Access to the premium camping area</li><li>Access to the Camping Lounge</li><li>Facilities & Services: Upgraded Showers, Normal Toilets, security, free locker rooms, free charging points, supermarket</li></ul><ul><li>Flexotel Room (2 single beds, sheets, lights, electricity, each room can be locked, linen and towels)</li><li>Access to the premium camping area</li><li>Access to the Camping Lounge</li><li>Facilities & Services: Upgraded Showers, Normal Toilets, security, free locker rooms, free charging points, supermarket</li></ul>"
  );


  $templateCache.put('assets/views/eco/eco.tpl.html',
    "<div class=\"page-container page-container__bg-dark eco-page\"><div class=container><div class=row><div class=\"col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\"><img src=/assets/img/eco/eco-banner.png class=\"img-responsive center-block\" alt=\"Be an ECO citizen\"><hr class=\"top\"></div></div></div><div class=container><div class=row><div class=\"col-md-5 col-md-offset-1 col-lg-4 col-lg-offset-2\"><h3>Zero Waste</h3><p>This edition we are kicking-off our EC ZeroWaste campaign, which we embrace as a long-term goal to reduce, reuse and recycle all the waste generated at the festival.</p><p>All over the festival area you will find differentiated bins to collect waste selectively, so please pay attention to throw the waste you generate in the right bin! Find the eco promoters at the Activity Tent and get our rewards for bringing your plastic/cardboard/aluminum waste at the recycling points.</p><h3>Eco Game</h3><p>For all of the Electric Castle campers, distinguished residents of the festival, we designed a fun contest to motivate you to take care of the castle and its surroundings.</p><p>Find the ECO Spot in the main square of the camping and become Guardian, Angel or Legend of the ECO program and you can win a <a href=\"http://iute.bike/\" target=_blank>iute.bike</a>, a 2018 VIP pass and other prizes.</p></div><div class=\"col-md-5 col-lg-4\"><h3>Eco Ambassadors</h3><p>For the third year in a row, we are calling bicycle lovers to cycle to the castle and promote alternative transportation and eco causes. If you and your friends are cycling enthusiasts and got the rhythm in your veins, hop on your bike and have a blast at Electric Castle! Free full pass, camping &amp; other goodies await you at the gate of the Banffy Castle.</p><p><a href=\"http://mainoi.ro/cyclists-around-world-called-become-eco-ambassadors-electric-castle/\" target=_blank>Read all info here.</a></p></div></div><div class=row><div class=\"col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\"><hr class=\"bottom\"><p class=margin-bottom-60><strong>The ECO Program of Electric Castle is designed and implemented by <a href=\"http://mainoi.ro/\" target=_blank>MAINOI Association</a> since 2014. In 2015, our sustainability programme won the runner-up position in the EE Music Star Festival in Europe category at the EE Music Awards in Barcelona. In 2016, we&#39;ve been shortlisted for the Green Operations Award among the greenest festivals in Europe, the Oscars of the eco programs in the music industry.</strong></p><p class=margin-bottom-40><a href=\"http://mainoi.ro/\" target=_blank><img src=\"/assets/img/eco/mainoi-logo.png\"></a></p></div></div></div></div>"
  );


  $templateCache.put('assets/views/festival/getting-there.tpl.html',
    "<div class=\"page-container page-container__bg\"><div class=container><h1>Getting There</h1><hr class=\"grey\"><div class=row><div class=col-md-6><h4>By Train</h4><p>We recommend you to take the train to Gara Cluj-Napoca. To get to Electric Castle you can:<br><br>1. Take the train to Bontida - also during the festival any train that passes Bontida, will stop there. Checkout the schedule <a href=/assets/img/trains.jpg target=_blank>here</a><br>2. Take the tram 101 or 102 to Horia Demian Sports Hall or take the bus 9 to Memorandumului, then bus 25 to Iulius Mall. From these two locations, shuttle service will get you to the festival grounds.</p></div><div class=col-md-6><h4>By Plane</h4><p>We recommend you to fly to Cluj-Napoca Airport (<a href=\"http://airportcluj.ro/\" target=_blank>airportcluj.ro</a>) (30 km from the festival site). From the airport, you can either take a transfer shuttle or a taxi that will get you to the festival site. For the return trip, you can use one of our buses to get to the airport.</p><p>For the transfer shuttle please make a reservation here:<br><a href=http://www.transfero.ro/bilete-online target=_blank>transfero.ro/bilete-online</a>.</p></div></div><hr class=\"grey\"><div class=row><div class=col-md-12><h4>By Bus</h4></div><div class=col-md-6><p>There will be regular buses, all day and night long, leaving from Horia Demian sports hall and Iulius Mall. Depending on the number of people waiting, the waiting time between buses may vary between 10 - 25 minutes.</p><p>The tickets can be bought from the bus stations or directly at the bus entrance using your festival wristband.</p></div><div class=col-md-6><p>The last bus to Cluj will leave on Monday, 13:00 PM.</p><p>If you're coming from abroad you can use Flixbus to get to Cluj-Napoca. Details here: <a href=https://www.flixbus.ro target=_blank>Flix Bus</a>.</p></div></div><hr class=\"grey\"><div class=\"row relative\"><div class=col-md-12><ul class=\"list-unstyled routes\"><li class=a><a href=\"https://www.google.ro/maps/dir/Cluj-Napoca,+Cluj+County/Bon%C8%9Bida,+Cluj+County/@46.8275587,23.6393804,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x47490c1f916c0b8b:0xbbc601c331f148b!2m2!1d23.6236353!2d46.7712101!1m5!1m1!1s0x4749a194cc0fce7f:0x9bf0e42d0dbfd65d!2m2!1d23.8155833!2d46.9148948\" target=_blank>Cluj - Bontida</a></li><li class=b><a href=\"https://www.google.ro/maps/dir/Oradea,+Bihor+County/Bon%C8%9Bida,+Cluj+County/@47.0171238,22.268695,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x474647e368762353:0x1b55a486d65d5344!2m2!1d21.9189438!2d47.0465005!1m5!1m1!1s0x4749a194cc0fce7f:0x9bf0e42d0dbfd65d!2m2!1d23.8155833!2d46.9148948\" target=_blank>Oradea - Bontida</a></li><li class=c><a href=\"https://www.google.ro/maps/dir/Timi%C8%99oara,+Timi%C8%99+County/Bon%C8%9Bida,+Cluj+County/@46.5948009,21.3412063,8z/data=!4m19!4m18!1m10!1m1!1s0x4745677dcb0fb5a7:0x537faf6473936749!2m2!1d21.2086793!2d45.7488716!3m4!1m2!1d23.4230095!2d46.7542166!3s0x4749054b47f83ef5:0x2b7241cf60c56a18!1m5!1m1!1s0x4749a194cc0fce7f:0x9bf0e42d0dbfd65d!2m2!1d23.8155833!2d46.9148948!3e0\" target=_blank>Timisoara - Oradea - Bontida</a></li><li class=d><a href=\"https://www.google.ro/maps/dir/Baia+Mare,+Maramure%C8%99+County/Bon%C8%9Bida,+Cluj+County/@47.2799985,23.3065864,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4737dc70b4206f37:0x30914e534fa9d1dd!2m2!1d23.5849881!2d47.6567387!1m5!1m1!1s0x4749a194cc0fce7f:0x9bf0e42d0dbfd65d!2m2!1d23.8155833!2d46.9148948!3e0\" target=_blank>Baia Mare - Bontida</a></li><li class=e><a href=\"https://www.google.ro/maps/dir/Bistri%C8%9Ba,+Bistri%C8%9Ba-N%C4%83s%C4%83ud+County/Bon%C8%9Bida,+Cluj+County/@46.9858535,23.9906733,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4749f7b004cf46c7:0xa78abae723b4e25c!2m2!1d24.4890979!2d47.1392617!1m5!1m1!1s0x4749a194cc0fce7f:0x9bf0e42d0dbfd65d!2m2!1d23.8155833!2d46.9148948!3e0\" target=_blank>Bistrita - Bontida</a></li><li class=f><a href=\"https://www.google.ro/maps/dir/Zal%C4%83u,+S%C4%83laj/Bon%C8%9Bida,+Cluj+County/@47.0591155,23.2877659,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x474842a15ce95f31:0x56c280de3735b817!2m2!1d23.0573324!2d47.1854562!1m5!1m1!1s0x4749a194cc0fce7f:0x9bf0e42d0dbfd65d!2m2!1d23.8155833!2d46.9148948!3e0\" target=_blank>Zalau - Bontida</a></li><li class=g><a href=\"https://www.google.ro/maps/dir/Bra%C8%99ov,+Bra%C8%99ov+County/Bon%C8%9Bida,+Cluj+County/@46.2919965,23.9820005,9z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40b35b862aa214f1:0x6cf5f2ef54391e0f!2m2!1d25.6011977!2d45.6579755!1m5!1m1!1s0x4749a194cc0fce7f:0x9bf0e42d0dbfd65d!2m2!1d23.8155833!2d46.9148948!3e0\" target=_blank>Brasov - Targu Mures - Bontida</a></li><li class=h><a href=\"https://www.google.ro/maps/dir/Alba+Iulia,+Alba+County/Bon%C8%9Bida,+Cluj+County/@46.503329,23.0228477,9z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x474ea80cce754875:0xe9b0f44e8e45cd05!2m2!1d23.5690265!2d46.0823371!1m5!1m1!1s0x4749a194cc0fce7f:0x9bf0e42d0dbfd65d!2m2!1d23.8155833!2d46.9148948!3e0\" target=_blank>Alba Iulia - Bontida</a></li><li class=i><a href=\"https://www.google.ro/maps/dir/Bucure%C8%99ti,+Bucharest/Bon%C8%9Bida,+Cluj+County/@45.6727734,23.6440674,8z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40b1f93abf3cad4f:0xac0632e37c9ca628!2m2!1d26.1025384!2d44.4267674!1m5!1m1!1s0x4749a194cc0fce7f:0x9bf0e42d0dbfd65d!2m2!1d23.8155833!2d46.9148948!3e0\" target=_blank>Bucuresti - Rm. Valcea - Alba Iulia - Bontida</a></li><li class=j><a href=\"https://www.google.ro/maps/dir/Sibiu/Bon%C8%9Bida,+Cluj+County/@46.3520127,23.2913171,9z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x474c6788fd2c1cd5:0x3ade9d214e3390b4!2m2!1d24.1255826!2d45.7983273!1m5!1m1!1s0x4749a194cc0fce7f:0x9bf0e42d0dbfd65d!2m2!1d23.8155833!2d46.9148948!3e0\" target=_blank>Sibiu - Bontida</a></li><li class=k><a href=\"https://www.google.ro/maps/dir/Ia%C8%99i,+Ia%C8%99i+County/Bon%C8%9Bida,+Cluj+County/@47.1568961,24.5115353,8z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40cafb7cf639ddbb:0x7ccb80da5426f53c!2m2!1d27.6014418!2d47.1584549!1m5!1m1!1s0x4749a194cc0fce7f:0x9bf0e42d0dbfd65d!2m2!1d23.8155833!2d46.9148948!3e0\" target=_blank>Iasi - Bontida</a></li><li class=l><a href=\"https://www.google.ro/maps/dir/Constan%C8%9Ba,+Constan%C8%9Ba+County/Bon%C8%9Bida,+Cluj+County/@45.5135696,24.9048276,8z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x40bae54a64345229:0x637be1cd3e654850!2m2!1d28.6348138!2d44.1598013!1m5!1m1!1s0x4749a194cc0fce7f:0x9bf0e42d0dbfd65d!2m2!1d23.8155833!2d46.9148948!3e0\" target=_blank>Constanta - Bucuresti - Bontida</a></li></ul></div><div class=\"col-md-12 cars\"><h4>By Car</h4><p><strong>We strongly advise you to use our shuttle buses!</strong></p><p><i class=\"fa fa-map-pin\"></i> <a href=https://goo.gl/maps/T8wvx1aajT62 target=_blank>Banffy Castle, Bontida, jud. Cluj<br>Str. Principala, 407105</a></p></div></div><div class=\"row margin-bottom-50\"><div class=col-md-12><p>There are two parking lots of 4000 cars capacity.<br>To get there, you will have to follow our signs. The cars will have access through Răscruci.<br>The price for the parking is 30 RON/entrance (that means that if you leave and enter again you will have to pay again).</p></div></div></div></div>"
  );


  $templateCache.put('assets/views/festival/map.tpl.html',
    "<div class=\"page-container page-container__bg\"><div class=container><div class=map-page><div class=panzoom-parent pan-zoom><img src=/assets/img/EC-map-2017.jpg width=2500px height=1983px class=\"panzoom\"></div><div class=map-buttons><button class=\"zoom-out btn button button-yellow button-small\"><i class=\"fa fa-minus\"></i></button> <button class=\"zoom-in btn button button-yellow button-small margin-left-100\"><i class=\"fa fa-plus\"></i></button> <input type=range class=\"zoom-range\"></div></div><div class=row><div class=col-md-12><p class=\"margin-bottom-30 text-right text-medium\"><a href=/assets/docs/EC-2017-map.pdf target=_blank>Download .PDF</a>&nbsp;<i class=\"fa fa-download\"></i></p></div></div></div></div>"
  );


  $templateCache.put('assets/views/home/home.tpl.html',
    "<div class=home-page><section class=video ng-video><div class=\"container text-center\"><img src=/assets/img/logo.png alt=\"Electric Castle\" class=\"img-responsive center-block\"><h2 class=text-center>Thank you!</h2></div><section class=controls vi-controls vi-volume><a ng-click=hc.cb.playPause() ng-show=!hc.model.isVideoPlaying class=\"glyphicon glyphicon-play\" vi-controls-play></a> <a ng-click=hc.cb.playPause() ng-show=hc.model.isVideoPlaying class=\"glyphicon glyphicon-pause\" vi-controls-pause></a> <a ng-click=hc.cb.muteUnmute() ng-show=hc.model.isVideoMuted class=\"glyphicon glyphicon-volume-off\" vi-volume-loudest></a> <a ng-click=hc.cb.muteUnmute() ng-show=!hc.model.isVideoMuted class=\"glyphicon glyphicon-volume-up\" vi-volume-mute></a></section><video vi-screen autoplay loop muted></video></section><div class=overflow-hidden><section class=content-boxes><div ng-repeat=\"box in hc.cb.getBoxes()\" class=\"box-wrap {{box.size}} {{box.height}}-height pull-{{box.boxAlign}}\"><a href={{box.link}} target=\"{{box.newWindow ? '_blank' : ''}}\" ng-if=!box.isEmbededVideo><div class=\"box {{box.boxType}}\" ng-class=\"box.bgImage ? '' : 'no-image'\"><div class=image style=\"background-image: url('{{box.bgImage}}')\"></div><div class=text><h3>{{box.title}}</h3><p ng-bind-html=hc.trustHtml(box.text)></p></div><div class=clearfix></div></div></a><div class=\"box video-box\" ng-if=box.isEmbededVideo><iframe width=100% height=100% src={{hc.trustSrc(box.link)}} frameborder=0 allowfullscreen></iframe><div class=text><h3>{{box.title}}</h3><p>{{box.text}}</p></div></div></div><div class=clearfix></div></section></div></div>"
  );


  $templateCache.put('assets/views/home/what-was-commented-in-home.tpl.html',
    ""
  );


  $templateCache.put('assets/views/info/about.tpl.html',
    "<div class=\"page-container page-container__bg-dark about-page\"><div class=banner><h1>About the festival</h1></div><div class=container><div class=row><div class=\"col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 columns-2\"><p>Electric Castle is a unique festival experience that takes place on the amazing domain of <a ui-sref=ElectricCastlePublic.TheCastle>Banffy Castle</a>, near Cluj-Napoca, in Transylvania.</p><p>It shakes up the way people interact with a festival by combing <a ui-sref=ElectricCastlePublic.LineUp.List>an eclectic musical lineup</a> with arts, technology and a visually innovative concept.</p><p>This year’s edition of Electric Castle, taking place between 12-16 July, celebrates its fifth anniversary with a plethora of world renowned acts. Spanning across ten stages, EC 2017 will see over 130,000 people flock to the iconic `Versailles of Transylvania’ to take advantage of the music, a broad food offering, performing arts, barber shop, yoga classes, fashion corner, and much more.</p><p>Guests will be entertained from day to night and back again with one of Europe’s few truly 24-hour festivals. Electric Castle is set to be a full festival experience featuring street performers, stand-up comedy acts, the biggest and most elaborate production to date and a brand new set of areas and structures.</p></div></div></div><hr class=\"dark margin-top-40\"><div class=\"container margin-top-60\"><div class=\"row clearfix margin-bottom-40\"><div class=\"col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 teaser\" scroll-reveal><a href=https://youtu.be/mzoLSyYytek target=_blank class=\"col-sm-4 reveal margin-top-neg-30\"><h4>2016<br><span>Aftermovie</span></h4><img src=/assets/img/info/about-1.jpg class=\"img-responsive center-block\"></a> <a href=https://youtu.be/PSpKIj5lFyI target=_blank class=\"col-sm-4 reveal margin-top-40\"><h4>2015<br><span>Aftermovie</span></h4><img src=/assets/img/info/about-2.jpg class=\"img-responsive center-block\"></a> <a href=https://youtu.be/TT6VndrijlU target=_blank class=\"col-sm-4 reveal\"><h4>2014<br><span>Aftermovie</span></h4><img src=/assets/img/info/about-3.jpg class=\"img-responsive center-block\"></a></div></div></div></div>"
  );


  $templateCache.put('assets/views/info/accommodation.tpl.html',
    "<div class=\"page-container page-container__bg-dark accommodation-page\"><div class=banner><h1>Accommodation</h1></div><div class=container><div class=row><div class=\"col-md-9 col-sm-12 col-sm-offset-0 text-center center-block no-float\"><h2>Get to live the full festival experience by residing in the EC village for 5 Days, together with 10.000 festival lovers.</h2><p>Choose one of our amazing add-ons, to spice up you camping experience, or choose to live in your tent, in one of our camping neighbourhoods.</p><p>Either way, you'll have access to premium showers and toilets, the camping shop (where you can buy food, fruits, and necessities), the Grill Area (where you can cook one of the juicy, ready-to-be-grilled meats) and to the Silent Dance Stage.</p></div></div></div><hr class=\"dark margin-top-30\"><div class=container><div class=\"row item\"><div class=\"col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-0\"><h4>Pre-pitched tent</h4><p>The perfect place to crash for a couple of sleep-party-repeat-ers when your batteries need a bit of recharging.</p><p><img src=/assets/img/camping/tent5.jpg class=\"img-responsive\"></p></div><div class=\"col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-0\"><ul><li>2 persons/tent</li><li>Pre-pitched and waiting for your arrival</li><li>2 sleeping mats</li><li>2 blankets included</li><li>Bring your own sleeping bags</li></ul><p><a href=/tickets#accommodation class=\"call-to-action call-to-action-lg\">Get accommodation</a></p></div></div></div><hr class=\"dark margin-top-30\"><div class=container><div class=\"row item\"><div class=\"col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-0\"><h4>Dream tent</h4><p>Your little \"home away from home\" at Electric Castle. Good to go for up to 4 people, it even has light and a small nightstand, if you must finish the book you're reading.</p><p><img src=/assets/img/camping/yurta7.jpg class=\"img-responsive\"></p></div><div class=\"col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-0\"><ul><li>4 persons/tent</li><li>Sleeping mattress</li><li>Sleeping sheets</li><li>Rugs</li><li>Light</li><li>A small nightstand</li></ul><p><a href=/tickets#accommodation class=\"call-to-action call-to-action-lg\">Get accommodation</a></p></div></div></div><hr class=\"dark margin-top-30\"><div class=container><div class=\"row item\"><div class=\"col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-0\"><h4>Swedish lodge</h4><p>Little boxes, on the hillside. It's like a wooden house met a tent and they had a giant baby. That comfortably fits 4.</p><p><img src=/assets/img/camping/lodge4.jpg class=\"img-responsive\"></p><img src=/assets/img/tickets/sold-out.png width=100 class=\"sold-out\"></div><div class=\"col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-0\"><ul><li>4 persons/logde</li><li>4 beds with sleeping mattresses</li><li>bring your own sleeping sheets and pillows</li></ul><p><a href=/tickets#accommodation class=\"call-to-action call-to-action-lg\">Get accommodation</a></p></div></div></div><hr class=\"dark margin-top-30\"><div class=container><div class=\"row item\"><div class=\"col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-0\"><h4>Panorama tent</h4><p>If you're into tents with a view, we have just the thing for you. You'll even have your own little porch to hang out on. Good for 4.</p><p><img src=/assets/img/camping/panorama1.jpg class=\"img-responsive\"></p></div><div class=\"col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-0\"><ul><li>4 persons/tent</li><li>Raised off the ground</li><li>Comfortable living space with an outdoor seating area</li><li>4 beds with sleeping mattresses</li><li>Bring your own sleeping sheets and pillows</li></ul><p><a href=/tickets#accommodation class=\"call-to-action call-to-action-lg\">Get accommodation</a></p></div></div></div></div>"
  );


  $templateCache.put('assets/views/info/castle.tpl.html',
    "<div class=\"page-container page-container__bg castle-page\"><div class=banner><h1>Banffy Castle, Cluj <span>The most amazing festival location</span></h1></div><div class=container><div class=columns-3><p>Although it is probable that a mansion stood on the estate in the 14th and 15th Centuries, written evidence has been found dating only from the beginning of the 16th century.</p><p>According to a military report from 1680, fortifications had been built around the mansion, comprising of squared Renaissance ramparts with cylindrical corner towers. Dénes Bánffy (1638-1674), Lord Lieutenant of the counties of Dabâca and Cluj, brother-in-law of Prince Mihály Apafi, had the potential and the power to create such a large and imposing Renaissance castle. Count Dénes Bánffy (II) inherited the estate in 1735 at the age of 12. He spent his youth in Vienna and returned home as Master of the Horse to Maria Theresa. He began the Baroque reconstruction of the castle in 1747. The first stage of Dénes Bánffy’s reconstruction addressed the Court d’honneur. This was built between 1745 and 1751 on the area in front of the gatehouse. The new buildings containing a riding hall, stables, coach house and dwelling houses for servants were based on the style of the works related to the Viennese experience of the owner.</p><p>József Bánffy, ordered the demolition of the gatehouse of the Renaissance castle around 1820, and combined the Baroque and Renaissance courtyards. Stones of the gatehouse were used to build the mill beside the castle.</p><p>The last owner of the castle was Miklós Bánffy, his daughter Katalin Bánffy is the apparent heir, now living in Morocco. The consequences of the nationalization and the inadequate use of the buildings, as well as the lack of maintenance accelerated their degradation.</p><p>In the 1960's the National Direction for Monument Conservation consolidated the main building. The funding of the restoration works was stopped after a short time. Its precarious condition has been officially recognized as it appears on the World Monuments Watch’s list of One Hundred Most Endangered Sites for 2000. The size, architectural and historic value, and degree of degradation of the castle make its restoration and use a complex task, which will only succeed with a proper long-term strategy and international co-operation.</p><p>The Romanian-Hungarian Covenant between the Ministry of Culture, Romania and the Ministry for National Cultural Heritage, Hungary signed in 1999 enabled funds to be directed towards the conservation of the castle.</p><p>Through the presence of the Transylvania Trust and the Institute of Historic Building Conservation, who are the organizers of the <a href=\"http://www.heritagetraining-banffycastle.org/\" target=_blank>International Built Heritage Conservation Training Centre</a> set up within the Castle, the high quality restoration and long term protection can be ensured.</p><p>In the longer term the ensemble will incorporate commercial units as well, such as restaurant, gift shop, café, hotel, and will also include conference facilities. The castle consists from: main building, Miklós building, former kitchen block, stables, gate building and the mill. The restoration of the castle depends on financial support.</p><p>Also Electric Castle Festival is supporting the restoration process by donating an amount of the money earned from the tickets sale.</p><p class=margin-top-20><a href=\"https://www.youtube.com/watch?v=tbD66lBGuXM\" target=_blank class=\"button button--small button--has-border button--has-border--dark button--dark center-block\"><span class=\"glyphicon glyphicon-play\"></span> Play Video</a></p></div><div class=\"row clearfix margin-top-30\" light-gallery scroll-reveal><a href=/assets/img/castle/2.jpg class=\"col-md-3 col-sm-6 item margin-bottom-10 reveal\"><img src=/assets/img/castle/2.jpg data-img-src=/assets/img/castle/2.jpg class=\"img-responsive\"></a> <a href=/assets/img/castle/3.jpg class=\"col-md-3 col-sm-6 item margin-bottom-10 reveal\"><img src=/assets/img/castle/3.jpg data-img-src=/assets/img/castle/3.jpg class=\"img-responsive\"></a> <a href=/assets/img/castle/4.jpg class=\"col-md-3 col-sm-6 item margin-bottom-10 reveal\"><img src=/assets/img/castle/4.jpg data-img-src=/assets/img/castle/4.jpg class=\"img-responsive\"></a> <a href=/assets/img/castle/5.jpg class=\"col-md-3 col-sm-6 item margin-bottom-10 reveal\"><img src=/assets/img/castle/5.jpg data-img-src=/assets/img/castle/5.jpg class=\"img-responsive\"></a></div></div></div>"
  );


  $templateCache.put('assets/views/info/eco.tpl.html',
    "<div class=ec-tab><div class=\"col-md-10 col-md-offset-1 padding-top-20 padding-bottom-30\"><p>Join us in expressing the collective responsibility to the larger whole at Electric Castle 2016. Together with <strong><a href=\"http://mainoi.ro/\" class=hvr-overline-from-left target=_blank>MAINOI</a></strong>, we are ECO-Challenging you this year to create a sustainable music experience. Let's play!</p><img class=\"img-responsive margin-bottom-30 margin-top-10\" src=\"/assets/img/eco-game.png\"><p>Be part of something special:</p><ul><li>Play the ECO Game contest with 5 ECO-action categories: waste, transportation, energy, water, social. We will reward you with cool prizes each day and, the most eco-friendly of you, with special goodies at the end of the festival.</li><li>Come to our ECO spot in the festival area, open daily from 12:00 to 4:00, to compete with other participants and artists on the dynamo-bicycles in the “Battles Pedal” and charge your phones using the energy produced by your own self, through pedaling.</li><li>Have a cinematic experience at our ECO Cinema, welcoming you in the cosy lounge, by day, where you can chill and ponder on the relevance of elephants &amp; at the cinema, by night, where you can watch environmentalist videos, documentaries and movies.</li><li>Be part of or support the Eco Cycling Journey of the ECO-Ambassadors who are riding from Europe and Romania towards Electric Castle to advocate for alternative transportation and cycling tourism.</li><li>Keep an eye on the MUSIC DRIVES CHANGE campaign, where your artists will join you in ECO Challenges for a more conscious behaviour towards the environment at the festival and beyond.</li></ul><p>Join Nature's Rhythms!</p></div></div>"
  );


  $templateCache.put('assets/views/info/faq/accommodation-and-transport.tpl.html',
    "<div class=ec-tab><tabset vertical=true type=pills class=faq-tabs><tab><tab-heading>Camping zones</tab-heading><tab-content><h1>Camping zones</h1><p class=lead>Where is the camping situated and what can I find inside?</p><p>This year there is only one camping area, situated in the same place where the Premium Camping was last year, but with much more facilities – premium toilets and showers, free lockers, LIDL shop, grill zone, coffee lounge, laundromat, customer service point. It gives access to different camping add-ons (Pre-pitched tents, Dream Tents, Swedish Lodges and Panorama Tents).</p><p class=lead>What are the camping add-ons?</p><p>If you don’t want to bring your tent, you can choose from Pre-pitched tents, Dream Tents, Swedish Lodges and Panorama Tents. <a ui-sref=ElectricCastlePublic.Tickets>Details here</a>.</p><p class=lead>How much they cost?</p><p>You can find all the information you need regarding the costs <a ui-sref=ElectricCastlePublic.Tickets>here</a>.</p><p class=lead>When will the camping area be open?</p><p>From 12th of July – 14:00 until 17th of July – 14:00, 24 hours a day.</p><p class=lead>Can I enter with a car in the camping area?</p><p>No. It is prohibited to enter the camping area or its access point with any vehicle.</p><p class=lead>Will there be security?</p><p>Yes. The entire perimeter of the camp will be supervised by security guards. However, we recommend you not to leave any valuables in your tent.</p><p class=lead>Can I bring food?</p><p>Yes, you can.</p><p class=lead>Can I make fire?</p><p>No, you can’t</p><p class=lead>Can I bring alcohol?</p><p>No, you can’t.</p><p class=lead>Can I bring pets?</p><p>Sorry, but no.</p><p class=lead>Can bring an electricity generator?</p><p>Electricity generators, stoves and barbecues are prohibited in the camping area.</p></tab-content></tab><tab><tab-heading>RV Camping</tab-heading><tab-content><h1>RV Camping</h1><p class=lead>How can I come with my caravan?</p><p>Firstly, you need to buy a ticket from <a ui-sref=ElectricCastlePublic.Tickets>electriccastle.ro/tickets</a>. Each caravan must have an RV ticket.</p><p class=lead>Can I park my car in the RV Area?</p><p>No. Only cars with fixed beds can park there.</p><p class=lead>Will I be connected to electricity?</p><p>Yes. Each RV will get 1kw power.</p><p class=lead>Do I have a water source?</p><p>There is a water spot in the RV camping which can be used by the campers in that area.</p><p class=lead>Can I have a side tent/terrace?</p><p>Yes, each RV may have one side tent/terrace.</p><p class=lead>If I have an RV ticket can I enter the camping areas?</p><p>No, to enter the camping, each person must have a General Access+Camping or a Premium Access + Camping.</p></tab-content></tab><tab><tab-heading>Transportation</tab-heading><tab-content><h1>Transportation</h1><p class=lead>Is there a bus from Cluj-Napoca to Bontida?</p><p>Yes, there will be regular buses on the route Cluj-Bontida and Bontida – Cluj leaving from the Horia Demian sports hall parking and Iulius Mall.</p><p class=lead>What is the schedule?</p><p>24/7. The buses will leave from 20 to 20 minutes. The last bus to Cluj will leave on Monday, 13:00 PM</p><p class=lead>How can I buy bus tickets?</p><p>At each station, there will be a Ticket Booth where you can buy tickets. You can also pay with your RFID wristband.</p><p class=lead>Can I get there by car?</p><p>Yes, but you can’t enter Bontida without a valid car pass. All cars will be directed to the parking area.</p><p class=lead>Where do I park?</p><p>You can find our parking <a ui-sref=ElectricCastlePublic.Map>here</a>.</p><p class=lead>What’s the price of the parking?</p><p>Each car will have to pay 30 RON/entrance. After you pay, you can leave your car there for the whole festival. If you leave the parking, once you return you will have to pay 30 RON again.</p><p class=lead>Can I come by bike?</p><p>Yes, you can, we have a bike parking lot near the festival entrance.</p><p class=lead>Can I come by train?</p><p>Yes, all the trains that pass Bontida will stop there, during the festival.</p></tab-content></tab></tabset><div class=clearfix></div><hr class=\"grey\"><p class=\"margin-bottom-100 text-right\">Please read the <strong><a ui-sref=ElectricCastlePublic.TermsAndConditions target=_blank>terms and conditions</a></strong> and <strong><a ui-sref=ElectricCastlePublic.RulesAndRegulations target=_blank target=_blank>rules and regulations</a></strong> of the festival.</p></div>"
  );


  $templateCache.put('assets/views/info/faq/faq.tpl.html',
    "<div class=page-container__bg><div class=\"container info-page\" ng-class=\"{'hide-menu' : ic.shouldHideInfoMenu}\"><tabs class=\"ec-tabs info-tabs\" data=ic.tabData type=tabs justified=true></tabs><div ui-view></div></div></div>"
  );


  $templateCache.put('assets/views/info/faq/festival-area.tpl.html',
    "<div class=ec-tab><tabset vertical=true type=pills class=faq-tabs><tab><tab-heading>Festival Area</tab-heading><tab-content><h1>Festival Area</h1><p class=lead>Can I film or take photos?</p><p>You have the right to film and photograph in the general access areas. However, you must use the material only for your viewing. Any distribution of the said materials to the public, whether it be for free or for an onerous is prohibited. Also, during some concerts taking photos and filming is prohibited (even in the general access areas) and we will notify all the participants through our mobile app and by posting on our Facebook Event.</p><p class=lead>Can I drink alcohol?</p><p>Yes, you can if you are over 18.</p><p class=lead>Can I set a fire?</p><p>Inside the campsite and in the whole area of the event the use of fire by all means (spatial heating fires, the atmosphere or any other method open fire) and flammable materials is strictly forbidden.</p><p class=lead>Can I swim in the lake?</p><p>Swimming in the lake located on the festival grounds is prohibited and extremely dangerous.</p><p class=lead>Can I enter the Castle?</p><p>Yes, you can, in the zones that are part of general access. Accessing any other zone is prohibited and extremely dangerous.</p><p class=lead>What about the Security?</p><p>Across the festival grounds, we provide security through a qualified partner accredited accordingly. During the event, you need to co-operate, within the framework of the legal regulations, with these partners, and to follow their instructions in case of emergency.</p><p>In the case of a violent incident or the endangerment of the bodily integrity of others, security staff may decide to evacuate the people involved in the incident from the event’s premises.</p><p class=lead>What happens if I lose my ticket?</p><p>If you lose your ticket, we will not be in the position to help you and issue you another one without proper proof of receipt and buy, which is why we want you to take good care of your ticket.</p><p class=lead>What can I eat and drink?</p><p>We are very proud of our Food Court. We have it all: raw/vegan, Indian, Mexican, Italian, Romanian, sweets, ice-cream, fine dining, burgers and many other. About the drinks, you can choose from beer, water, juice, long drinks, shots or wine.</p><p class=lead>Can I bring cigarettes?</p><p>Yes, you can. Being an open outdoor space, Smoking is allowed on the festival grounds. The only exceptions are the indoor spaces of the festival where smoking is strictly forbidden.</p></tab-content></tab><tab><tab-heading>Entry</tab-heading><tab-content><h1>Entry</h1><p class=lead>How do I enter the festival?</p><p>Entry is granted only through specially designated areas. Before the entry you need to follow three easy steps:</p><ol><li>Create an account & register your ticket on <a href=\"https://ec2017.pay.intellifest.com/\" target=_blank class=hvr-overline-from-left><strong>ec2017.pay.intellifest.com</strong></a>. This one is optional but we strongly advise you to do it.</li><li>Swap your ticket for a wristband at our entrance stand.</li><li>Scan your wristband.</li></ol><p>You need to carry identification.</p><p class=lead>Why do I need an account?</p><p>Creating an account and registering your ticket is not mandatory, as we are always very careful to keep you incognito. However, by signing up and linking your wristband, you gain access to cool online features such as being able to top-up in advance and add credit into your account to avoid lines at the event, track your on-site purchases, receive an automatic refund, enter into giveaway contests and more.</p><p>ElectricCastle is not responsible for lost or stolen wristbands. However, if you’ve created an account and linked your wristband in advance, we will be able to cancel and reissue you a new wristband at no cost to you. So we recommend you play it safe and register!</p><p class=lead>How do I register my ticket?</p><ul><li><strong>STEP 1 – Creating Your Account</strong>: Click on the “Register Your TICKET OR WRISTBAND” button to be re-directed to the registration page. Click “Sign Up” to register with your information or use an existing Facebook account to sign up. IF YOU LINK YOUR FACEBOOK ACCOUNT YOU CAN ACCESS ALL SOCIAL FEATURES ON SITE (PHOTOBOOTHS AND OTHER SOCIAL ACTIVATION WILL BE SHARED ON FACEBOOK DIRECTLY UPON ONE TAP OF YOUR WRISTBAND). You will receive an email from Intellipay asking you to confirm your registration by clicking the activation button in the email. Follow the instructions on the website to finish setting up your account.</li><li><strong>STEP 2 – Linking Your TICKET</strong>: Once you’re logged in, click the “Wristbands” Tab at the top menu and select “I have a TICKET”. Enter the serial code under the barcode. Click “Add”.</li><li><strong>STEP 3 – Topping Up Your Account</strong>: Click the “Top-up” Tab at the top menu. You will be asked if you want to “Enable Auto-Top-up” (see below for details). You can click “Maybe later” or “Yes, enable”. Enter the amount you wish to top-up, review your order and click “Checkout” when ready. You will be re-directed to the payment site where you can enter your credit card information.</li></ul><p>You will receive confirmation of the transaction on the website, as well as an email receipt sent to your inbox automatically. You will also be able to view the transaction and download the receipt on your account page.</p><p class=lead>How can I swap my ticket for a wristband?</p><p>At the festival entrance we will scan the unique code found on your ticket and IF the code is valid, we will redeem it for a wristband. With that wristband you will be able to enter and festival and use it as a payment method on the festival grounds.</p><p class=lead>How can I scan my wristband?</p><p>Point your wristband to one of our scanners and you will be allowed to enter the amazing festival ground of Electric Castle.</p><p class=lead>Can I take the following with me?</p><p>Entering the festival with the following objects inside the festival grounds is prohibited: drugs, pyrotechnics devices, glass, striking or cutting tools, umbrellas, explosives, toxic and flammable materials or any other objects which can cause harm to others. According to the laws in force, you are prohibited to bring the following objects with you: knives, gas sprays, metal chains longer or any other objects which are unsafe to public security.</p><p class=lead>Can I bring food or beverages with me?</p><p>You can’t bring any alcoholic drinks or other liquids on the Festival grounds, excepting a bottle of water/person. You can bring food only within the camping area.</p><p class=lead>Access for the physically challenged?</p><p>All the physically challenged persons have free entrance to the festival. The whole area of the festival is wheelchair user accessible. Separate toilets for the physically challenged are available at the festival. At each stage, users of wheelchairs are allowed to enter the area between the stage and barriers.</p><p class=lead>Can enter the event ground by car?</p><p>It is prohibited to enter Bontida by car without a valid car pass issued by us in advance. A car has access only in the designated parking areas. We advise you to use the public transport to get to the festival grounds.</p><p class=lead>Can I bring pets?</p><p>We love pets, but unfortunately, you can’t bring pets on the festival grounds. The noise levels are too high for them.</p><p class=lead>How many times during one festival evening/night can I enter or exit the festival premises?</p><p>You can enter the festival premises as many times as you want, as long as you have the wristband at your hand.</p></tab-content></tab><tab><tab-heading>Wristband &amp; Cashless System</tab-heading><tab-content><h1>Wristband &amp; Cashless System</h1><p class=lead>What is “cashless” payment and how does it work?</p><p>Our cashless payment system operates in a similar manner to pre-paid cards. At ELECTRIC CASTLE, we will be using high tech, RFID-enabled wristbands that include an embedded electronic chip in the RFID tag that will act as your key to pay for food, drinks, and merchandise at the event.</p><p>You will need to first create your cashless account, link your TICKET information, and load pre-paid credits into your account (refer to the Step-by-Step Instructions).</p><p>To make a purchase, tap your wristband on an RFID reader located at each vendor stand to open a transaction. Place your order with the vendor staff. To confirm and close the transaction, you will be required to use the same wristband to tap a second time. The order amount will automatically be deducted from your account.</p><p class=lead>Do I need to do anything before the festival?</p><p>Before you arrive at the festival, to save yourself time, please register your TICKET and create your personalized cashless account. Once you’re logged in, you will need to link your TICKET information in order to top-up and add pre-paid credit into your account. Any leftover credit will be refunded to you in accordance to our refund policy. By pre-loading credit into your account online in advance, you can immediately visit the concession and merch stands when you arrive at the festival without having to look for a Top-up Station. You can always load more credit through our festival mobile app or at a physical Top-up Station located throughout the event grounds.</p><p class=lead>How do I use the cashless system?</p><p>Your personalized festival wristband will be used as your digital wallet to make purchases at the festival – all with a simple tap of your wristband! This means you don’t have to worry about walking around the festival with your wallet or fumbling for change; instead, enjoy fast, convenient and secure transactions at all food vendors, bars, and vendors on-site using your high-tech, RFID-enabled wristband.</p><p class=lead>Is there any other method of payment?</p><p>Cashless is the only method of payment accepted on-site using RON as the official currency of Electric Castle.</p><p class=lead>How can I add money?</p><p>Register your ticket online and ‘top-up’ by loading money into your cashless account before you arrive – this will save you loads of time at the event, so you can go straight to partying. You can also add more funds to your account at a physical Top-up Station located throughout the event or online through Electric Castle’s app or website. Once your account is topped-up, you’re ready to make purchases on-site by simply tapping your wristband to one of the payment points at the vendor stands. The amount will automatically be deducted from your account – it’s quick and easy!</p><p class=lead>What is ‘enable auto top-up’?</p><p>The easiest way to add credit to your account is to “Enable Auto Top-up” when you’re adding credit for the first time. With the “Enable Auto Top-up” feature, your account balance will automatically re-load XX pre-paid credit into your account when your balance drops below XX amount. This way, you never have to worry about running low on credit at the festival and you won’t need to spend any time finding a Top-up Station before making purchases on-site. The pre-paid amount will automatically be charged to your credit card and you will receive an email notification. It’s simple and super convenient!</p><p>Feel free to top-up as much as you want or “Enable Auto Top-up” for maximum convenience. All unspent credit will be refunded back to you after the event.</p><p class=lead>How can I register my ticket?</p><ul><li><strong>STEP 1 – Creating Your Account</strong>: Click on the “Register Your TICKET OR WRISTBAND” button to be re-directed to the registration page. Click “Sign Up” to register with your information or use an existing Facebook account to sign up. IF YOU LINK YOU’RE FACEBOOK ACCOUNT YOU CAN ACCESS ALL SOCIAL FEATURES ON SITE (PHOTOBOOTHS AND OTHER SOCIAL ACTIVATION WILL BE SHARED ON FACEBOOK DIRECTLY UPON ONE TAP OF YOU WRISTBAND). You will receive an email from Intellipay asking you to confirm your registration by clicking the activation button in the email. Follow the instructions on the website to finish setting up your account.</li><li><strong>STEP 2 – Linking Your TICKET</strong>: Once you’re logged in, click the “Wristbands” Tab at the top menu and select “I have a TICKET”. Enter the serial code under the barcode. Click “Add”.</li><li><strong>STEP 3 – Topping Up Your Account</strong>: Click the “Top-up” Tab at the top menu. You will be asked if you want to “Enable Auto-Top-up” (see below for details). You can click “Maybe later” or “Yes, enable”. Enter the amount you wish to top-up, review your order and click “Checkout” when ready. You will be re-directed to the payment site where you can enter your credit card information.</li></ul><p>You will receive confirmation of the transaction on the website, as well as an email receipt sent to your inbox automatically. You will also be able to view the transaction and download the receipt on your account page.</p><p class=lead>Why should I register my ticket?</p><p>Creating an account and registering your TICKET is not mandatory, as we are always very careful to keep you incognito. However, by signing up and linking your wristband, you gain access to cool online features such as being able to top-up in advance and add credit into your account to avoid lines at the event, track your on-site purchases, receive an automatic refund, enter into giveaway contests and more.</p><p>Electric Castle is not responsible for lost or stolen wristbands. However, if you’ve created an account and linked your wristband in advance, we will be able to cancel and reissue you a new wristband at no cost to you. So we recommend you play it safe and register!</p><p class=lead>I have my wristband, but I haven’t a registered a ticket number. What do I do?</p><p>You can still create an account online; to top-up or add funds to your account online AFTER you get your wristband.</p><p>When you arrive at the event, go to a Ticket Swap location and present your PDF ticket along with a valid photo I.D. A staff member will scan your ticket number barcode and issue you an RFID wristband. From there, enter the festival and visit a physical Top-up Station located throughout the event grounds to add funds into your account. If you wish to top-up online you need to create an account, register your wristband and then manage your balance online.</p><p class=lead>I bought multiple tickets/wristbands, do I need to create multiple accounts?</p><p>Register a new account for each 4 Days General Access wristband if you want to keep your spending separate. Assign a wristband to each of your festival buddies and have them each create a new account.</p><p>FYI – If you add two or more wristbands into the same account, this is called a \"Shared Family Account\", and all linked wristbands will be able to make purchases using the same pool of funds in the account. You will NOT be able to separate or specify spending amounts for each wristband.</p><p class=lead>How do I add credits to my account at the festival?</p><p>You can top-up at one of the on-site Top-Up Stations located throughout the event grounds. However, vendor stands will not be able to top-up for you, so make sure you have enough credit on your account before making purchases. Trained staff will be on-hand to help you through the process.</p><p><strong>You can also top-up through our festival mobile app.</strong></p><p class=lead>Can I transfer my credits from my wristband to another one?</p><p>No, unfortunately you cannot transfer credits once they are in your personalized account. However, any leftover credit will be refunded to you in accordance to our refund policy.</p><p class=lead>I’m going to the festival with a family member / friend and we want to share credits from the same account instead of having two accounts. Is that possible?</p><p>Yes, if you add two or more wristbands into the same account, this is called a \"Shared Family Account”. All linked wristbands will be able to make purchases using the same pool of funds in the account. You will NOT be able to separate or specify spending amounts for each wristband.</p><p>Make sure you want to share your credit before you link multiple wristbands. Once a wristband is added to an account, you won’t be able to create a new account for that wristband or transfer it to another account.</p><p class=lead>Can I split the cost of something with a friend?</p><p>No, unfortunately you cannot split payment for an item. Only one wristband can be used to open the transaction, and that same wristband must be used to close and confirm the purchase. This is a security feature to ensure the purchaser is in control of their own spending.</p><p class=lead>I've lost my wristband! What should I do?</p><p>If you’ve created an account online and linked your wristband to it, no worries! Visit Customer Service at the event and they will deactivate your lost wristband and issue you a new one. Please bring valid photo ID. Link the new wristband number to your account and continue having a great time – your money is still on your account if you’ve previously linked it.</p><p>However, if you did NOT create an online account and did not link your wristband to the account, unfortunately your remaining credit balance can no longer be retrieved. To get a replacement wristband, visit a Customer Service kiosk and show proof of your original event ticket purchase along with valid photo ID. If someone else bought the tickets on your behalf, you will need to bring the original purchaser with you to the kiosk and show proof of purchase along with valid photo ID. Replacement wristbands will be issued at the discretion of the Customer Service Representative.</p><p>To avoid this issue, we strongly recommend you create an account and link your wristbands to that account prior to the festival. Treat your wristband the same way you would treat cash! We are not responsible for any funds stolen / missing from your wristband if you lose it.</p><p class=lead>What if I have leftover credit at the end of the event? What is your refund policy?</p><p>All credit left unredeemed by the end of the event will be refunded in accordance with the terms below:</p><ul><li><strong>Online Top-ups:</strong> Leftover funds on your account purchased online via the Intellipay site will automatically be refunded back to your credit card within 10 days following the end of the event. In this case, no fee is applied.</li><li><strong>On-site Top-ups at the Event:</strong> Leftover funds on your account purchased on-site at the event using cash, debit card and/or credit card will require or online can be retrieved on site until Monday morning 07:00 AM.</li><li><strong>If you still have money left on your account after Festival closing time</strong> you will have to complete a Manual Refund in your online account page (refund processing fees may apply). Upon verification, the refund will be processed within 10 business days following the closure of the refund form.</li><li>Refund processing is subject to verification of the data inputted by the guest in the Manual Refund Form. The guest is responsible for submitting accurate data.</li><li>The deadline to apply for a Manual Refund is July 21, 2017. For manual refunds, transaction fees apply, depending on your bank.</li></ul></tab-content></tab><tab><tab-heading>Information</tab-heading><tab-content><h1>Information</h1><p class=lead>Where can I get information?</p><p>We have a dedicated Info Point on the festival grounds where our friendly volunteers can help you with any information you need. The Info Point can be found on our Map <a ui-sref=ElectricCastlePublic.Map>here</a>.</p><p class=lead>Do you have a brochure?</p><p>The brochure is available free of charge to every visitor. It contains basic information about the program and performers, site maps, and essential practical information. The brochures can be found at our Info Point. For more details, you need to download our mobile app.</p><p class=lead>Do you have a mobile app?</p><p>You can download the Electric Castle mobile app from App Store or Google Play. I will be your little festival guide letting you know about the schedule, important things that are happening during the event, the map of the festival, activities or even let you customize your schedule.</p><p class=lead>How do I get around?</p><p>Maps of the festival can be found on our website, in our mobile app, our brochure or on the festival premises.</p></tab-content></tab><tab><tab-heading>Lost &amp; Found</tab-heading><tab-content><h1>Lost &amp; Found</h1><p class=lead>What can I do if I lose something?</p><p>Try checking our Info Point. If you left the festival grounds, you would be able to check the found items here.</p><p class=lead>What can I do If I found something that is lost?</p><p>Bring it to our Info Point and we will try to find its owner.</p><p class=lead>Do I get a reward for bringing something found to your info point?</p><p>Only our eternal gratitude and maybe a beer from the owner of the lost object.</p></tab-content></tab></tabset><div class=clearfix></div><hr class=\"grey\"><p class=\"margin-bottom-100 text-right\">Please read the <strong><a ui-sref=ElectricCastlePublic.TermsAndConditions target=_blank>terms and conditions</a></strong> and <strong><a ui-sref=ElectricCastlePublic.RulesAndRegulations target=_blank target=_blank>rules and regulations</a></strong> of the festival.</p></div>"
  );


  $templateCache.put('assets/views/info/faq/tickets.tpl.html',
    "<div class=ec-tab><tabset vertical=true type=pills class=faq-tabs><tab><tab-heading>Tickets</tab-heading><tab-content><h1>Tickets</h1><p class=lead>How to buy tickets?</p><p>Tickets can be bought from <a ui-sref=ElectricCastlePublic.Tickets>electriccastle.ro/tickets</a>, the Eventim Network, Festicket or the official partner locations of the Electric Castle Festival. To purchase a Hard Copy Ticket, not an online e-ticket, please visit one of our Partner Locations around the country or the ones in the Eventim Network.</p><p>If you're coming from abroad and would like to purchase your ticket in a different currency than Romanian Lei, you can do it from our partner Festicket <a ui-sref=ElectricCastlePublic.FromAbroad>here</a>.</p><p class=lead>What are the ticket types?</p><p>The General Access Pass gives you access to the event from Day 0 (12th of July) starting with 14:00 and you have the right to remain for the rest of the event. If you want to sleep on the festival grounds, you need to have a General Access + Camping or a Premium Pass + Camping.</p><p>You can buy Any Day Tickets that offer you access to the event on any day you choose, between 10:00 – 09:59. At that time, the Day ticket expires and you have to leave the festival grounds.</p><p class=lead>Do children need tickets?</p><p>Children under 13 qualify for free entrance, provided that an adult accompanies them. All children under 16 must by accompanied by an adult. We strongly advise than children under 4 to wear noise cancellation headphones.</p><p class=lead>Can I change the name on the ticket?</p><p>The name from the ticket is the name of the buyer, not the name of the person that uses the ticket. Anyway, the name can be changed from the buyer’s account, if you want to.You can offer your ticket to someone else all until it was redeemed for the wristband. When the wristband was placed on one's arm, it cannot be transferred to another person.</p><p class=lead>Can I upgrade my ticket?</p><p>Yes, you can. If you bought your ticket from electriccastle.ro, the ticket can be upgraded from the MY ORDERS section, in your account. If you bought a hard-copy ticket and you want to upgrade it, go to electriccastle.ro -> BUY TICKETS -> UPGRADE HARD-COPY. After upgrading it, your hard-copy ticket will remain the same, but the moment you swap it to a wristband, you will get the type of access assimilated to your upgrade.<br>Tickets cannot be downgraded.</p><p class=lead>Should I bring some identification document to the festival?</p><p>According to the Romanian Law, everybody is required to have ID, so it is necessary to take them w ith you to the festival.</p><p class=lead>Can I cancel or return the ticket?</p><p>Canceling a purchased ticket and money refund is not possible.</p><p class=lead>What should I do if I buy an invalid ticket?</p><p>Tickets that have been purchased and picked up at the authorized points of sale (electriccastle.ro, Eventim Network, authorized locations, mobile app or Festicket) and distribution are the only ones valid. We can't vouch for the validity of tickets unless they were bought at the mentioned points of sale.</p><p class=lead>What happens if I lose my ticket?</p><p>If you lose your ticket, we will not be in the position to help you and issue you another one without proper proof of receipt and buy, which is why we want you to take good care of your ticket.</p><p class=lead>What if I forget my ticket?</p><p>If you forget your ticket you will not be able to enter the festival, so we advise you to be careful and not forget it.</p><p class=lead>Can I sell my ticket?</p><p>It is strictly prohibited to sell or purchase overpriced tickets/invites. We reserve the right to prohibit access to the festival grounds and the camping areas to people found to be carrying out such activities and to confiscate the invitations and tickets in their possession. It is strictly prohibited to post selling announces on the Electric Castle only channels (Facebook page, Facebook event).</p></tab-content></tab><tab><tab-heading>Shop</tab-heading><tab-content><h1>Shop</h1><p class=lead>How do I place an order on the Electric Castle shop?</p><p>You can shop for t-shirts, accessories and other cool products. Filter them by type and find what you like best. Click on the image to enlarge and browse through the gallery.</p><p>To add a product to your cart, first, select your size (if applicable) and click on 'Add to basket.' Review the item(s) in your shopping cart. You have the option to delete items and change the quantity. You may click on 'Return to shop' to continue browsing, or if you are ready to checkout, click on 'Checkout.' Please note that additional shipping costs will be added to your final purchase price at checkout.</p><p class=lead>How do I find the right size for me?</p><p>You can check the size chart for each product and find your size accordingly.</p><p class=lead>Can I send an item as a gift?</p><p>Yes, please write us at <strong>merchandise@electriccastle.ro</strong> and mention the address where you want to send it.</p><p class=lead>How do I know that my order was successfully placed?</p><p>After a few minutes you will receive an order confirmation to your e-mail address when your order is placed successfully.</p><p class=lead>Which payment methods do you accept?</p><p>We don't process your payment directly. All payments are being made trough our partner, EuPlatesc. They accept all VISA, VISA Electron, MasterCard and Maestro credit/debit cards.</p><p class=lead>What are your shipping rates?</p><p>The shipping costs 16 Lei anywhere in Romania.</p><p class=lead>Do you ship to where I live?</p><p>For now we only ship in Romania. We will ship internationally soon. If you want us to let you know when we ship to your country please write us at <strong>merchandise@electriccastle.ro</strong>.</p><p class=lead>How do you ship my order?</p><p>We ship your order using DPD.</p><p class=lead>How can I track my order?</p><p>You will receive an email with the AWB for your package once your order is shipped. You will be able to track your order <a href=https://www.dpd.com/tracking target=_blank>here</a>.</p><p class=lead>Where will my order be shipped from?</p><p>Your order will be shipped form Cluj-Napoca, where the Electric Castle office is located.</p><p class=lead>How long will it take for my order to arrive?</p><p>Your order should reach you in 2 to 5 days working days.</p><p class=lead>What is your return policy?</p><p>We accept returns and exchanges within 30 days of receipt. Returns received outside the above time frame are not to be accepted.</p><p>We will only accept returns on non-faulty items that are in their original condition, have not been worn, altered or washed, with all tags attached and in its original packaging. Upon receipt of any order without tags please notify us immediately if you wish to return the item. We strongly advise all customers to check garments thoroughly upon delivery before removing any attached tags and before disposing of any original packaging.</p><p>Please note that we can only exchange an item for the same item in a different size. Exchanged items can only be dispatched after the returned goods have been received and undergone a quality control check. Please note that the customer is allowed to exchange an item for a different size only once. The customer is responsible for additional shipping costs.</p><p>The merchandise must be returned in one mailing. We reserve the right to refuse multiple returns at different times from one order.</p><p class=lead>Who do I contact in case of return of an item?</p><p>Send us an email at <strong>merchandise@electriccastle.ro</strong> with your order details and you'll receive the instructions by email.</p><p class=lead>When will I receive a refund for returned items?</p><p>When all requirements have been met, we will notify you and refund the cost of the product(s), minus the shipping fee. A time frame of anywhere between 10-14 days should be calculated for the receipt of your returned merchandise and the return/refund process. The refund time frame depends on the credit card used. Please note that the refund will only be issued to the credit card used for the order.</p><p>For any further questions regarding our returns and exchanges, please contact us at <strong>merchandise@electriccastle.ro</strong>.</p></tab-content></tab></tabset><div class=clearfix></div><hr class=\"grey\"><p class=\"margin-bottom-100 text-right\">Please read the <strong><a ui-sref=ElectricCastlePublic.TermsAndConditions target=_blank>terms and conditions</a></strong> and <strong><a ui-sref=ElectricCastlePublic.RulesAndRegulations target=_blank target=_blank>rules and regulations</a></strong> of the festival.</p></div>"
  );


  $templateCache.put('assets/views/info/faq/vendors-volunteers-and-jobs.tpl.html',
    "<div class=ec-tab><tabset vertical=true type=pills class=faq-tabs><tab><tab-heading>Vendors</tab-heading><tab-content><h1>Vendors</h1><p class=lead>How can I apply as a vendor?</p><p>Vendors sign-ups are closed for this year's edition.</p><p class=lead>Can I sell alcohol?</p><p>No.</p><p class=lead>Can I sell handmade stuff?</p><p>Yes you can, please send us an email at contact@electriccastle.ro and we’ll talk about it.</p></tab-content></tab><tab><tab-heading>Volunteers</tab-heading><tab-content><h1>Volunteers</h1><p class=lead>What if I want to be a volunteer?</p><p>Volunteers sign-ups are closed for this year's edition.</p></tab-content></tab><tab><tab-heading>Jobs</tab-heading><tab-content><h1>Jobs</h1><p class=lead>Do you guys hire staff?</p><p>From time to time we are looking for good working people that are passionate about music festivals.<br>You can write us an email at contact@electriccastle.ro.</p></tab-content></tab></tabset><div class=clearfix></div><hr class=\"grey\"><p class=\"margin-bottom-100 text-right\">Please read the <strong><a ui-sref=ElectricCastlePublic.TermsAndConditions target=_blank>terms and conditions</a></strong> and <strong><a ui-sref=ElectricCastlePublic.RulesAndRegulations target=_blank target=_blank>rules and regulations</a></strong> of the festival.</p></div>"
  );


  $templateCache.put('assets/views/info/history.tpl.html',
    "<div class=\"poster-container text-justify\"><div class=poster data-year=2013 ng-click=\"ic.changeHistoryYear('2013');\"><img src=/assets/img/history/2013/poster.png alt=\"EC 2013\"></div><div class=poster data-year=2014 ng-click=\"ic.changeHistoryYear('2014');\"><img src=/assets/img/history/2014/poster.png alt=\"EC 2014\"></div><div class=poster data-year=2015 ng-click=\"ic.changeHistoryYear('2015');\"><img src=/assets/img/history/2015/poster.png alt=\"EC 2015\"></div><div class=poster data-year=2016 ng-click=\"ic.changeHistoryYear('2016');\"><img src=/assets/img/history/2016/poster.png alt=\"EC 2016\"></div><div class=poster data-year=2017 ng-click=\"ic.changeHistoryYear('2017');\"><img src=/assets/img/history/2017/poster.png alt=\"EC 2017\"></div></div><div class=light-gallery-container><div class=\"image-container clearfix\" light-gallery ng-show=\"ic.historyYear == 2013\"><a href=/assets/img/history/2013/gallery/gallery-1.jpg class=item><img src=/assets/img/history/2013/thumbs/thumb-1.jpg data-img-src=\"/assets/img/history/2013/gallery/gallery-1.jpg\"></a> <a href=/assets/img/history/2013/gallery/gallery-2.jpg class=item><img src=/assets/img/history/2013/thumbs/thumb-2.jpg data-img-src=\"/assets/img/history/2013/gallery/gallery-2.jpg\"></a> <a href=/assets/img/history/2013/gallery/gallery-2.jpg class=item><img src=/assets/img/history/2013/thumbs/thumb-3.jpg data-img-src=\"/assets/img/history/2013/gallery/gallery-3.jpg\"></a> <a href=/assets/img/history/2013/gallery/gallery-4.jpg class=item><img src=/assets/img/history/2013/thumbs/thumb-4.jpg data-img-src=\"/assets/img/history/2013/gallery/gallery-4.jpg\"></a> <a href=/assets/img/history/2013/gallery/gallery-5.jpg class=item><img src=/assets/img/history/2013/thumbs/thumb-5.jpg data-img-src=\"/assets/img/history/2013/gallery/gallery-5.jpg\"></a> <a href=/assets/img/history/2013/gallery/gallery-6.jpg class=item><img src=/assets/img/history/2013/thumbs/thumb-6.jpg data-img-src=\"/assets/img/history/2013/gallery/gallery-6.jpg\"></a> <a href=/assets/img/history/2013/gallery/gallery-7.jpg class=item><img src=/assets/img/history/2013/thumbs/thumb-7.jpg data-img-src=\"/assets/img/history/2013/gallery/gallery-7.jpg\"></a> <a href=/assets/img/history/2013/gallery/gallery-8.jpg class=item><img src=/assets/img/history/2013/thumbs/thumb-8.jpg data-img-src=\"/assets/img/history/2013/gallery/gallery-8.jpg\"></a> <a href=/assets/img/history/2013/gallery/gallery-14.jpg class=item><img src=/assets/img/history/2013/thumbs/thumb-15.jpg data-img-src=\"/assets/img/history/2013/gallery/gallery-15.jpg\"></a></div><div class=\"image-container clearfix\" light-gallery ng-show=\"ic.historyYear == 2014\"><a href=/assets/img/history/2014/gallery/gallery-1.jpg class=item><img src=/assets/img/history/2014/thumbs/thumb-1.jpg data-img-src=\"/assets/img/history/2014/gallery/gallery-1.jpg\"></a> <a href=/assets/img/history/2014/gallery/gallery-2.jpg class=item><img src=/assets/img/history/2014/thumbs/thumb-2.jpg data-img-src=\"/assets/img/history/2014/gallery/gallery-2.jpg\"></a> <a href=https://www.youtube.com/embed/TT6VndrijlU class=item><img src=/assets/img/history/2014/thumbs/video-1.jpg data-img-src=\"https://www.youtube.com/embed/TT6VndrijlU\"></a> <a href=/assets/img/history/2014/gallery/gallery-5.jpg class=item><img src=/assets/img/history/2014/thumbs/thumb-5.jpg data-img-src=\"/assets/img/history/2014/gallery/gallery-5.jpg\"></a> <a href=/assets/img/history/2014/gallery/gallery-6.jpg class=item><img src=/assets/img/history/2014/thumbs/thumb-6.jpg data-img-src=\"/assets/img/history/2014/gallery/gallery-6.jpg\"></a> <a href=https://www.youtube.com/embed/qmR9mJ3NeNg class=item><img src=/assets/img/history/2014/thumbs/video-2.jpg data-img-src=\"https://www.youtube.com/embed/qmR9mJ3NeNg\"></a> <a href=/assets/img/history/2014/gallery/gallery-11.jpg class=item><img src=/assets/img/history/2014/thumbs/thumb-11.jpg data-img-src=\"/assets/img/history/2014/gallery/gallery-11.jpg\"></a> <a href=https://www.youtube.com/embed/UMuJTuc9Kr8 class=item><img src=/assets/img/history/2014/thumbs/video-3.jpg data-img-src=\"https://www.youtube.com/embed/UMuJTuc9Kr8\"></a> <a href=/assets/img/history/2014/gallery/gallery-19.jpg class=item><img src=/assets/img/history/2014/thumbs/thumb-19.jpg data-img-src=\"/assets/img/history/2014/gallery/gallery-19.jpg\"></a> <a href=https://www.youtube.com/embed/0ktnfH4rb2s class=item><img src=/assets/img/history/2014/thumbs/video-4.jpg data-img-src=\"https://www.youtube.com/embed/0ktnfH4rb2s\"></a> <a href=/assets/img/history/2014/gallery/gallery-62.jpg class=item><img src=/assets/img/history/2014/thumbs/thumb-62.jpg data-img-src=\"/assets/img/history/2014/gallery/gallery-62.jpg\"></a> <a href=/assets/img/history/2014/gallery/gallery-64.jpg class=item><img src=/assets/img/history/2014/thumbs/thumb-64.jpg data-img-src=\"/assets/img/history/2014/gallery/gallery-64.jpg\"></a></div><div class=\"image-container clearfix\" light-gallery ng-show=\"ic.historyYear == 2015\"><a href=https://www.youtube.com/embed/PSpKIj5lFyI class=item><img src=/assets/img/history/2015/thumbs/video-1.jpg data-img-src=\"https://www.youtube.com/embed/PSpKIj5lFyI\"></a> <a href=/assets/img/history/2015/gallery/gallery-1.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-1.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-1.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-6.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-6.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-6.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-7.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-7.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-7.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-8.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-8.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-8.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-9.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-9.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-9.jpg\"></a> <a href=https://www.youtube.com/embed/57lQVzL2ndQ class=item><img src=/assets/img/history/2015/thumbs/video-2.jpg data-img-src=\"https://www.youtube.com/embed/57lQVzL2ndQ\"></a> <a href=/assets/img/history/2015/gallery/gallery-10.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-10.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-10.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-11.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-11.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-11.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-12.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-12.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-12.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-13.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-13.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-13.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-14.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-14.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-14.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-15.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-15.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-15.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-16.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-16.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-16.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-17.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-17.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-17.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-18.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-18.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-18.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-19.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-19.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-19.jpg\"></a> <a href=https://www.youtube.com/embed/wwLcIj18mQQ class=item><img src=/assets/img/history/2015/thumbs/video-3.jpg data-img-src=\"https://www.youtube.com/embed/wwLcIj18mQQ\"></a> <a href=/assets/img/history/2015/gallery/gallery-20.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-20.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-20.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-22.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-22.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-22.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-23.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-23.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-23.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-24.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-24.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-24.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-26.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-26.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-26.jpg\"></a> <a href=https://www.youtube.com/embed/Q1Oc1D3C34Y class=item><img src=/assets/img/history/2015/thumbs/video-4.jpg data-img-src=\"https://www.youtube.com/embed/Q1Oc1D3C34Y\"></a> <a href=/assets/img/history/2015/gallery/gallery-29.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-29.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-29.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-40.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-40.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-40.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-59.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-59.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-59.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-63.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-63.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-63.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-64.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-64.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-64.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-85.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-85.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-85.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-90.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-90.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-90.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-98.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-98.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-98.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-99.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-99.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-99.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-100.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-100.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-100.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-101.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-101.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-101.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-106.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-106.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-106.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-109.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-109.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-109.jpg\"></a> <a href=https://www.youtube.com/embed/iDKerHF0T18 class=item><img src=/assets/img/history/2015/thumbs/video-5.jpg data-img-src=\"https://www.youtube.com/embed/iDKerHF0T18\"></a> <a href=/assets/img/history/2015/gallery/gallery-110.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-110.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-110.jpg\"></a> <a href=/assets/img/history/2015/gallery/gallery-111.jpg class=item><img src=/assets/img/history/2015/thumbs/thumb-111.jpg data-img-src=\"/assets/img/history/2015/gallery/gallery-111.jpg\"></a></div><div class=\"image-container clearfix\" light-gallery ng-show=\"ic.historyYear == 2016\"><a href=/assets/img/history/2016/gallery/gallery-1.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-1.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-1.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-2.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-2.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-2.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-3.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-3.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-3.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-4.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-4.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-4.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-5.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-5.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-5.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-6.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-6.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-6.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-7.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-7.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-7.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-8.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-8.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-8.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-9.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-9.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-9.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-10.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-10.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-10.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-11.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-11.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-11.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-12.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-12.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-12.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-13.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-13.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-13.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-14.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-14.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-14.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-15.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-15.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-15.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-16.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-16.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-16.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-17.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-17.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-17.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-18.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-18.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-18.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-19.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-19.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-19.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-20.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-20.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-20.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-21.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-21.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-21.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-22.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-22.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-22.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-23.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-23.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-23.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-24.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-24.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-24.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-25.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-25.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-25.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-26.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-26.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-26.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-27.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-27.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-27.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-28.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-28.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-28.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-29.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-29.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-29.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-30.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-30.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-30.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-31.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-31.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-31.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-32.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-32.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-32.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-33.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-33.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-33.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-34.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-34.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-34.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-35.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-35.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-35.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-36.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-36.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-36.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-37.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-37.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-37.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-38.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-38.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-38.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-39.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-39.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-39.jpg\"></a> <a href=/assets/img/history/2016/gallery/gallery-41.jpg class=item><img src=/assets/img/history/2016/thumbs/thumb-41.jpg data-img-src=\"/assets/img/history/2016/gallery/gallery-41.jpg\"></a></div><div class=\"image-container clearfix\" light-gallery ng-show=\"ic.historyYear == 2017\"><a href=/assets/img/history/2017/gallery/gallery-1.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-1.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-1.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-2.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-2.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-2.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-3.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-3.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-3.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-4.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-4.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-4.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-5.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-5.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-5.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-6.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-6.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-6.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-7.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-7.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-7.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-8.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-8.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-8.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-9.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-9.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-9.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-10.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-10.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-10.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-11.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-11.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-11.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-12.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-12.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-12.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-13.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-13.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-13.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-14.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-14.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-14.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-15.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-15.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-15.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-16.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-16.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-16.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-17.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-17.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-17.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-18.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-18.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-18.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-19.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-19.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-19.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-20.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-20.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-20.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-21.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-21.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-21.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-22.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-22.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-22.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-23.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-23.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-23.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-24.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-24.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-24.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-25.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-25.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-25.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-26.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-26.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-26.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-27.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-27.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-27.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-28.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-28.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-28.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-29.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-29.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-29.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-30.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-30.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-30.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-31.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-31.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-31.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-32.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-32.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-32.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-33.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-33.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-33.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-34.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-34.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-34.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-35.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-35.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-35.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-36.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-36.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-36.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-37.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-37.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-37.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-38.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-38.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-38.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-39.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-39.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-39.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-41.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-41.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-41.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-42.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-42.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-42.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-43.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-43.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-43.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-44.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-44.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-44.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-45.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-45.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-45.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-46.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-46.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-46.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-47.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-47.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-47.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-48.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-48.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-48.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-49.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-49.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-49.jpg\"></a> <a href=/assets/img/history/2017/gallery/gallery-50.jpg class=item><img src=/assets/img/history/2017/thumbs/thumb-50.jpg data-img-src=\"/assets/img/history/2017/gallery/gallery-50.jpg\"></a></div></div><hr>"
  );


  $templateCache.put('assets/views/info/lost.tpl.html',
    "<div class=\"page-container page-container__bg\"><div class=container><h1>Lost &amp; Found Stuff</h1><div class=content><p class=margin-bottom-20>If you lost one of the following items, please write at <a href=mailto:contact@electriccastle.ro>contact@electriccastle.ro</a> and we'll let you know how to get it back. We will keep the items until August 5 2017.</p><hr><table class=\"table table-striped\"><thead><tr><th>#</th><th>Type</th><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>1</td><td>Phone</td><td>iPhone 5</td><td>black, case with piano and EC stickers</td></tr><tr><td>2</td><td>Phone</td><td>Samsung</td><td>white</td></tr><tr><td>3</td><td>Phone</td><td>Huawei</td><td>black leather case</td></tr><tr><td>4</td><td>Wallet</td><td>Nacu Andreea</td><td>flower pattern</td></tr><tr><td>5</td><td>Wallet</td><td>Moldovan Catalin-Gheorghe</td><td>black leather</td></tr><tr><td>6</td><td>Wallet</td><td>-</td><td>small, black leather, with Grand Hotel Napoca card and keys</td></tr><tr><td>7.</td><td>Wallet/Case</td><td>-</td><td>pink</td></tr><tr><td>8.</td><td>Wallet/Case</td><td>-</td><td>black, small, with Sony headphones inside</td></tr><tr><td>9.</td><td>Wallet/Case</td><td>-</td><td>beige with zipper</td></tr><tr><td>9.</td><td>Keys</td><td>-</td><td>car keys (2 sets)</td></tr><tr><td>10.</td><td>Keys</td><td>-</td><td>house and other (11 sets)</td></tr><tr><td>11.</td><td>Power Banks</td><td>-</td><td>7 pieces</td></tr><tr><td>12.</td><td>Wallet</td><td>Imparatel Adrian</td><td>dollar sign pattern</td></tr><tr><td>13.</td><td>ID</td><td>Stanean Doris-Cristina</td><td></td></tr><tr><td>14.</td><td>ID</td><td>Kukla Robert-Alex</td><td></td></tr><tr><td>15.</td><td>ID</td><td>Hanu Cristi-Constantin</td><td></td></tr><tr><td>16.</td><td>Driver licence</td><td>Sarah Jane</td><td></td></tr><tr><td>17.</td><td>Bank Card</td><td>Modiga Cristian</td><td>BRD MasterCard</td></tr><tr><td>18.</td><td>Bank Card</td><td>Alexandra Sauca</td><td>BT Visa Electron</td></tr><tr><td>19.</td><td>Bank Card</td><td>Bianca Troncea</td><td>ING Visa</td></tr><tr><td>20.</td><td>Bank Card</td><td>Gabor Ioana Viorica</td><td>ING Visa Electron</td></tr><tr><td>21.</td><td>Bank Card</td><td>Pop Endre Silviu</td><td>BRD Visa</td></tr><tr><td>22.</td><td>Bank Card</td><td>Otto Vasile Szilagyi</td><td>BT Visa Electron</td></tr><tr><td>23.</td><td>Bank Card</td><td>Zidaru Mihaela</td><td>Intesa Sanpaolo Bank Visa</td></tr><tr><td>24.</td><td>Bank Card</td><td>Paul Muresan</td><td>BT Visa Electron</td></tr><tr><td>25.</td><td>Bank Card</td><td>Parauan Laurentiu</td><td>BRD Visa</td></tr><tr><td>26.</td><td>Bank Card</td><td>Bingert Luiza</td><td>BRD Visa</td></tr><tr><td>27.</td><td>Bank Card</td><td>Razvan Rus</td><td>BT Visa Electron</td></tr><tr><td>28.</td><td>Bank Card</td><td>Lavinia Iulia Lasca</td><td>ING Visa Electron</td></tr><tr><td>29.</td><td>Bank Card</td><td>Iulia Ioana Donea</td><td>Auchan MasterCard</td></tr><tr><td>30.</td><td>Card</td><td>Rida Elbouchikhi</td><td>BCU</td></tr><tr><td>31.</td><td>Card</td><td>Alghisi Alessandro</td><td>Ticket Restaurant</td></tr><tr><td>32.</td><td>Card</td><td>-</td><td>swim pass UBB</td></tr><tr><td>33.</td><td>Sunglasses</td><td>-</td><td>11 pieces</td></tr><tr><td>34.</td><td>Sunglasses + case</td><td>-</td><td>1 piece</td></tr><tr><td>35.</td><td>Glasses + case</td><td>-</td><td>1 piece</td></tr><tr><td>36.</td><td>Clothes</td><td>-</td><td>yellow raincoat</td></tr><tr><td>37.</td><td>Clothes</td><td>-</td><td>black leather jacket (boys)</td></tr><tr><td>38.</td><td>Clothes</td><td>-</td><td>black leather jacket (girls)</td></tr><tr><td>39.</td><td>Clothes</td><td>-</td><td>purple hat</td></tr><tr><td>40.</td><td>Clothes</td><td>-</td><td>grey scarf</td></tr><tr><td>41.</td><td>Other</td><td>-</td><td>bracelet, earring, lipstick (2 pieces)</td></tr><tr><td>42.</td><td>Other</td><td>-</td><td>makeup case</td></tr></tbody></table></div></div></div>"
  );


  $templateCache.put('assets/views/info/packages.tpl.html',
    "<div class=\"page-container page-container__bg-dark packages-page\" packages-gallery=pc.getProducts()><div class=banner><h1>Travel Packages</h1></div><div class=container><div class=row><div class=\"col-md-9 col-sm-12 col-sm-offset-0 text-center center-block no-float\"><h2>Experience Electric Castle, in full comfort.</h2><p>Choose one of our specially curated travel packages to enhance your stay.</p></div></div></div><div ng-repeat=\"package in pc.getProducts()\"><hr class=\"dark\"><div class=container><div class=\"row item\" ng-class=\"{'item-sold-out': package.isSoldout}\"><div class=\"col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-0\"><div class=\"slider is-loading\"><div class=slider__item ng-repeat=\"image in package.images | orderBy : 'position'\" ng-class=\"{'higher-z-index': $first}\" itemprop=image content={{::image.url}}><img ng-src={{::image.url}} alt=\"{{::package.name}}\"><div class=no-display><img class=high-resolution ng-src={{::image.url}} alt=\"{{::package.name}}\"></div></div></div><img ng-if=package.isSoldout src=/assets/img/tickets/sold-out.png width=100 class=\"sold-out\"></div><div class=\"col-md-5 col-sm-6 flex flex-direction-column\"><h4>{{::package.name}}</h4><div bind-html-compile=package.shortDescription></div><h3 class=price>{{::package.price}} Ron / {{::package.priceEur}} Eur</h3><a class=\"call-to-action call-to-action-lg margin-0\" ng-click=pc.addToBasket(package); ng-if=!package.isSoldout>Add to cart</a> <a class=\"call-to-action call-to-action-lg margin-0\" disabled ng-if=package.isSoldout>Add to cart</a></div></div></div></div></div>"
  );


  $templateCache.put('assets/views/info/premium.tpl.html',
    "<div class=\"page-container page-container__bg-dark premium-page\" scroll-reveal><div class=banner><h1>Premium Access</h1></div><div class=container><div class=row><div class=\"col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-0\"><p>Enhance your EC experience with the Premium Pass!</p><p>You’ll have access to the Private Premium Area where you can try fine dining dishes and award winning cocktails, have a better view of the main stage and enjoy one of the exclusive parties.</p></div><div class=\"col-md-5 col-sm-6\"><p>Premium Pass Benefits</p><ul><li>Access to the Premium Area</li><li>Cocktail Bar</li><li>Better view of the Main Stage</li><li>Fine Dining &amp; Premium Food Stall</li><li>Shaded Lounges</li><li>Coffee Shop</li><li>Pool</li><li>Exclusive Parties</li><li>Access to a paid Premium Parking</li><li>Chance to mingle with the headliners and other celebrities</li></ul><p><a ui-sref=ElectricCastlePublic.Tickets class=\"call-to-action call-to-action-lg\">Get your premium pass</a></p></div></div></div><hr class=\"dark margin-top-40\"><div class=margin-top-60><div class=\"row clearfix margin-bottom-40\"><div class=\"col-sm-12 teaser\"><div class=\"col-sm-2 col-sm-offset-1 margin-top-neg-30 reveal\"><img src=/assets/img/info/vip-3.jpg class=\"img-responsive center-block\"></div><div class=\"col-sm-2 reveal\"><img src=/assets/img/info/vip-4.jpg class=\"img-responsive center-block\"></div><div class=\"col-sm-2 margin-top-neg-30 reveal\"><img src=/assets/img/info/vip-5.jpg class=\"img-responsive center-block\"></div><div class=\"col-sm-2 margin-top-40 reveal\"><img src=/assets/img/info/vip-1.jpg class=\"img-responsive center-block\"></div><div class=\"col-sm-2 reveal\"><img src=/assets/img/info/vip-2.jpg class=\"img-responsive center-block\"></div></div></div></div></div>"
  );


  $templateCache.put('assets/views/info/press.tpl.html',
    "<div class=\"page-container page-container__bg\"><div class=\"container press\"><div class=row><div class=\"col-md-10 col-md-offset-1\"><h1>Press</h1><iframe src=https://electric_castle.formstack.com/forms/ec2017_press title=\"Press Application\" height=auto width=100% frameborder=0></iframe></div></div></div></div>"
  );


  $templateCache.put('assets/views/info/privacy-policy.tpl.html',
    "<div class=\"page-container page-container__bg\"><div class=\"container text-justify terms\"><div class=row><div class=\"col-md-10 col-md-offset-1 padding-bottom-40\"><h1 class=margin-bottom-10>Privacy Policy</h1><p><em>For the English Version please scroll bellow.</em></p><h3>Politica de Securitate a prelucrarilor de date cu caracter personal</h3><p>In conformitate cu prevederile Legii 677/2001, SC FESTIVAL TICKETS MANAGEMENT SRL, cu sediul Piezisa 19, et 2, Cluj-Napoca, jud. Cluj numit in continuare FTM, prelucreaza date cu caracter personal, cu respectarea principiilor mentionate in continuare, in scopuri legitime.</p><p>Prelucrarea datelor cu caracter personal se realizeaza prin mijloace automate/manuale, cu respectarea cerintelor legale și in conditii care sa asigure securitatea, confidentialitatea și respectarea drepturilor persoanelor vizate.</p><p>Prelucrarea datelor cu caracter personal se face cu respectarea urmatoarelor principii:</p><ul><li>Notificarea. Operatorul de date cu caracter personal este notificat la Autoritatea Nationala de Supraveghere a Prelucrarii Datelor cu Caracter Personal;</li><li>Legalitatea. Prelucrarea datelor cu caracter personal se face in temeiul și in conformitate cu prevederile legale;</li><li>Scopul bine-determinat. Orice prelucrare de date cu caracter personal se face in scopuri bine determinate, explicite și legitime, adecvate, pertinente și neexcesive prin raportare la scopul in care sunt colectate și ulterior prelucrate;</li><li>Confidentialitatea. Regulamentul intern de organizare si funcţionare al instituţiei conţine reglementari cu privire la confidenţialitatea informaţiilor.</li><li>Consimţamantul persoanei vizate. Orice prelucrare de date cu caracter personal, cu exceptia prelucrarilor care vizeaza date din categoriile strict mentionate in Legea 677/2001, poate fi efectuata numai daca persoana vizata si-a dat consimţamantul in mod expres și neechivoc pentru acea prelucrare;</li><li>Informarea. Informarea persoanelor se face de catre institutia care prelucreaza datele personale ale persoanei vizate;</li><li>Protejarea persoanelor vizate. Persoanele vizate au dreptul de acces la datele care sunt prelucrate, de a interveni asupra acestora, de opozitie și de a nu fi supus unei decizii individuale, precum și dreptul de a se adresa Autoritaţii Nationale de Supraveghere a Prelucrarii Datelor cu Caracter Personal sau instantei de judecata pentru apararea oricaror drepturi garantate de lege, care le-au fost incalcate;</li><li>Securitatea. Masurile de securitate a datelor cu caracter personal sunt stabilite astfel incat sa asigure un nivel adecvat de securitate a datelor cu caracter personal procesate. DREPTURILE PERSOANEI VIZATE (reglementate de Legea 677/2001);</li><li>dreptul de a obtine de la FTM, la cerere și in mod gratuit pentru o solicitare pe an, confirmarea faptului ca datele care va privesc sunt sau nu prelucrate de CeRe;</li><li>dreptul de a obtine de la FTM, la cerere și in mod gratuit rectificarea, actualizarea, blocarea sau ștergerea datelor a caror prelucrare nu este conforma cu Legea 677/2001, in special a datelor incomplete sau inexacte;</li><li>dreptul de a obtine de la FTM, la cerere și in mod gratuit transformarea in date anonime a datelor a caror prelucrare nu este conforma cu Legea 677/2001;</li><li>dreptul de a va opune in orice moment, din motive intemeiate și legitime, ca date care va vizeaza sa faca obiectul unei prelucrari, cu exceptia cazurilor in care exista dispozitii legale contrare; in caz de opozitie justificata prelucrarea nu mai poate viza datele in cauza;</li><li>dreptul de a va adresa justitiei pentru apararea oricaror drepturi garantate de prezenta lege, care v-au fost incalcate; De asemenea, pentru a reclama nerespectarea drepturilor garantate de Legea nr. 677/2001 va puteti adresa Autoritaţii Nationale de Supraveghere a Prelucrarii Datelor cu Caracter Personal sau/si instantelor de judecata. SECURITATEA DATELOR CU CARACTER PERSONAL</li></ul><p>FTM certifica faptul ca indeplinește cerintele minime de securitate a datelor cu caracter personal.</p><p>FTM utilizeaza metode și tehnologii de securitate, impreuna cu politici aplicate salariaţilor si procedurilor de lucru, pentru a proteja datele cu caracter personal colectate conform prevederilor legale in vigoare.</p><p>Regulamentul intern de organizare si funcţionare al FTM contine reglementari cu privire la confidenţialitatea datelor cu character personal care sunt prelucrate in cadrul instituţiei; · Personalul FTM este instruit in ceea ce priveste securitatea si confidenţialitatea datelor cu caracter personale care sunt prelucrate.</p><p>Datele cu caracter personal nu vor fi instrainate sub nicio forma terţelor persoane straine, iar accesul la bazele de date este permis doar persoanelor autorizate in acest sens; Pentru mai multe detalii și informatii orice persoana interesata se poate adresa Autoritaţii Nationale de Supraveghere a Prelucrarii Datelor cu Caracter Personal.</p><h3>Privacy Policy</h3><p>This privacy policy has been compiled to better serve those who are concerned with how their 'Personally identifiable information' (PII) is being used online. PII, as used in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</p><h4><strong>What personal information do we collect from the people that visit our blog, website or app?</strong></h4><p>When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, phone number, Date of Birth or other details to help you with your experience.</p><h4><strong>When do we collect information?</strong></h4><p>We collect information from you when you register on our site, place an order, subscribe to a newsletter or enter information on our site.</p><h4><strong>How do we use your information?</strong></h4><p>We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</p><ul><li>To personalize user's experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li><li>To administer a contest, promotion, survey or other site feature. • To quickly process your transactions.</li><li>To send periodic emails regarding your order or other products and services.</li></ul><h4><strong>How do we protect visitor information?</strong></h4><p>Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible.</p><p>We use regular Malware Scanning.</p><p>Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.</p><p>We implement a variety of security measures when a user places an order to maintain the safety of your personal information.</p><p>All transactions are processed through a gateway provider and are not stored or processed on our servers.</p><h4><strong>Do we use 'cookies'?</strong></h4><p>We do not use cookies for tracking purposes. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser (like Internet Explorer) settings. Each browser is a little different, so look at your browser's Help menu to learn the correct way to modify your cookies.</p><p>If you disable cookies off, some features will be disabled that make your site experience more efficient and some of our services will not function properly. However, you can still place orders.</p><h4><strong>Third Party Disclosure</strong></h4><p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide you with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</p><p>However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p><p>Third party links We do not include or offer third party products or services on our website.</p><h4><strong>Google</strong></h4><p>Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en</p><p>We use Google AdSense Advertising on our website.</p><p>Google, as a third party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on their visit to our site and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.</p><p>We have implemented the following:</p><ul><li>Google Display Network Impression Reporting</li><li>Demographics and Interests Reporting</li></ul><p>We along with third-party vendors, such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions, and other ad service functions as they relate to our website.</p><p>Opting out: Users can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising initiative opt out page or permanently using the Google Analytics Opt Out Browser add on.</p><h4><strong>California Online Privacy Protection Act</strong></h4><p>CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require a person or company in the United States (and conceivably the world) that operates websites collecting personally identifiable information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals with whom it is being shared, and to comply with this policy.</p><p>According to CalOPPA we agree to the following: Users can visit our site anonymously Once this privacy policy is created, we will add a link to it on our home page, or as a minimum on the first significant page after entering our website. Our Privacy Policy link includes the word 'Privacy', and can be easily be found on the page specified above.</p><p>Users will be notified of any privacy policy changes on our Privacy Policy Page</p><p>Users are able to change their personal information by logging in to their account.</p><p>How does our site handle do not track signals? We honor do not track signals and do not track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.</p><p>Does our site allow third party behavioral tracking? It's also important to note that we allow third party behavioral tracking.</p><h4><strong>COPPA (Children Online Privacy Protection Act)</strong></h4><p>When it comes to the collection of personal information from children under 13, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, the nation's consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.</p><p>We do not specifically market to children under 13.</p><h4><strong>Fair Information Practices</strong></h4><p>The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.</p><p>In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur: We will notify the users via email<br>- Within 7 business days We will notify the users via in site notification<br>- Within 1 business day</p><p>We also agree to the individual redress principle, which requires that individuals have a right to pursue legally enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or a government agency to investigate and/or prosecute non-compliance by data processors.</p><h4><strong>CAN SPAM Act</strong></h4><p>The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.</p><p>We collect your email address in order to: To be in accordance with CANSPAM we agree to the following: If at any time you would like to unsubscribe from receiving future emails, you can email us at and we will promptly remove you from ALL correspondence.</p><h4><strong>Contacting Us</strong></h4><p>If there are any questions regarding this privacy policy you may contact us using the information below.</p><p><address>Piezisa 19, et 2,<br>Cluj-Napoca, jud. Cluj,<br>400371, Romania<br></address><a href=http://electriccastle.ro>http://electriccastle.ro</a><br><a href=mailto:contact@electriccastle.ro>contact@electriccastle.ro</a></p></div></div></div></div>"
  );


  $templateCache.put('assets/views/info/rules-and-regulations.tpl.html',
    "<div class=\"page-container page-container__bg\"><div class=\"container text-justify terms padding-bottom-40\"><div class=row><div class=\"col-md-10 col-md-offset-1\"><h1 class=margin-bottom-10>Rules and Regulations</h1><p class=margin-bottom-30><em>For the English Version please <a href=/rules-and-regulations#en>scroll bellow</a>.</em></p><p>Regulamentul pentru lockers poate fi citit <a href=/assets/docs/lockers-rules.pdf target=_blank>aici</a>.</p><p>O listă cu obiectele ce pot sau nu pot fi aduse pe teritoriul festivalului.</p><div class=\"row text-left\"><div class=col-md-6><p><strong class=text-success>OK</strong> Ghiozdan (pe teritoriul festivalului)<br><strong class=text-success>OK</strong> Pelerine, Palarii, Ochelari de soare, Brichete<br><strong class=text-success>OK</strong> Telefoane Mobile<br><strong class=text-success>OK</strong> Țigări<br><strong class=text-success>OK</strong> Solutie pentru lentile de contact<br><strong class=text-success>OK</strong> Aparatate foto profesionale și camere video<br><strong class=text-success>OK</strong> Medicamente<br><strong class=text-success>OK</strong> Apă în PET sigilat<br><strong class=text-success>OK</strong> Corturi (doar în zona de camping)<br><strong class=text-success>OK</strong> Insulină (însoțită de documente)<br><strong class=text-success>OK</strong> Mâncare (doar în zona de camping)<br><strong class=text-success>OK</strong> Steaguri & Selfie Sticks</p></div><div class=col-md-6><p><strong class=text-danger>NU</strong> Droguri<br><strong class=text-danger>NU</strong> Cuțite si bricege cu lama mai mare de 6 cm, lanturi, etc<br><strong class=text-danger>NU</strong> Arme, explozibil, aparate pirotehnice, material toxic sau inflamabil etc<br><strong class=text-danger>NU</strong> Sticlă, obiecte contodente<br><strong class=text-danger>NU</strong> Alcool<br><strong class=text-danger>NU</strong> Retunarea banilor de pe bilete/abonamente<br><strong class=text-danger>NU</strong> Animale<br><strong class=text-danger>NU</strong> Biciclete, skate-uri, trotinete (in perimetrul festivalului)<br><strong class=text-danger>NU</strong> Umbrele & umbrele pliabile<br><strong class=text-danger>NU</strong> Graffiti, stickere, etc</p></div></div><div class=row><div class=col-md-12><br><ul><li>Accesul se face începând cu 12 Iulie de la ora 13:00 (in camping) si ora 18:00 (zona festivalului)</li><li>Participanții pot intra și ieși de câte ori doresc de pe teritoriul festivalului, dacă au la mână o brățară intactă RFID de festival;</li><li>Orele de incepere si de finalizare a oricaror concerte sau evenimente din cadrul Festivalului, precum si ordinea de performare a fiecarui artist pot fi modificate unilateral de catre organizator, fara ca aceasta modificare sa fie susceptibila de a cauza orice fel de prejudiciu oricarui Participant</li><li>Toți participanții sunt percheziționați la intrare. În cazul refuzului de a fi supus perchezitiei, participantilor le va fi refuzat accesul la eveniment</li></ul></div></div><br><p>Camping EC - O listă cu obiectele ce pot sau nu pot fi aduse în campingul festivalului.</p><div class=\"row text-left\"><div class=col-md-6><p><strong class=text-success>OK</strong> Ghiozdan & bagaje<br><strong class=text-success>OK</strong> Pelerine<br><strong class=text-success>OK</strong> Aparatate foto profesionale și camere video<br><strong class=text-success>OK</strong> Medicamente<br><strong class=text-success>OK</strong> Insulină (însoțită de documente)<br><strong class=text-success>OK</strong> Mâncare și conserve<br><strong class=text-success>OK</strong> Apă și suc în PET sigilat<br><strong class=text-success>OK</strong> Steaguri & Selfie Sticks</p></div><div class=col-md-6><p><strong class=text-danger>NU</strong> Droguri<br><strong class=text-danger>NU</strong> Cuțite si bricege cu lama mai mare de 6 cm<br><strong class=text-danger>NU</strong> Arme, explozibil, etc<br><strong class=text-danger>NU</strong> Sticlă<br><strong class=text-danger>NU</strong> Alcool<br><strong class=text-danger>NU</strong> Animale<br><strong class=text-danger>NU</strong> Biciclete, skate-uri, trotinete<br><strong class=text-danger>NU</strong> Umbrele & umbrele pliabile<br><strong class=text-danger>NU</strong> Mobilier de grădină<br><strong class=text-danger>NU</strong> Foc, materiale inflamabile, combustibili și/sau generatoare de curente</p></div></div><hr class=\"dark\"><h3>Cuprins</h3><p>I. <strong>Organizatorul şi evenimentul</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Organizatorul<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Evenimentul<br><br>II. <strong>Regulamentul</strong><br><br>III. <strong>Bilete, tipuri de bilete şi cumpărarea biletelor</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Bilete şi tipuri de bilete<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Cumpărarea biletelor<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Returnarea biletelor<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Schimbarea preţurilor<br><br>IV. <strong>Participarea la eveniment</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Intrarea<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Reguli de conduită pe suprafaţa festivalului<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Reguli de conduită în afara festivalului<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Reguli de conduită în zona de camping<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Obiecte Pierdute<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. Securitatea<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7. Prim Ajutor<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8. Produse şi servicii<br><br>V. <strong>Garanţii şi responsabilităţi</strong><br><br>VI. <strong>Semne şi drepturi de autor</strong><br><br>VII. <strong>Sancţiuni</strong><br><br>VIII. <strong>Forţă majoră</strong></p><hr class=\"dark\"><p>Prezentul Regulament se aplica pentru evenimentul Electric Castle, organizat de SC Festival Ticket Management SRL intitulați în continuare Organizator. Prezentul Regulament defineşte regulile pe care fiecare participant al evenimentului trebuie să le respecte. Prezentul Regulament defineşte drepturile şi obligaţiile în relaţia dintre Organizator şi Participant.</p><h3>I. ORGANIZATORUL ŞI EVENIMENTUL</h3><h4><strong>ORGANIZATORUL</strong></h4><p>SC Festival Ticket Management SRL<br>CUI: RO35190617<br>J12/3329/02.11.2015</p><h4><strong>EVENIMENTUL</strong></h4><p>Electric Castle – 12 - 16 Iulie, ce se desfăşoară la Castelul Banffy din Bonţida, judeţul Cluj, România.</p><h3>II. REGULAMENTUL</h3><ol><li>Prezentul Regulament reprezinta un acord incheiat între organizator şi participant.</li><li>Organizatorul îşi rezervă dreptul de a modifica oricând acest Regulament, fără o înştiinţare în prealabil a Participantului. Orice modificare va fi afisata pe site-ul evenimentului www.electricastle.ro 2. si la intrarea in locul de desfasurare a evenimentului fiind de imediata aplicare incepand de la momentul afisarii pe site-ul evenimentului sau la intrarea in locul de desfasurare a evenimentului, in functie de care dintre aceste doua modalitati se va realiza prima.</li><li>Prin cumpărarea unui bilet, Participantul intelege, accepta şi se obliga să respecte in totalitate prevederile acestui Regulament.</li><li>Organizatorul asigură Participantul că prin cumpărarea unui bilet valid (indiferent de metoda prin care a fost achiziţionat) i se asigură dreptul de participa la Eveniment, in conditiile de la punctul III.1 de mai jos.</li></ol><h3>III. BILETE, TIPURI DE BILETE ŞI CUMPĂRAREA BILETELOR</h3><h4><strong>1. BILETE ŞI TIPURI DE BILETE</strong></h4><p>1.1. Există 3 tipuri de bilete: bilete cumpărate de la partenerii EC (Eventim, Festicket, Skiddle, etc. – o listă completă poate fi găsită pe electriccastle.ro), bilete cumpărate online prin sistemul Electric Castle, fie că este vorba de site sau mobile app (e-ticket), bilete cumpărate de la locaţiile partenere Electric Castle. Deasemenea în cadrul categoriilor de mai sus există bilete General Access (pe toata durata festivalului, cu sau fără campare), Premium Access (cu sau fără campare), Any Day Tickets (bilete de o zi) și Black Ticket.</p><p>1.2. Biletul de o zi asigură participantului accesul la eveniment pentru ziua respectivă între orele 10:00 ziua respectiva – 08:00 ziua imediat urmatoare, ora la care încetează valabilitatea biletului de o zi, iar participantul este obligat să părăsească perimetrul festivalului. Dacă participantul nu are acces, organizatorul îşi rezervă dreptul de a-l însoţi în afara perimetrului festivalului.</p><p>1.3. General Acces cu camping: cu acest tip de bilet, participanţii pot lua parte la eveniment din Ziua 0 (12 Iulie), începând cu ora 13:00 şi au dreptul de a rămâne pe toată durata evenimentului. Organizatorul oferă participanţilor un loc de campare, aceştia având acces şi la locurile special amenajate cu duşuri si toalete.</p><p>1.4. Participanţii care sosesc cu rulote sunt nevoiți să achiziționeze un bilet pentru rulotă (per vehicul). Fiecare persoană ce dorește să folosească facilitățile campingului, trebuie să aibă un bilet pentru campare (per persoană). În prețul biletului pentru rulote sunt incluse și 2 accese în camping.</p><p>1.5. General Access fara camping. Participanţii pot lua parte la eveniment din Ziua 0 (12 iulie), începând cu ora 13:00 şi au dreptul de a rămâne pe toată durata evenimentului. Participanţii nu pot dormi în perimetrul de desfăşurare a festivalului şi nu pot rămâne în zonele rezervate participanţilor care deţin un bilet cu campare şi nici nu pot folosi duşurile special amenajate.</p><p>1.6. Minorii sub 12 ani au acces gratuit pe toata durata desfăsurării festivalului, cu condiţia ca aceştia să fie insoţiţi de un părinte/reprezentant legal sau convențional ce are un bilet valid.</p><p>1.7. Persoanele cu dizabilități, care trimit in prealabil o copie după certificatul de handicap pe contact@electriccastle.ro, au acces gratuit, iar însoțitorul plătește 50% din prețul biletului din acel moment.</p><p>1.8. Organizatorul garantează DOAR valabilitatea biletelor vândute de către Electric Castle sau partenerii Electric Castle. O listă completă cu aceştia poate fi găsită pe electriccastle.ro</p><h4><strong>IMPORTANT!</strong></h4><p>Este strict interzisă vânzarea biletelor sau a invitaţiilor. Organizatorii îşi rezervă dreptul anula/confisca biletele/invitațiile respective și de a interzice accesul în zona festivalului şi a campingului a persoanelor care vor fi depistate că desfăşoară astfel de activităţi.</p><p>Este strict interzisă postarea de poze cu bilete sau seriile unice ale biletelor pe rețele de socializare (ex. Facebook).</p><p>Este strict interzisă postarea de vânzare a biletelor pe rețele de socializare sau site-uri.</p><p>1.9. Bilete şi brăţări: Accesul în festival se face doar pe baza unei brățări ale carei caracteristici vor fi distincte in funcție de varsta participantului., care acorda aceleasi drepturi si impune aceleasi obligatii precum un bilet. Doar o brăţară intactă, purtată la mână, asigură participantului dreptul de a intra in perimetrul festivalului. Organizatorul îşi rezervă dreptul (prin colaboratorii săi) de a verifica constant brăţara atât la intrarea în incinta festivalului cât şi pe tot perimetrul festivalului. Pierderea, avarierea sau distrugerea brăţării este responsabilitatea exclusivă a participantului.</p><p>În cazul avarierii sau pierderii, brăţara nu mai oferă participantului niciun drept acesta fiind obligat să îşi achiziţioneze un bilet nou sau să părăsească perimetrul festivalului. Brăţările rupte, descusute sau lipite nu sunt valide şi nu vor fi schimbate de organizatori.</p><h4><strong>2. CUMPĂRAREA BILETELOR</strong></h4><p>2.1. Cumpărarea online a biletelor se poate face fie de pe electriccastle.com fie prin aplicaţia mobile Electric Castle (disponibilă pe iOS şi Android), folosind sistemul de plăţi online euplatesc.ro. Plata se face doar prin card, iar numărul comenzii va fi emis doar în momentul în care plata a fost confirmată de către euplatesc.ro. Ulterior participantii vor fi informati despre modalitatea prin care pot intra in posesia bratarii/biletului. Numărul comenzii (order number) nu este nominal. În cazul în care cumpărătorul doreşte să cumpere mai multe bilete, acesta o poate face în limita a 6 bilete/cont.</p><p>2.2. Cumpărarea biletelor din Reţeaua Eventim se face fie de pe eventim.ro, fie de la locaţiile Eventim (ex: Germanos, OMV, Carrefour, Orange Shop, Vodafone, Humanitas, Cărtureşti, etc). Eventim are dreptul de a percepe un comision de administrare (8%) care se adaugă peste preţul normal al biletului. Pentru mai multe detalii despre locaţiile Eventim, metode de plată sau livrare, cumpărătorul trebuie să viziteze site-ul eventim.ro</p><p>2.3. Lista locaţiilor partenere Electric Castle poate fi găsită pe <a ui-sref=ElectricCastlePublic.Partners>electriccastle.ro/partners</a>.</p><p>2.4. Biletele pentru rulote se vor cumpăra de la fața locului sau online de pe electriccastle.ro, în limita locurilor disponibile.</p><h4><strong>3. RETURNAREA BILETELOR</strong></h4><p>Biletele cumpărate nu pot fi înlocuite, iar contravaloarea lor nu poate fi restituită.</p><h4><strong>4. SCHIMBAREA PREŢURILOR</strong></h4><p>Organizatorul îşi rezervă dreptul de a modifica preţul biletelor fără o înştiinţare în prealabil.</p><h3>IV. PARTICIPAREA LA EVENIMENT</h3><h4><strong>1. INTRAREA</strong></h4><p>1.1. ntrarea se face doar prin zonele special amenajate pe baza brățării RFID. Toti participantii la eveniment vor avea asupra lor un act de identitate, aflat in perioada de valabilitate.</p><p>1.2. In momentul achizitionarii biletului, respectiv in momentul intrarii in festival, oricare dintre aceste doua evenimente se va produce primul, participantul accepta, fara obiectiuni, prevederile prezentului Regulament.</p><p>1.3. La momentul intrarii in perimetrul festivalului participantul va putea sa ia cunoştiinţă de acest regulament, care este afisat in loc vizibil.</p><p>Participanţii nu pot introduce alcool în perimetrul festivalului. Participanţii nu pot intra cu mâncare sau cu lichide de orice fel în perimetrul festivalului. Excepții se aplică în zona de camping, unde participanții pot avea asupra lor mâncare și apă.</p><p>1.4. Participarea la eveniment se face pe proprie raspundere, inclusiv cu privire la urmatoarele:<br>- persoanele cu boli psihice sau fizice pentru care zonele aglomerate, zgomotele puternice, efecte speciale sonore, vizuale şi audio, reprezinta risc, isi asuma intreaga raspundere pentru prejudiciile ce le-ar putea suferi prin participarea la eveniment. Spectacolul poate include şi puternice efecte de lumină, care ar putea dauna copiiilor sau persoanelor epileptice. Organizatorul informeaza participantii ca este posibil ca in cursul desfasurarii evenimentului sa fie organizate focuri de artificii, sens in care atentioneaza participantii sa respecte cu strictete prevederile prezentului Regulament, sa nu depaseasca delimitarile prezente in cadrul perimetrului festivalului care delimiteaza spatiile in care participantii au acces fata de spatiile in care participantilor le este interzis, sa respecte indicatiile date la fata locului de catre reprezentantii Organizatorului, participantii asumandu-si orice raspundere pentru eventualele riscuri de vatamare sau de producere de prejudicii materiale<br>- Toate zonele de joaca, distractie si sport, instalatiile tip balansoar, hinte, trambuline, piscina, precum si orice alte instalatii si orice alte asemenea zone de pe teritoriul festivalului, vor fi utilizate de participantii care detin conditia fizica si psihica necesare pentru participare, pe propria raspundere.</p><p>1.5. Este interzisă intrarea cu maşina în zona festivalului fără detinerea unui un “car pass” eliberat de organizator. Organizatorul recomandă folosirea autobuzelor sau a taxi-urilor pentru a ajunge la locatia Evenimentului.</p><p>1.6. Organizatorul nu își asumă raspunderea pentru faptele săvârșite de către persoanele sub 18 ani care participă la Festival, in sarcina acestuia neexistând o obligație legala de supraveghere a minorilor.</p><p>1.7. Organizatorul nu este răspunzător pentru prejudiciile de orice natura cauzate persoanelor sub 18 ani de catre terte persoane, incluzand dar nelimitându-se la participanții Festivalului.</p><p>1.8. Organizatorul va pune la dispoziția participanților minori <a href=https://electriccastle.ro/assets/docs/declaratie-minor.pdf target=_blank>un formular de acces</a> care va trebui completat de acestia împreună cu parinții/reprezentanții legali sau convenționali prin care aceștia din urmă sunt de acord cu participarea minorului la Eveniment, cu acceptarea intru-totul a prevederilor prezentului Regulament si prin care își asuma raspunderea pentru minori pe durata desfășurarii Festivalului.</p><p>1.9. După legitimarea, prin intermediul oricarui document care atestă vârsta, aflat in perioada de valabilitate, și prezentarea formularului de acces completat persoanele sub 18 ani vor primi, o brațară special destinată minorilor , care nu le va permite accesul în zonele indoor ori cumpărarea alcoolului sau tutunului.</p><p>1.10. Accesul minorilor sub vârsta de 14 ani în incinta Festivalului se acordă numai dacă aceştia sunt însoţiţi de un părinte/reprezentant legal sau convențional si cu respectarea integrala a prevederilor dn regulament cuprinse la art. IV.1. Intrarea.</p><p>1.11. Accesul minorilor care au împlinit vârsta de 14 ani în incinta Festivalului se acordă numai dacă aceştia prezintă la intrarea în incinta Festivalului <a href=https://electriccastle.ro/assets/docs/declaratie-minor.pdf target=_blank>formularul de acces</a>, in original, completat de un părinte/reprezentant legal sau convențional.</p><p>1.12. Accesul cu animale este interzis.</p><h4><strong>2. Reguli de conduită pe suprafaţa festivalului</strong></h4><p>2.1. Toţi participanţii trebuie să respecte regulile sociale, legile şi prevederile enumerate în acest Regulament. Participanţilor nu le este permis să desfăşoare orice fel de activităţi ar putea să pună în pericol sau să afecteze în orice mod siguranţa sau drepturile celorlalţi participanţi.</p><p>Oranizatorul nu îşi asumă răspunderea pentru eventualele prejudicii (materiale sau fizice) cauzate prin nerespectarea Regulamentului şi isi rezerva dreptul de a solicita despăgubiri persoanelor vinovate de încălcarea acestuia.</p><p>Participanţii sunt obligaţi, ca în incinta festivalului, să respecte, să nu distrugă si in general sa nu efectueze niciun fel de actiune care ar putea fi in masura sa afecteze mediul înconjurător şi domeniul Castelului Banffy, incluzând construcţiile de orice fel şi spaţiile verzi aferente.</p><p>2.2. Pe perioada festivalului, Organizatorul, partenerii Organizatorului sau presa acreditată au dreptul de a înregistra şi fotografia evenimentul. Participanţii iau la cunoştinţă că există posibilitatea de a apărea în astfel de materiale, fără a putea emite orice fel de pretenţii asupra drepturilor cu privire la respectivele materiale sau a demara orice fel de solicitari sau actiuni, inclusive actiuni in justitie, cu privire la acestea. Organizatorul are dreptul de a folosi aceste materiale, de a le publica pe diverse canale (ex Youtube) şi de a le utiliza în campanii publicitare fără a compensa în vreun fel participantul.</p><p>Participanţii au dreptul să filmeze şi să fotografieze zonele în care au acces, insa vor folosi aceste material exclusiv pentru vizionare proprie. Orice distribuire catre public, gratuita sau oneroasa a materialelor filmate este interzisa.</p><p>Există excepții în care managementul artiștilor interzic filmatul și fotografiatul. În aceste situații, Organizatorul va anunța pe pagina de Facebook a evenimentul că filmatul și fotografiatul în timpul acelor concerte este strict interzis.</p><p>2.3. Participanţii iau la cunoştinţă că în incinta festivalului este interzisă orice activitate comercială sau de publicitate fără acordul scris al Organizatorului.</p><p>2.4. Minorilor le este interzisă servirea şi consumul de bauturi alcoolice.</p><p>2.5. Consumul de droguri este ilegal şi strict interzis şi va fi pedepsit conform legilor în vigoare.</p><p>2.6. In zona de camping, dar si in intreaga suprafata a evenimentului este interzisă ultilizarea focului prin orice mijloace (amenajare de focuri de incalzire, de atmosfera sau orice alte metode de foc deschis) şi a materialelor inflamabile. Excepție fac zonele special amenajate de către organizatori sau partenerii acestuia din camping, zone ce vor fi semnalizate ca atare.</p><p>2.7. Înotul în lacul din incinta festivalului este interzis şi extrem de periculos. Aruncarea oricaror obiecte in lacul din incinta festivalului este interzisa.</p><p>2.8. Accesul în interiorul castelului şi a tuturor anexelor cu excepţia celor special amenajate pentru desfăşurarea fesitvalului este interzis şi extrem de periculos.</p><p>2.9. Este interzisă cățărarea sau escaladarea oricărei structuri din festival (layer, boxe, garduri, containere, corturi, etc). Cei ce vor încălca această regula vor fi escortați în afara festivalului.</p><p>2.10. Este interzis accesul în zone semnalizate ca fiind interzise publicului.</p><p>2.11. Este interzisă ridicare de cabluri de curent de pe jos. În cazul în care un participant descoperă o astfel de situație este obligat să avertizeze organizatorii.</p><p>2.12. În caz de urgență, participanții trebuie să urmeze instrucțiunile organizatorilor și indicatoarele către căile de acces.</p><h4><strong>3. Reguli de conduită în afara suprafeţei festivalului</strong></h4><p>În afara incintei festivalului, participanţii sunt obligaţi să respecte legile în vigoare din România şi regulile de conduită socială. Sunt interzise acţiunile care periclitează fizic sau moral alte persoane sau orice fel de bunuri.</p><h4><strong>4. Reguli de conduita în zona de camping</strong></h4><p>4.1 Campingul și facilitățile acestuia vor fi deschise începând cu data de 12 iulie 2017 ora 13:00 și se vor închide în data de 17 iulie 2017 ora 08:00.</p><p>4.2 După ora închiderii organizatorii nu mai asigură securitatea zonei de camping.</p><p>4.3 Campingul va fi deschis 24 de ore pe zi, posesorii de brățări de camping au dreptul să intre și să iasă de câte ori doresc.</p><p>4.4 Este interzisă intrarea în perimetrul campingului și în zona de acces al acestuia cu orice fel de vehicul, excepție făcând cele care deservesc zona de campare si caravanele/rulotele care vor intra doar in zona dedicate acestora.</p><p>4.5 Întreg perimetrul de campare va fi supravegheat de câtre agenți de pază. Organizatorul recomandă participantilor să nu lăse lucruri de valoare în cort.</p><p>4.6 Organizatorii nu își asumă responsabilitatea pentru pierderea sau furtul obiectelor personale. În cazul în care ați pierdut obiecte personale vă rugăm să vă adresați infopoint-ului din festival.</p><p>4.7 Pe teritoriul campingului sunt interzise terasele și instalarea oricarui tip de mobilier de grădină.</p><p>4.8 Participanții trebuie să aiba asupra lor tipul de cort potrivit numărului de persoane care vor dormi în el. Nu sunt acceptate corturi cu antreuri mari. Organizatorii își rezervă dreptul de a nu accepta instalarea în camping a anumitor tipuri de corturi.</p><p>4.9 Este intrezisă reclama de orice fel, fără acordul scris al organizatorului.</p><p>4.10 Toți participanții la camping vor fi supuși unei percheziții corporale și unui control al bagajelor ori de câte ori vor intra în camping.</p><p>4.11 Obiectele confiscate nu vor fi returnate ulterior. Participanții au dreptul să se întoarcă de la control și să își lase obiectele respective în mașină. Excepție fac obiectele ilegale sau interzise prin prezentul Regulament sau deținute ilegal.</p><p>4.12 În cazul în care asupra persoanei se vor găsi obiecte ilegale (ex. droguri, substanțe narcotice) sau deținute ilegal (ex. armă de foc), Organizatorul are dreptul sa anunte autoritatile competente, iar posesorul acestora va fi predat autorităților.</p><p>4.13 Sunt interzise drogurile, substanțele narcotice, substanțele inflamabile, explozibil și armele de orice gen.</p><p>4.14 Pe teritoriul campingului este interzis accesul cu animale.</p><p>4.15 Sunt interzise focurile de tabără, focul deschis, torțele și artificial.</p><p>4.16 Este interzisă intrarea cu generatoare de curent, aragaze și grătare.</p><p>4.17 Este interzisă intrarea cu băuturi alcoolice. Participantul are dreptul să intre cu mâncare și apă.</p><p>4.18 Corturile se vor monta doar în zonele delimitate pentru corturi. Nu se campează pe drumuri, alei, zone de acces, în zonele de toalete și dușuri, în zona de acces și în zonele cu altă destinație decât cea de instalare a corturilor.</p><p>4.19 Este interzisă aruncarea deșeurilor înafara pubelelor și a containerelor de gunoi.</p><p>4.20 4.20 Toate persoanele care intră pe teritoriul campingului trebuie să aibă o brățară care îi permite accesul în zonă.</p><p>4.21 Organizatorul va pune la dispoziția participantului la camping dușuri, toalete și lumină perimetrală.</p><p>4.22 Organizatorul nu se obligă să pună la dispoziția participantului curent electric.</p><p>4.23 Este interzis accesul cu instrumente amplificate.</p><p>4.24 Pe teritoriul campingului și în zona de acces al acestuia este interzisă comercializare bunurilor sau distribuția gratuită a obiectelor cu scop publicitar.</p><p>4.25 Participantul își va monta cortul în zona care îi este alocată la intrarea în camping.</p><p>4.26 Deteriorarea dusurilor, a toaletelor, a sistemelor de iluminat, a gardului perimetral si al altor obiecte aflate in zona de campare se pedepseste iar persoana culpabila de aceste activitati trebuie sa plateasca contravaloarea pagubelor.</p><h4><strong>5. Obiecte pierdute</strong></h4><p>Obiectele gasite in perimetrul festivalului trebuie aduse la zona de Lost & Found (care va fi marcată pe harta festivalului). Proprietarii le pot recupera urmând o procedură a Organizatorului care constă în identificarea persoanei şi a obiectului pierdut. După festival, Organizatorul va păstra obiectele nerecuperate pentru o perioadă de 10 zile de la momentul predării către zona de Lost & Found şi va încerca returnarea lor către proprietari.</p><h4><strong>6. Securitate</strong></h4><p>Pe teritoriul festivalului Organizatorul asigură securitatea printr-un partener calificat şi acreditat să facă acest lucru. În timpul evenimentului, participanţii sunt obligaţi să respecte agenţii de securitate, să colaboreze cu aceştia şi să le respecte instrucţiunile în caz de urgenţă.</p><p>In caz de incidente de violenta sau de punere in pericol a integritatii corporale a altor persoane, personalul care asigura securitatea va putea decide evacuarea persoanelor implicate din incinta in care se desfasoara evenimentul.</p><h4><strong>7. Prim ajutor</strong></h4><p>Pe teritoriul festivalului există zone de prim ajutor, în caz de nevoie, care vor fi evidentiate pe harta festivalului.</p><h4><strong>8. Servicii şi produse</strong></h4><p>În timpul evenimentului, produsele si serviciile sunt disponibile in locuri special amenajate (bar, food court). Participanţii se angajează să folosească ca modalităţi de plată pentru achizitionarea acestora doar metodele si instrumentele de plata acceptate de Organizator şi partenerii acestuia. Ca regula generala, plata serviciilor si produselor in incinta evenimentului se va face cu Brățara RFID (Radio Frequency IDentification)..</p><h4><strong>Definitii</strong></h4><p><strong>Brățara RFID (RadioFrequency IDentification)</strong> – elementul material care constituie singura modalitate de incasare/plata a bunurilor vândute/cumparate în interiorul Locului Evenimentului.</p><p><strong>Card Bancar Contactless MasterCard</strong> – element material, emis de catre o banca sau institutie acreditata care constituie modalitate de incasare/plata a bunurile vandute/cumparate in interiorul Locului Evenimentului, conform Regulamentului evenimentului.</p><p>Toti comerciantii vor avea posibilitatea sa incaseze contravaloarea bunurilor vandute prin Brățară RFID, iar o parte din ei, care au POS-uri bancare speciale contactless vor accepta si plati cu Carduri Bancare Contactless MasterCard.</p><p><strong>Incarcare Brățara RFID</strong> - procesul prin care participantii la Eveniment vor incarca instrumentul de plata „bani” pe instrument de plata „Brățara RFID”, instrument cu ajutorul caruia vor putea achizitiona produse vandute in cadrul Evenimentului.</p><p><strong>Returnare sume Brățara RFID</strong> - procesul invers procesului ”Incarcare Bratara RFID”, respectiv procesul prin care participantii la Eveniment vor descarca sumele ramase necheltuite de pe instrumentul de plata- „Brățară RFID” in instrument de plata „bani”. Procesul de Returnare sume Bratara RFID presupune ca initial sa existe procesul Incarcare Bratara RFID.</p><p><strong>Cititor de Bratara RFID</strong> – device-ul cu ajutorul caruia se gestioneaza incasarea/plata produselor vandute/cumparate.</p><p>Suma incarcata pe Bratara RFID este un <em>multi-purpose voucher (MPV)</em>, asa cum il definestelegislatia Comisiei Europeane.</p><p>ncarcarea Bratarii RFID poate fi realizata on-line prin intermediul interfaței Intellipay sau la fata locului prin plata Cash sau cu cardul bancar la oricare din punctele de incarcare.</p><p>Pe întregul teritoriu al evenimentului se pun la dispoziţie participanţilor locuri de incarcare a Bratarilor RFID in locuri special amenajate si semnalizate. Incarcarcarea acestora da dreptul posesorilor de a obţine produse şi servicii disponibile în perimetrul evenimentului.</p><p>8.3. Sumele neutilizate de pe Brățara RFID pot fi preschimbate în bani imediat dupa incarcarea Brățării RFID prin procesul denumit Returnare sume ramase necheltuite pe Bratara RFID. Procesul de returnare este de 3 tipuri:</p><ul><li>Returnarea sumelor care provin din tranzactii online - returnarea va fi facuta automat prin proces invers de refund la 5 zile dupa terminarea festivalului, direct pe cardul de pe care s-a facut tranzactia online de incarcare. Fiecare tranzactie este asociata unui card. Astfel daca se fac doua tranzactii de incarcare de 100Lei si 100Lei de pe doua carduri diferite iar in festival se cheltuie 80 Lei, se vor returna 20 pentru prima tranzactie, pe primul card si 100 Lei pe al doilea card, respectiv pentru a doua tranzactie online.</li><li>Returnarea sumelor la punctele de incarcare de pe teritoriul festivalului. Suma returnata reprezinta toata suma ramasa in contul Bratarii RFID, astfel chiar daca au fost facute tranzactii on-line de incarcare sumele retrase vor fi pentru toate tranzactiile. (procesul se desfasoara zilnic intre orele 21:00-07:00)</li><li>Returnarea sumelor de bani manual dupa terminarea festivalului prin completarea unui formular online cu date de cont pe website Electric Castle. Formularul trebuie completat în maxim 7 zile de la terminarea festivalului și va fi disponibil pe electriccastle.ro. Transferul banilor depinde apoi de banca emitentă a fiecărui participant. Deasemenea transferul banilor va suporta comisioane interbancare.</li></ul><p>Sumele ramase nesolicitate la sfarsitul perioadei de returnare automata sau recuperare manuala prin completarea formularului (5 zile, respective 7 zile dupa festival) for deveni proprietatea Organizatorului.</p><h3>V. GARANŢII ŞI RESPONSABILITĂŢI</h3><p>1. Organizatorul garantează accesul şi utilizarea serviciilor din cadrul festivalului oricărui participant cu un bilet valid. Datele de desfăşurare ale festivalului pot fi modificate unilateral de Organizator în caz de forţă majoră sau caz fortuit. Datele festivalului nu vor fi schimbate în cazul unor condiţii meteorologice minore (ploi, zile înnorate, etc.).</p><p>2. Organizatorul îşi rezervă dreptul de a modifica orele programului muzical/artistic. Participantul nu are dreptul de a cere despăgubiri în cazul acestor modificări.</p><p>3. Participantul nu are niciun temei legal pentru a se îndrepta împotriva Organizatorului în cazul modificării programului musical/artistic al festivalului.</p><p>4. Organizatorul exclude asumarea responsabilitatea pentru stricăciuni petrecute pe teritoriul Festivalului care nu au fost cauza a unei organizări defectuoase sau neglijări.</p><p>5. După ce participantul a primit brăţara, Organizatorul nu mai este responsabil pentru integritatea acesteia. Participantul nu are dreptul de a cere despăgubiri datorită pierderii sau distrugerii brăţării.</p><p>6. Organizatorul nu este responsabil pentru acţiuni ce se petrec în afara Perimetrului Festivalului.</p><h3>VI. SANCŢIUNI</h3><p>1. Organizatorul are dreptul, cu efect imediat, de a interzice accesul unui participant în incinta festivalului total sau parţial, sau de a invita participantul să parasească incinta festivalului, în cazul încălcării Regulamentului prezent sau a unei legi în vigoare din România.</p><p>2. Participanţii care intră în zona de camping fără a avea acces în camping sunt obligaţi să plătească biletul de acces în camping. În caz contrar Organizatorul poate ridica dreptul participantului de a participa la eveniment, conform pct. VI.1. În acest caz participantul nu are dreptul de a cere despăgubiri de la organizator.</p><p>3. Organizatorul va redirecţiona cazurile de bilete false către organele penale, pentru începerea cercetarii.</p><h3>VII. SEMNE ŞI DREPTURI DE AUTOR</h3><p>1. Organizatorul are drepturi depline asupra marcilor inregistrate sau nu, numelor comerciale înregistrate sau nu, siglei, adreselor de e-mail, nume de domenii sau URL, semnelor utilizate in corespondenta, e-mail, carti de vizita si alte materiale, semnelor, logo-urilor, mărci precum şi asupra materialelor, textelor şi a tuturor informaţiilor de pe electriccastle.ro sau alte canale care folosesc cele menţionate mai sus in legatura cu evenimentul Electric Castle. Cele menţionate mai sus nu pot fi copiate, utilizate sau distribuite în scop comercial, fără acordul Organizatorului scris, expres si prealabil.</p><p>2. Marcile inregistrate sau nu, numele comerciale, inregistrate sau nu, siglele, logo-urile, adresele de e-mail, numele de domenii, URL-urile, toate insemnele de acest fel, semnele şi celelalte informaţii se află sub proprietatea Organizatorului, care detine si drepturile de proprietate intelectuala şi sunt protejate de legile europene în vigoare.</p><h3>VIII. CAZ MAJOR</h3><p>În caz de război, revoltă, atac terrorist, demonstraţii, embargo economic, accident, incendiu, dezastru natural, cutremur, inundaţie, scurtcircuit major, epidemii, rezoluţii oficiale sau alte cazuri ce nu pot prevăzute sau nu pot fi controlate de Organizator sau de partipant, niciuna dintre părţi nu este obligată să respecte obligaţiile din prezentul regulament.</p><hr id=\"en\"><hr><p>The lockers rules can be read <a href=/assets/docs/lockers-rules.pdf target=_blank>here</a>.</p><p>List of things that the Participants can bring with/cannot have on them.</p><div class=\"row text-left\"><div class=col-md-4><p><strong class=text-success>OK</strong> Backpacks (maximum size of a school backpack)<br><strong class=text-success>OK</strong> Hats<br><strong class=text-success>OK</strong> Lighters<br><strong class=text-success>OK</strong> Mobile Phones<br><strong class=text-success>OK</strong> Sunglasses<br><strong class=text-success>OK</strong> Cigarettes<br><strong class=text-success>OK</strong> Raincoats<br><strong class=text-success>OK</strong> Eye Drops for Contact Lenses<br><strong class=text-success>OK</strong> Photo and Video Cameras<br><strong class=text-success>OK</strong> Prescription drugs<br><strong class=text-success>OK</strong> Insulin (with diabetics booklet and personal I.D. document)<br><strong class=text-success>OK</strong> Water in sealed bottle<br><strong class=text-success>OK</strong> Tents (in the camping area)<br><strong class=text-success>OK</strong> Food (only in the campin area)<br><strong class=text-success>OK</strong> Flags and Selfie Sticks</p></div><div class=col-md-3><p><strong class=text-danger>NO</strong> Drugs &amp; Drug Paraphernalia<br><strong class=text-danger>NO</strong> Knives / Weapons etc.<br><strong class=text-danger>NO</strong> Bottles and Cans<br><strong class=text-danger>NO</strong> Alcohol<br><strong class=text-danger>NO</strong> Outside Food &amp; Beverages<br><strong class=text-danger>NO</strong> Cash Refunds<br><strong class=text-danger>NO</strong> Pets<br><strong class=text-danger>NO</strong> Umbrellas<br><strong class=text-danger>NO</strong> Small Foldable Umbrellas</p></div><div class=col-md-5><ul><li>Camping opens on July 12 at 13:00 and the festival area at 18:00</li><li>Participants can enter and leave the festival area as many times they want, as long as they have a valid RFID wristband</li><li>Hours are due to change</li><li>All the participants have to pass through a security check at the entrance. If they refuse, their access will be denied</li></ul></div><div class=clearfix></div></div><hr class=\"dark\"><h3>Summary</h3><p>I. <strong>The Organizer and the Event</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. The Organizer<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. The Event<br><br>II. <strong>Regulations</strong><br><br>III. <strong>Tickets, types of tickets and acquiring them</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Tickets and types of tickets<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Acquiring the tickets<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Tickets refund<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Prices changing<br><br>IV. <strong>Participating at the event</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Entrance<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Rules of behavior on the festival area<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Rules of behavior outside the festival area<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Rules of behavior on the camping area<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Lost objects<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. Security<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7. First Aid<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8. Products and Services<br><br>V. <strong>Liability and responsabilities</strong><br><br>VI. <strong>Signs and copyright</strong><br><br>VII. <strong>Sanctions</strong><br><br>VIII. <strong>Major Case</strong></p><hr class=\"dark\"><p>The present Terms and Conditions (“TC”) apply for Electric Castle, the event organized by SC Festival Tickets Management SRL. The present TC defines the rules of participation of The Participant, who is a natural person, („Visitor”) in the present Events and defines the rights and obligations derived from the legal relation between The Organizer and The Participants.</p><p>The directions of the present TC are governing in any case in regard of the participation at the Events and the legal relations between The Organizer and The Participant.</p><h3>I. PROMOTER AND EVENT</h3><h4><strong>1. PROMOTER</strong></h4><p>SC Festival Ticket Management SRL<br>CUI: RO35190617<br>J12/3329/02.11.2015</p><h4><strong>2. EVENT</strong></h4><p>Electric Castle Festival – 12 -16 July at Banffy Castle, Bontida, Cluj County, Romania.</p><h3>II. GENERAL</h3><p>1. Present TC is an open agreement between the Promoter and the Participant.</p><p>2. The Participant acknowledges that the Promoter reserves the right to modify the present TC. Any and all modifications shall be published on the event’s website, www.electriccastle.com and at the entrance on the festival grounds. Any modification of TC shall be applicable immediately.</p><p>3. By purchasing a ticket The Participants declare they recognize and they shall observe the present TC.</p><p>4. The Promoter assures The Participants that by purchasing a valid ticket (regardless of the method of purchase) they are entitled to participate at the Event under the conditions state in point III.1 below.</p><h3>III. TYPES OF TICKETS, PURCHASE OF TICKETS</h3><h4><strong>1. TYPES OF TICKETS</strong></h4><p>There are 3 types of tickets: tickets purchased from the Eventim Network, tickets purchased online though the Electric Castle system, whether by means of the website or the mobile app (e-ticket), tickets purchased from Electric Castle partner locations. For all the above the following possibilities apply: General Access tickets (with or without camping) and one day tickets.</p><p>1.1. One Day tickets secure the Participant’s access to the event on the specific day between 10.00 - 08.00. At that time, the Day ticket expires and the Participant is under obligation to leave the festival grounds. If the Participant does not carry a wristband that assures them access for the following day and does not purchase a valid ticket, the Promoter reserves the right to escort them outside the festival grounds.</p><p>1.2. The General Access ticket (including camping): with this type of tickets the Participant can take part in the event from Day 0 (12th of July), starting with 13.00 and have the right to remain for the rest of the event. The Promoter offers the Participant a camping spot and full access to all the shower designated areas. The Participant that arrives by caravan/trailer should they require</p><p>1.3. The General Access ticket(without camping): the Participant can take part in the event from Day 1 (12th of July) starting with 13.00 and have the right to remain for the rest of the event. The Participant does not have the right to sleep on the festival grounds, cannot stay in the zones reserved for the participants that have a 4 day ticket with camping and cannot use any of the camping facilities.</p><p>1.4. Minors under the age of 12 are granted free access throughout the duration of the festival, provided that they are accompanied by an adult.</p><p>1.5. The Organizer guarantees ONLY the validity of the tickets sold through Electric Castle partners and Eventim Partners. A full list can be accessed at electriccastle.ro/tickets.</p><p>1.6. Persons with disabilities who previously send a copy of their disability certificate have General Access for free and a 50% discount for their companion.</p><p>1.6. Persons with disabilities who previously send a copy of their disability certificate have General Access for free and a 50% discount for their companion.</p><p><strong>IMPORTANT!</strong> It is strictly prohibited to sell or purchase overpriced tickets/invites. The Promoter reserves the right to prohibit access on the festival grounds and the camping areas to people found to be caring out such activities and to confiscate the invitations and tickets in their possession.</p><p>1.7. Ticket and wristband: At the moment of validation of the ticket (regardless of its type), The Participant receives a wristband bearing the same rights and obligations as the ticket. Only an intact wristband worn around the wrist entitles the entrance and stay on the Event grounds. The Promoter reserves the right (in its own name and through its partners) to constantly check the Participant’s wristband from the entry on the event grounds as well as all throughout their stay. The loss or damage of the wristband is an exclusive responsibility of The Participant.</p><p>In case of damage or loss, the wristband seizes to provide the Participant with any right and they shall be obliged either to purchase a new ticket or to leave the festival grounds. Broken wristbands, unstitched or bonded will not be valid and will not be changed by the Promoter.</p><h4><strong>2. PURCHASING TICKETS</strong></h4><p>2.1. Purchasing tickets online can be done on either electriccastle.com or on Electric Castle mobile app (available on iOS and Android) using the online payment system EuPlatesc.ro. Payment will be by credit/debit card only and the ticket will be issued only when the payment was confirmed by EuPlatesc.ro. The order number is not nominative. If the buyer wants to buy more tickets, he can add up to 6 tickets/account.</p><p>2.2. Purchasing tickets from the Eventim Network can be done either on eventim.ro or from the Eventim Locations (e.g. Germanos, OMW, Carrefour, Orange Shop, Vodafone, Humanitas, Cărtureşti, etc). Eventim has the right to charge an administration fee (8%) over the normal price of the ticket. For more information about Eventim’s locations, methods of payment or delivery, the buyer should visit the site eventim.ro.</p><p>2.3. The list of Electric Castle partner locations can be found on electriccastle.ro/en/tickets.</p><p>2.4. Caravans tickets will be available on site, based on a previous registration on http://electriccastle.ro/caravans.</p><h4><strong>3. TICKET RETURN</strong></h4><p>3.1. Tickets purchased cannot be replaced, and their value cannot be refunded.</p><h4><strong>4. CHANGE IN PRICES</strong></h4><p>4.1. The Promoter reserves the right to change fares without prior notice.</p><h3>IV. PARTICIPATION IN THE EVENT</h3><h4><strong>1. ENTRY</strong></h4><p>1.1. Entry is granted only though specially designated areas, based on the RFID wristband. All event participants will carry identification.</p><p>1.2. Upon entry on the festival grounds, the participant shall take notice of the present Regulation, displayed in a visible place.</p><p>Access with the following objects inside the Event grounds is prohibited: drugs, pyrotechnics devices, glass, striking or cutting devices, umbrellas, explosives, toxic and flammable materials or any other objects which can cause harm to others. According to the laws in force, The Participant is prohibited to bring the following objects inside the Event grounds: knives, gas sprays, metal chains longer or any other objects which are unsafe to public security.</p><p>The Participant is not authorized to bring any alcoholic beverages on Event grounds. Liquid of any kind cannot be introduces on the event grounds. The Participant may bring food or water within the camping area.</p><p>The Participant shall take part in the event by their own accord and shall take full responsibility for themselves, including the following:</p><ul><li>Participants who suffer from known mental or physical illness for which crowded areas, loud noises, special audio and visual effects are considered a risk, shall assume all liability for any damage that they might suffer there as. The show can include powerful lighting effects that could harm children or epileptic people. The Promoter informs the Participant that during the event fireworks shows might be organized and The Promoter shall assume no liability for the subsequent injury or damage to property.</li><li>For the play, entertainment and sports areas, the facilities in the skateboarding ramps “BMX Castle Line”, rocking installations, trampolines, swimming pool and other such areas which carry a high risk of injury, located on the festival grounds, the Participant shall ensure that they have the physical and mental condition to participate in such activities.</li></ul><p>1.3. It is prohibited to enter the Event grounds by car without a valid car pass issued by the Promoter. The Promoter advises the Participant to use the public transport or taxi services to get to the Event grounds.</p><p>1.4. Access of minors under 14 years on the festival grounds shall be permitted only escorted by an adult. Minors under 18 shall receive a special wristband that will not allow them access to the indoor stages (The Mill and The Stables) or the consumption alcoholic beverages or buy cigarettes.</p><p>1.5. Pets are not allowed in the area of the Event.</p><h4><strong>Rules of conduct inside the event grounds</strong></h4><p>2.1. The behavior of The Participant shall observe the rules of conduct, the rule of law rules and the present TC. The Participant should refrain from actions which can threaten or offend in any way the security and rights of others.</p><p>The promoter is in no way liable for any damage (material or physical) caused by failure to observe the TC and may request compensation from the person guilty of violating it.</p><p>Inside the area of the Events The Participants shall take care and not destroy the environment and the Banffy Castle domain, including any type of buildings and surrounding green areas.</p><p>2.2. During the festival, the Promoter, the Promoter’s partners or accredited press have the right to record and photograph the event. The Participant acknowledges that it is possible to appear in such material without the rights to make claims on those materials. The Promoter has the right to use said materials, to publish them on various channels (e.g. YouTube) and use them in advertising campaigns without compensating for the participant in any way.</p><p>Participants have the right to film and photograph the areas where they have access, however they shall use said material only for their own viewing. Any distribution of the said materials to the public, whether it be for free or for an onerous is prohibited.</p><p>There are artists who do not allow recording their show. Given this situation, the Organizer will announce on the Event’s Facebook Page that taking photos and recording videos during that show are completely forbidden.</p><p>2.3. The Participant acknowledges that inside the area of the Event it is prohibited to practice in any commercial or advertisement activity without the prior written consent of the Promoter.</p><p>2.4. It is prohibited to serve alcohol to Participants under the age of 18 (eighteen) inside the area of the Event. Drug use is illegal and strictly forbidden and will be punished according to the laws in force.</p><p>2.5. Inside the campsite and in the whole area of the event the use of fire by all means (spatial heating fires, the atmosphere or any other method open fire) and flammable materials is strictly forbidden.</p><p>2.6. Swimming in the lake located on the festival grounds is prohibited and extremely dangerous.</p><p>2.7. Access inside the castle and all annexes except those specially arranged for the festival is prohibited and extremely dangerous.</p><h4><strong>Rules of conduct outside the area of the Events</strong></h4><p>Outside the area of the event, The Participant shall observe the Romanian law and social conduct rules. It is forbidden to physical or moral endangering others.</p><h4><strong>4. Rules of conduct inside the camping area</strong></h4><p>4.1 The camping area and it’s facilities will be open from the 12th of July 2017 - 12:00, until the 17th of July 2017 - 08:00.</p><p>4.2 After the 17th of July - 08:00, the Promoter will no longer provide security within the camping area.</p><p>4.3 The camping area will be open 24 hours a day. The participants have the right to enter and leave the camping area as many times as they want.</p><p>4.4 It is prohibited to enter the camping area or its access point with any vehicle, with the exception of staff supply vehicles that work in the camping area and caravans that will only go in their dedicated area.</p><p>4.5 The entire perimeter of the camp will be supervised by security guards. However the Promoter recommends not to leave any valuables in your tent.</p><p>4.6 The Promoter does not assume any liability for lost or stolen personal items. If you lost something please contact the festival’s Info-point.</p><p>4.7 The following are prohibited in the camping area: easy-up tents, gazebo type tents and any type of garden furniture.</p><p>4.8 Participants are asked to come up with the type of tent according to the number of people who sleep in it. Large under room type tents are not accepted. The Promoter reserves the right not to accept certain types of tents in the camping area.</p><p>4.9 Advertising of any kind is prohibited without the written consent of the Promoter.</p><p>4.10 Body searches and baggage screening will be undergoing on all the participants entering the camping area.</p><p>4.11 Confiscated items will not be returned to the owner. The participants have the right to go back and leave the items in their car, except for the illegal ones.</p><p>4.13 Drugs, narcotic substances, flammable substances, explosives and weapons of any kind are prohibited inside the camping area.</p><p>4.14 Animals are forbidden in the camping area.</p><p>4.15 Campfires, open fires and torches are forbidden in the camping area.</p><p>4.16 Electricity generators, stoves and barbecues are prohibited in the camping area.</p><p>4.17 Alcoholic beverages are prohibited in the camping area. Participants are allowed to enter with food (*please see list of accepted food) and water.</p><p>4.18 Tents will only be installed in the designated areas. It is prohibited to install tents in any other area inside the camping area (i.e. road, toilets and showers area, access point).Participants are asked to follow the rules properly, respecting the other participants in the camping area.</p><p>4.19 Littering is prohibited in the camping area.</p><p>4.20 Every participant who enters the camping area must have wristband that includes access to that area.</p><p>4.21 The Promoter will provide the participant with showers, toilets and perimeter lighting in the camping area.</p><p>4.22 The Promoter will not provide electricity in the camping area to the participants.</p><p>4.23 Amplified instruments or battery boom boxes are prohibited in the camping area.</p><p>4.24 Free distribution of good for advertising purposes or sale of goods is prohibited in the camping area or camping area access point.</p><p>4.25 The participant will install his tent in the area allocated to him prior to the entry in the camping area.</p><p>4.26 Any damage to the showers, toilets, lighting system, perimeter fence and other objects in the camping area will be punished and the accused will have to pay their value.</p><p>Outside the area of the event, the Participant shall follow the Romanian law and social conduct rules. Morally or physically endangering the other is prohibited.</p><h4><strong>5. Lost objects</strong></h4><p>Lost property shall be brought to the Lost & Found area (which will be marked accordingly on the festival map). Owners can recover lost property following a procedure instated by the Promoter which consists of identifying the individual and the lost object. After the festival, the Promoter will keep the recovered items for a period of 10 days from the submission to the Lost & Found area and try to return them to their owners.</p><h4><strong>6. Security</strong></h4><p>Across the festival grounds the Promoter provides security through a qualified partner accredited accordingly. During the event, participants undertake to cooperate, within the framework of the legal regulations, with these partners, and to follow their instructions in case of emergency.</p><p>In case of a violent incident or the endangerment of the bodily integrity of others, security staff may decide to evacuate the people involved in the incident from the event’s premises.</p><h4><strong>7. First aid and medical care</strong></h4><p>First aid areas are provided across the festival grounds, if necessary.</p><h4><strong>8. Services and products</strong></h4><p>8.1. During the event, products and services are available only in special places (i.e. bar, food court). Participants accept to use as payment for their purchases only payment methods accepted by the Promoter and its partners. As a general rule, payment for services and products inside the event will only be done with the <strong>RFID Wristband (Radio Frequency IDentification)</strong>.</p><h4><strong>Definitions:</strong></h4><p><strong>RFID Wristband (RadioFrequency IDentification)</strong> – material element that constitutes a way for collection/payment of goods sold/purchased within the event venue.</p><p>All retailers will be able to charge the sold goods with RFID Wristband.</p><p><strong>Contactless MasterCard</strong> – material element, emited by a bank or a certified institution, which constitutes a way of collection/payement of goods sold/purchased within the event venue, in conformity with the present TC.</p><p>All the selling points in the event will accept payment through the RFID wristband and some of them, which have special contactless POS will also accept payment through Mastercard Contactless.</p><p><strong>RFID Wristband Top-up</strong> - the process by which participants will change the methods of payment from \"cash\" to the payment instrument \"RFID Wristband” with which they can purchase products sold at the event .</p><p><strong>RFID Wristband Money Refund</strong> - the inverse process of \"RFID Wristband Top-up\" and the process by which participants will exchange payment instrument \"RFID Wristband\" in payment method “cash”. The refunding process of the amount of money implies the initial process of RFID Wristband Top-Up.</p><p><strong>The RFID Reade</strong>r – the device used for the collection/payment of the goods.</p><p>The amount of money topped up on the RFID Wristband is a multipurpose card voucher (MPV), according to the European Commission Legislation.</p><p>The RFID Wristband Top-Up can be made online on Intellipay Platform or right on spot paying either Cash or Card at any of the Top-Up points.</p><p>8.2. Across all the event venue RFID Top-Up points are made available in special places that are properly signaled. The Top-Up of the RFID Wristband entitles its holder to obtain products and services available in the event perimeter.</p><p>8.3. Unused funds from the RFID Wristband can be exchanged for cash immediately after top-up through the process called RFID Wristband Money Refund. The process is of three different kinds:</p><ul><li>Refunding the amount of money from online transactions - will be made automatically through the RFID Wristband Money Refund five days after the event, directly on the bank account from which the payment was initially made. Every transaction is associated with a card. Therefore, if for example two top-up transactions of 100 RON and 100 RON are made from two different cards an during the event, only 80 RON are being spent, 20 RON for the first transaction will be refunded and on the second card, 100 RON for the online transaction.</li><li>Refunding the amount of money at the top-up points from the festival ground – the refunded amount of money represents the money left on the RFID Wristband. Therefore, even if there were made online transactions, the amount of money will be fully refunded (daily between 21:00-07:00).</li><li>Refunding the amount of money after the event by filling out an online form with the bank account on the Electric Castle platform.</li></ul><p>The amount of money left on the RFID Wristband that has not been refunded through the online form (10 days after the event) will become Promoter’s property.</p><h3>V. WARRANTY AND RESPONSIBILITY</h3><p>1. The Promoter guarantees that the Participant holding a valid Ticket can enter the area of the Event and can use the provided services. The dates of the Events can be unilaterally changed by the Promoter in the event of force majeure or unforeseeable circumstances. Festival dates will not be changed in case of minor weather conditions (rain, cloudy days, etc.).</p><p>2. The Promoter reserves the right to change the program. Participant will not be entitled to claim compensation for these changes.</p><p>3. The Participant has no legal basis to act against Organizatorul in case of change in the musical program of the festival.</p><p>4. The Promoter shall not be liable for damage that occur on the festival grounds that were not due to a defective organization or neglect.</p><p>5. Once the Participant has received the wristband the Promoter is no longer liable for its integrity. The Participant shall not be entitled to claim compensation for the loss or damage of the wristband.</p><p>6. The Promoter shall not be held liable for actions occurring outside the festival grounds.</p><h3>VI. SANCTIONS</h3><p>1. The Promoter is entitled, with immediate effect, to prohibit the access of a participant in the area of the festival, in whole or in part, or to invite a participant to leave the festival grounds, for infringement of a law or regulation currently in force in Romania or the present TC.</p><p>2. Participants that enter the campsite without a proper wristband allowing them said access are required to pay for camping ticket. Otherwise, the Promoter can revoke the participant’s right to attend the event, according to section VI.1. In this case the participant is not entitled to claim damages from the Promoter.</p><p>3. The Promoter shall denounce the use of counterfeited tickets to the relevant criminal authorities for investigation.</p><h3>VII. TRADEMARKS AND COPYRIGHT</h3><p>1. The Organizer has full rights to the names, trademarks, logos, email addresses, domain names or URL, signs used in correspondence, e-mail, business cards and other materials, signs, logos, and marks on materials, texts and all other information on electriccastle.ro or other channels that use the above mentioned in correspondence to Electric Castle. The above may not be copied, used or distributed for commercial purposes without the specific consent of the Organizer.</p><p>2. Logos, signs and all other information are the intellectual property of Organizer and are protected by European legislation.</p><h3>VIII. FORCE MAJEURE</h3><p>In case of war, riot, terrorist attack, demonstrations, economic embargo, accident, fire, natural disaster, earthquake, flood, electrical blackout, epidemics, official resolutions or any other cases that cannot foreseen or controlled by Organizer, neither party is bound by the obligations of the present TC.</p></div></div></div></div>"
  );


  $templateCache.put('assets/views/info/terms.tpl.html',
    "<div class=\"page-container page-container__bg\"><div class=\"container text-justify terms\"><div class=row><div class=\"col-md-10 col-md-offset-1 padding-bottom-40\"><h1>Terms &amp; Conditions</h1><h3>Overview</h3><p>Welcome to the website or mobile application of Electric Castle Festival. This website or mobile application is owned and operated by SC Festival Tickets Management SRL, CUI: RO35190617, J12/3329/02.11.2015 (the 'Company', 'us', 'our', or 'we').</p><p>These Terms and Conditions set forth the terms and conditions under which you are authorized to use one of our websites, including any website where these Terms and Conditions are posted, and any sub-domains and mobile versions (collectively, the 'Site'), use one of our mobile applications (the 'Mobile App'), or interact with our other on-site or web-enabled technologies, such as on premise WiFi. We may refer to the Mobile App, Site, and these related web-enabled technologies collectively as our 'Digital Services'.</p><p><strong>Through your use of our Digital Services, you consent to the practices described in these Terms and Conditions.</strong></p><p>To the extent additional rules or guidelines affect your use of our Digital Services, those rules and guidelines (including our <a ui-sref=ElectricCastlePublic.PrivacyPolicy target=_blank>Privacy Policy</a>) are hereby incorporated by reference into these Terms and Conditions. By using any of our Digital Services, you agree to these Terms and Conditions. If you do not agree to these Terms and Conditions, you should immediately stop using our Digital Services.</p><p>As a condition of your right to use our Digital Services, you represent that you are of legal age to enter into a binding contract and that you are not a person barred from accessing the Digital Services under the laws of Romania or any other country.</p><h3>Description of service</h3><p>Our Digital Services primarily provide information about our festival and other content we think would be of interest to you, sell tickets and merchandise. To the extent new services, content or features are added to our Digital Services in the future, your use thereof is subject to these Terms and Conditions.</p><h3>Modifications and interruption to the Digital Services</h3><p>We reserve the right to modify or discontinue all or any portion of our Digital Services with or without notice to you. We will not be liable if we choose to exercise this right. You acknowledge and accept that we do not guarantee continuous, uninterrupted or secure access to our Digital Services, or that operation of our Digital Services will be uninterrupted or error free. You understand that usage of our Digital Services may be interfered with or adversely affected by numerous factors or circumstances outside of our control.</p><h3>Tickets and merchandise</h3><h4>1. General</h4><p>All orders placed by our customers via electriccastle.ro, as well as our deliveries and services are exclusively subject to the general terms and conditions listed forwards, in the version that is valid at the time of the order. We do not accept conflicting terms and conditions of the customer unless we have agreed to their validity in writing.</p><h4>2. Important notes</h4><p>The merchandise offered under electriccastle.ro is presented on the website in the format of digital photographs. Minor divergences of the photographs from reality may occur, but they won't be considered a defect of the ordered merchandise.</p><p>The tickets sold on the website are in digital format (downloadable products or 'print at home') and they will not be shipped.</p><h4>2. Conclusion of contract</h4><p>The contract between you and electriccastle.ro is valid once you order the merchandise and/or tickets. By sending the order form provided on our website to us you make a binding offer to enter into the contract. You finalize the order by entering all information during the order process and sending the order form to us by clicking on the 'checkout' button.</p><p>We are entitled to reject orders without indicating any reasons, in particular if there is well-founded suspicion that the merchandise purchased via the internet is to be sold to third parties commercially.</p><h4>3. Payment method</h4><p>We don't process directly your payment. All payments are made trough our partner, euplatesc.ro. They accept all VISA, VISA Electron, MasterCard and Maestro credit/debit cards.</p><h4>4. Delivery and shipping</h4><p>We ship your order with <a href=\"http://www.fancourier.ro/\" target=_blank>Fan Courier</a>, for now only in Romania. You will be able to track your order <a href=\"http://www.fancourier.ro/tools/awb-tracking/\">here</a> using the AWB number you receive by email once your package is sent. Your order will be shipped form Cluj-Napoca, where the Electric Castle office is located and it should reach you in 2 to 5 working days.</p><h4>5. Return policy</h4><p>We accept returns and exchanges within 30 days of receipt. Returns received outside the above time frame are not to be accepted.</p><p>We will only accept returns on non-faulty items that are in their original condition, have not been worn, altered or washed, with all tags attached and in its original packaging. Upon receipt of any order without tags please notify us immediately if you wish to return the item. We strongly advise all customers to check garments thoroughly upon delivery before removing any attached tags and before disposing of any original packaging.</p><p>Please note that we can only exchange an item for the same item in a different size. Exchanged items can only be dispatched after the returned goods have been received and undergone a quality control check. Please note that the customer is allowed to exchange an item for a different size only once. The customer is responsible for additional shipping costs.</p><p>The merchandise must be returned in one mailing. We reserve the right to refuse multiple returns at different times from one order.</p><h3>Privacy policy</h3><p>We commit not to transmit the user's personal data to third parties and to use them only for establishing contact with our customers and informing them about certain aspects related to the functions of our Digital Services and our offers.</p><p>We will retain the personal data and will use them with the purpose of informing the users of their account on our Digital Services, the status and evolution of their orders and also for evaluating the goods and services offered.</p><p>For more information please read the full <a ui-sref=ElectricCastlePublic.PrivacyPolicy target=_blank>Privacy Policy</a>.</p><h3>Restricted activities</h3><p>You may not engage in any of the following with regard to the Digital Services (including without limitation posting or transmitting content through the Digital Services), and you agree not to use the Digital Services to:</p><ul><li>violate or encourage the violation of any local, state, national, or international law or regulation;</li><li>collect or store personal data about other users of our Digital Services or solicit personal information from any individual;</li><li>impersonate any person or entity or otherwise misrepresent your affiliation with a person or entity;</li><li>infringe any patent, trademark, trade secret, copyright, right of publicity or privacy, or other right of any party, or distribute any content you do not have a right to make available under any law or under contractual or fiduciary relationships;</li><li>disrupt or interfere with the security or use of the Digital Services or any websites or content linked to them;</li><li>attempt to use another user’s account, impersonate another person or entity, misrepresent your affiliation with a person or entity, including (without limitation) Company, our any third party, or create or use a false identity;</li><li>use any meta tags or any other “hidden text” utilizing the Company’s (or any third party partner or sponsor’s) name, trademarks, or product names;</li><li>attempt to reverse engineer or otherwise derive or obtain the code in any form for any software used in the Digital Services;</li><li>engage in any activity that interferes with any third party’s ability to use or enjoy the Digital Services; or</li><li>assist any third party in engaging in any activity prohibited by these Terms and Conditions.</li></ul><p>Further, without our written consent, you may not:</p><ul><li>reproduce, duplicate, copy, sell, resell, or exploit for any commercial purpose any Company content or any use of or access to the Digital Services;</li><li>use any high volume, automated, or electronic means (including, without limitation, robots, spiders, scripts, or other automated devices) to access the Digital Services or monitor or copy our web pages or the content contained thereon;</li><li>deep link to the Digital Services for any purpose; or frame the Digital Services, place pop-up windows over any content, or otherwise affect the display of the Digital Services.</li></ul><h3>Copyright and trademark information</h3><p>All content, copyrights and other intellectual property rights in the content available on our Digital Services, including without limitation design, text, graphics, interfaces, and the selection and arrangements thereof, are owned by Company with all rights reserved. In some cases, such content may be licensed to Company by third parties. This content is protected by the intellectual property rights of Company or those owners. All trademarks displayed on our Digital Services are the trademarks of their respective owners, and constitute neither an endorsement nor a recommendation of such parties. In addition, such use of trademarks or links to the websites of third parties is not intended to imply, directly or indirectly, that those third parties endorse or have any affiliation with Company.</p><h3>Permitted use of mobile application</h3><p>Our Mobile App is protected by copyright and may not be sold, redistributed, copied, made available to the public, or part of a derivative work created by you without the express written consent of Company. You may not attempt to decompile, reverse engineer, disassemble or otherwise modify our Mobile App, or in any way compromise the security of data stored or transmitted by our Mobile App.</p><h3>Permitted use of the content</h3><p>Any use of content on the Digital Services, including without limitation reproduction for purposes other than those noted herein, modification, distribution, replication, any form of data extraction or data mining, or other commercial exploitation of any kind, without prior written permission of an authorized officer of Company, is strictly prohibited. With the exception of search engines, you agree that you will not use any robot, spider, or other automatic device, or manual process to monitor or copy our web pages or the content contained therein without prior written permission of an authorized officer of Company. You may use the content solely for your personal, non-commercial use, except as described herein. You may download or print a single copy of any portion of the content solely for your personal, non-commercial use, provided you do not remove any trademark, copyright or other notice from such content. You may not make any use of content owned by any third parties which is available on the Digital Services, without the express consent of those third parties.</p><h3>Mobile devices and third-party restrictions</h3><p>If you access our Digital Services on mobile devices or in our Mobile App, you understand that your mobile carrier’s standard charges will apply. When you download our Mobile App, you will also be subject to any terms imposed by the “store” through which you obtain the Mobile App, if any (e.g. the Apple App Store or Google Play Store, or others).</p><p>Any Mobile app installed from the Apple App Store, Google Play Store, or other app “store” must be installed on a device you control or own, and must be used in accordance with any applicable terms from the Apple App Store or other store.</p><h3>Content complaints</h3><p>If you believe that any content on our Digital Services violates these Terms and Conditions or is otherwise inappropriate, please report the content by sending an email to <strong>contact@electriccastle.ro</strong>.</p><h3>Wristband terms of use</h3><p>These wristband terms of use apply to the Electric Castle Festival (the “Event”).</p><p>All Event wristbands and vehicle passes (collectively, “Wristbands”) are subject to the following terms of use (hereinafter the “Terms”). By accepting possession or by using any Wristbands, User is legally bound to comply with these Terms, and the original authorized purchaser and any Authorized Recipient agrees to inform all of their respective guests of these Terms with due diligence. The Event producer reserves the right, at its discretion, to change, modify, add, or remove portions of these Terms at any time. Please check back periodically for changes.</p><h4>1. Unauthorized transfers prohibited</h4><p>All publicly sold Wristbands are for use by the original authorized purchaser and their invited guest(s) only (each an “Authorized Purchaser”), and are not transferable by the Authorized Purchaser, any of their invited guests, or any other person. Likewise, all Wristbands provided to performing artists, production personnel, vendors, sponsors, and other guests of the Event producer (each an “Authorized Recipient”), are for use by the Authorized Recipient and his or her invited guest(s) only, and are not transferable by the Authorized Recipient, his or her invited guest(s), or any other person. Authorized Purchasers and Authorized Recipients are referred to individually as a “User”. Wristbands obtained from unauthorized sources may be counterfeit and are worthless.</p><p>Except as provided herein, Wristbands may not be sold, transferred, or used for any form of commercial or trade purposes, including but not limited to promotions, contests, commercial or advertising purposes, sweepstakes, charitable giveaways, or other activities absent the Event producer’s prior written consent. Any wristbands used in violation of this provision shall be deemed revoked and void, and their bearers deemed trespassers at the Event.</p><p>Resale or attempted resale of Wristbands is grounds for termination of the license and cancellation of the Wristband.</p><h4>2. Authorization of User’s image and likeness</h4><p>User grants the Event producer (and its designees) the right to include User’s image, likeness, actions, and statements in any live or recorded audio, video, film, webcast, stream, or other transmission, exhibition, simulcast, or reproduction made of, or at, the Event in any medium or context for any purpose, including commercial or promotional purposes, without further authorization or otherwise.</p><h4>3. Medical Consent</h4><p>User consents to have medical treatment that may be deemed advisable in the event of an injury, accident, or illness during the Event and affirmatively releases the Event producer and all persons participating in such medical treatment from all responsibility for any such actions.</p><h4>4. Consent to search/refusal/ejection</h4><p>User and User’s belonging may be searched upon entry into the Event, and User consents to such searches and waives any related claims that might arise against the Event producer and its agent. If User elects not to consent to such searches, User may be denied entry into the Event.</p><h4>5. Other rights / restrictions</h4><p>No sponsorship, on site marketing, sampling, vending, coupon/product distribution, or other promotional/advertising activity may be conducted at the Event (inclusive of parking lots), absent the Event producer’s prior written approval in each instance.</p><p>The Event producer reserves all rights not expressly granted to User. The present Terms and Conditions and those below, also included herein by reference, shall prevail in the event of any conflict:<br><a ui-sref=ElectricCastlePublic.RulesAndRegulations target=_blank>Rules and Regulations</a><br><a ui-sref=ElectricCastlePublic.PrivacyPolicy target=_blank>Privacy Policy</a></p><h3>Changes to these terms</h3><p>We reserve the right, at any time, to modify, alter, or update these Terms and Conditions without prior notice. You are encouraged to check this page regularly for changes to the Terms and Conditions. Modifications will become effective immediately upon being posted to our Digital Services, without further notice to you. Your continued use of any of our Digital Services after such modifications are posted constitutes your acknowledgement and acceptance of such modifications, and you may not amend these Terms and Conditions.</p></div></div></div></div>"
  );


  $templateCache.put('assets/views/info/travel.tpl.html',
    "<div class=container><div class=\"col-lg-8 col-md-12 col-lg-offset-2\"><h1 class=\"text-center headline\">Extend your Electric Castle experience and discover the truly amazing country that hosts it - Romania.</h1></div></div><div travel-grid><section class=discover id=discover-cluj><div class=heading><h2>Discover Cluj-Napoca</h2></div><div class=\"grid grid-first\"><div class=grid__sizer></div><div class=grid__item><img src=/assets/img/travel/museum-square.jpg class=\"main\"><h5>Museum Square</h5><a href=\"https://www.google.ro/maps/search/museum+square+cluj/@46.7704451,23.5870963,18z/data=!3m1!4b1\" class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>See on map</h4></a></div><div class=grid__item><p class=margin-top-50>One of Romania’s most visited cities, Cluj-Napoca is the heart of Transylvania and the region’s unofficial capital.</p></div><div class=\"grid__item padding-top-120\"><p>A student city filled with art, culture and charm, Cluj-Napoca offers a cool urban atmosphere that will guarantee you an amazing time here.</p></div><div class=grid__item><img src=/assets/img/travel/churches.jpg class=\"main\"><h5>The Churches</h5><a href=http://www.gpsmycity.com/tours/churches-walking-tour-in-cluj-napoca-4560.html class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>Read more</h4></a></div><div class=grid__item><img src=/assets/img/travel/citadel.jpg class=\"main\"><h5>The Citadel</h5><a href=\"https://www.google.ro/maps/search/cetatuie+cluj/@46.7746085,23.5787595,17z/data=!3m1!4b1\" class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>See on map</h4></a></div><div class=grid__item><img src=/assets/img/travel/coffee-shops.jpg class=\"main\"><h5>The Coffee Shops</h5><a href=\"http://eatstayloveromania.com/top-3-favourite-coffee-places-cluj-napoca/\" class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>Read more</h4></a></div><div class=grid__item><p class=margin-bottom-120>Arrive a few days before Electric Castle or stay for another week afterwards to soak up the bohemian feeling that will make you want to come back for more.</p></div><div class=grid__item><a href=\"http://69-degrees.co.uk/travel/discover-cluj-transylvaniu/\" class=more target=_blank><h4>More about the city</h4><img src=/assets/img/travel/more-icon.png class=\"center-block\"></a></div></div></section><section class=food id=grab-tasty-bites><div class=heading><h2>Grab tasty bites</h2></div><div class=\"grid grid-forth\"><div class=grid__sizer></div><div class=grid__item><img src=/assets/img/travel/Restaurant-VIA.jpg class=\"main\"><h5>Via</h5><a href=https://www.facebook.com/pages/Via/704262789645980 class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>Read More</h4></a></div><div class=grid__item><p class=margin-top-50>The memory of an incredible meal will stay with you forever.</p></div><div class=\"grid__item padding-top-120\"><p>Here are some places that will definitely bring butterflies in your stomach. And some delicious treats as well.</p></div><div class=grid__item><img src=/assets/img/travel/rosticeria.jpg class=\"main\"><h5>Rosticceria D'autore</h5><a href=\"https://www.facebook.com/Rosticceria-Dautore-1139114079432911/\" class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>Read more</h4></a></div><div class=grid__item><img src=/assets/img/travel/Restaurant-Camino.jpg class=\"main\"><h5>Camino</h5><a href=\"https://www.facebook.com/CaminoCluj/\" class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>Read more</h4></a></div><div class=grid__item><img src=/assets/img/travel/cabinet.jpg class=\"main\"><h5>Cabinet de Vin&amp;Cocotte</h5><a href=https://www.facebook.com/pg/Cabinet.de.Vin.Cocotte class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>Read more</h4></a></div><div class=grid__item><img src=/assets/img/travel/Restaurant-Samsara.jpg class=\"main\"><h5>Samsara</h5><a href=\"https://www.facebook.com/samsarafood/?fref=ts\" class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>Read more</h4></a></div><div class=grid__item><img src=/assets/img/travel/Restaurant%20-%20Baracca.jpg class=\"main\"><h5>Baracca</h5><a href=\"https://www.facebook.com/Baracca-429547250430/?fref=ts\" class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>Read more</h4></a></div><div class=grid__item><a href=\"https://theculturetrip.com/europe/romania/articles/insider-s-guide-to-eating-out-in-cluj-napoca-10-great-local-restaurants/\" class=more target=_blank><h4>More restaurants</h4><img src=/assets/img/travel/more-icon.png class=\"center-block\"></a></div></div></section><section class=locals id=mingle-with-locals><div class=heading><h2>Mingle with the locals</h2></div><div class=\"grid grid-second\"><div class=grid__sizer></div><div class=grid__item><img src=/assets/img/travel/Mingle%20-%20Atelier%20Cafe.jpg class=\"main\"><h5>Atelier Café</h5><a href=\"https://www.facebook.com/ateliercafecluj/?fref=ts\" class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>Read more</h4></a></div><div class=grid__item><p class=margin-top-50>There’s nothing like the “local experience”. So go ahead and visit these places to make new friends that will take you beyond the “tourist” approach of discovering the city.</p></div><div class=grid__item><img src=/assets/img/travel/Mingle%20-%20Booha.jpg class=\"main\"><h5>Booha Bar</h5><a href=\"https://www.facebook.com/boohabar/?fref=ts\" class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>Read more</h4></a></div><div class=grid__item><p class=margin-top-50></p></div><div class=grid__item><img src=/assets/img/travel/Mingle%20-%20Central%20Park.jpg class=\"main\"><h5>Central Park</h5><a href=\"https://www.google.ro/maps/place/Parcul+Central+Simion+B%C4%83rnu%C8%9Biu/\" class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>See on map</h4></a></div><div class=grid__item><img src=/assets/img/travel/Mingle%20-%20Victor%20Fresh%20To%20Go.png class=\"main\"><h5>Victor Fresh To Go</h5><a href=\"https://www.facebook.com/victor.freshtogo/?fref=ts&ref=br_tf\" class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>Read more</h4></a></div><div class=grid__item><img src=/assets/img/travel/Mingle%20-%20Midi.jpg class=\"main\"><h5>Midi</h5><a href=\"https://www.facebook.com/clubmidi/?fref=ts\" class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>Read more</h4></a></div><div class=grid__item><a href=\"http://www.clujlife.com/2017/01/17/5-unique-bars-cluj/\" class=more target=_blank><h4>More places</h4><img src=/assets/img/travel/more-icon.png class=\"center-block\"></a></div></div></section><section class=scenery id=jaw-dropping-scenery><div class=heading><h2>Jaw dropping scenery</h2></div><div class=\"grid grid-third\"><div class=grid__sizer></div><div class=grid__item><img src=/assets/img/travel/Scenery%20-%20Salina%20Turda.jpg class=\"main\"><h5>Salina Turda</h5><a href=https://goo.gl/maps/W1Q5XF5hp8M2 class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>See on map</h4></a></div><div class=grid__item><p class=margin-top-50>The Banffy Castle is the home of Electric Castle and an amazing location. But there are a lot of breathtaking places that you might want to explore before or after the festival.</p></div><div class=\"grid__item padding-top-120\"><p>Here are some iconic experiences you can add to your itinerary.</p></div><div class=grid__item><img src=/assets/img/travel/Scenery%20-%20Cheile%20Turzii.jpg class=\"main\"><h5>Cheile Turzii</h5><a href=https://goo.gl/maps/R5QSXuEQY7B2 class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>See on map</h4></a></div><div class=grid__item><img src=/assets/img/travel/Scenery%20-%20Muntii%20Apuseni.jpg class=\"main\"><h5>Apuseni – Raven’s Nest, hiking tracks</h5><a href=https://goo.gl/maps/xYGKMETXEpn class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>See on map</h4></a></div><div class=grid__item><img src=/assets/img/travel/Scenery%20-%20Rimetea%20Coltesti.jpg class=\"main\"><h5>Rimetea – Coltesti citadel</h5><a href=https://goo.gl/maps/E2SttLTW6MP2 class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>See on map</h4></a></div><div class=grid__item><img src=/assets/img/travel/Scenery%20-%20Mocanita%20Steam%20Train.jpg class=\"main\"><h5>Maramures – Ride the \"Mocanita\" steam train through the hills and mountains</h5><a href=https://goo.gl/maps/YZEvL6Q8dX12 class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>See on map</h4></a></div><div class=grid__item><img src=/assets/img/travel/Scenery%20-%20Sighisoara.jpg class=\"main\"><h5>Sighisoara</h5><a href=https://goo.gl/maps/Kp7ScdEr6Un class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>See on map</h4></a></div><div class=grid__item><img src=/assets/img/travel/Scenery%20-%20Alba%20Iulia%20Citadel.jpg class=\"main\"><h5>Alba Iulia</h5><a href=https://goo.gl/maps/WmwW1muLGHN2 class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>See on map</h4></a></div><div class=grid__item><img src=/assets/img/travel/Scenery%20-%20Tarnita%20Party%20On%20The%20Deck.jpg class=\"main\"><h5>Tarnita – Party on the deck</h5><a href=https://goo.gl/maps/tQwAbbZPyv52 class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>See on map</h4></a></div><div class=grid__item><img src=/assets/img/travel/Scenery%20-%20La%20Stufaris.jpg class=\"main\"><h5>The Rural Experience – Sic daytrip, la Stufaris</h5><a href=https://goo.gl/maps/QHs1wd5K6kC2 class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>See on map</h4></a></div><div class=grid__item><p class=margin-top-50>Arrive a few days before Electric Castle or stay for another week afterwards to soak up the bohemian feeling that will make you want to come back for more.</p></div></div></section><section class=stay id=where-to-stay><div class=heading><h2>Where to stay</h2></div><div class=\"grid grid-fifth\"><div class=grid__sizer></div><div class=grid__item><img src=/assets/img/travel/Stay%20-%20Airbnb%201.png class=\"main\"><h5>Airbnb</h5><a href=\"https://www.airbnb.com/rooms/16425496?checkin=07%2F10%2F2017&checkout=07%2F17%2F2017&guests=2&adults=2&children=0&infants=0&s=90_hkO9K\" class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>Book here</h4></a></div><div class=grid__item><p class=margin-top-80>Electric Castle offers a variety of <a ui-sref=ElectricCastlePublic.Accommodation class=lnk>camping options</a> and <a ui-sref=ElectricCastlePublic.Packages class=lnk>special travel packages</a> for the duration of the festival.</p><p>If you're looking to extend your experience, these are a few trustworthy options.</p><p class=\"text-center margin-bottom-60\"><a ui-sref=ElectricCastlePublic.Tickets class=\"center-block std-button std-button--light std-button--wide\">Buy Tickets</a></p></div><div class=grid__item><p></p></div><div class=grid__item><img src=/assets/img/travel/Stay%20-%20Airbnb%202.png class=\"main\"><h5>Airbnb</h5><a href=\"https://www.airbnb.com/rooms/16612743?checkin=07%2F10%2F2017&checkout=07%2F17%2F2017&guests=2&adults=2&children=0&infants=0&s=2gPUO8IS\" class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>Book here</h4></a></div><div class=grid__item><img src=/assets/img/travel/Stay%20-%20Airbnb%203.png class=\"main\"><h5>Airbnb</h5><a href=\"https://www.airbnb.com/rooms/16108072?checkin=07%2F10%2F2017&checkout=07%2F17%2F2017&guests=2&adults=2&children=0&infants=0&s=SDVnCWN1\" class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>Book here</h4></a></div><div class=grid__item><img src=/assets/img/travel/Stay%20-%20Cluj%20Apartments.jpg class=\"main\"><h5>Cluj Apartments</h5><a href=\"http://www.booking.com/hotel/ro/cluj-apartments.en-gb.html?aid=357015;label=gog235jc-hotel-XX-ro-clujNapartments-unspec-ro-com-L%3Aen-O%3AosSx-B%3Achrome-N%3AXX-S%3Abo-U%3AXX;sid=9bc383a94f122b54b216613bc7ee48d9;dist=0&sb_price_type=total&type=total&\" class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>Book here</h4></a></div><div class=grid__item><img src=/assets/img/travel/Stay%20-%20Zen.jpg class=\"main\"><h5>The Spot Cosy Hostel</h5><a href=\"http://www.booking.com/hotel/ro/the-spot-cosy-hostel.en-gb.html?aid=357015;label=gog235jc-hotel-XX-ro-theNspotNcosyNhostel-unspec-ro-com-L%3Aen-O%3AosSx-B%3Achrome-N%3AXX-S%3Abo-U%3AXX;sid=9bc383a94f122b54b216613bc7ee48d9;dist=0&group_adults=2&sb_price_type=total&type=total&\" class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>Book here</h4></a></div><div class=grid__item><img src=/assets/img/travel/Stay%20-%20Hostel.jpg class=\"main\"><h5>Zen Hostel</h5><a href=\"http://www.booking.com/hotel/ro/zen-hostel-by-pura-vida-cluj-napoca.en-gb.html?aid=318615;label=English_Romania_EN_RO_28510500145-8AWU88J5MT56r3B_b96aAwS112436910625%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi%3Atidsa-209354578585%3Alp1011806%3Ali%3Adec%3Adm;sid=9bc383a94f122b54b216613bc7ee48d9;checkin=2017-07-10;checkout=2017-07-17;dest_id=-1156174;dest_type=city;dist=0;group_adults=2;hpos=1;room1=A%2CA;sb_price_type=total;soh=1;soldout=0%2C0;srfid=59221bbc10eda559f5621ef9cb7b61d79547faf6X1;type=total;ucfs=1&\" class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>Book here</h4></a></div><div class=grid__item><img src=/assets/img/travel/opera-plaza.jpg class=\"main\"><h5>Opera Plaza</h5><a href=http://www.booking.com/hotel/ro/opera-plaza.html class=pin target=_blank><img src=/assets/img/travel/pin-icon.png class=\"center-block animated\"><h4>Book here</h4></a></div><div class=clear></div></div></section></div>"
  );


  $templateCache.put('assets/views/line-up/alphabetical.tpl.html',
    "<div class=line-up-tab-content><ul class=\"artists-container list-unstyled\"><li class=artist ng-repeat=\"artist in ac.artists\"><h3 class=artist-name>{{artist.name}}</h3><img ng-src={{artist.image}} alt={{artist.name}} class=\"img-responsive center-block\" image-fallback=\"LINE_UP_ARTIST_IMAGE\"><ul class=social-links><li class=text-center ng-if=artist.websiteUrl><a href={{artist.websiteUrl}} target=_blank><img src=/assets/img/line-up/website.png alt=\"Artist website\"></a></li><li class=text-center ng-if=artist.facebookUrl><a href={{artist.facebookUrl}} target=_blank><img src=/assets/img/line-up/facebook.png alt=\"Artist facebook\"></a></li><li class=text-center ng-if=artist.twitterUrl><a href={{artist.twitterUrl}} target=_blank><img src=/assets/img/line-up/twitter.png alt=\"Artist twitter\"></a></li><li class=text-center ng-if=artist.instagramUrl><a href={{artist.instagramUrl}} target=_blank><img src=/assets/img/line-up/instagram.png alt=\"Artist instagram\"></a></li><li class=\"text-center vertical-align\" ng-if=artist.youtubeUrl><a href={{artist.youtubeUrl}} target=_blank><img src=/assets/img/line-up/youtube.png alt=\"Artist youtube channel\"></a></li></ul><img ng-if=artist.taglineImage ng-src={{artist.taglineImage}} class=\"img-responsive artist-tag-line\"><section class=artist-schedule ng-if=artist.schedule><div ng-repeat=\"entry in artist.schedule\"><div class=\"pull-left info\"><span class=text-light>{{'LINE_UP.SCHEDULE.DATE' | translate}}:&nbsp;</span> <span class=\"text-uppercase text-yellow-base\">{{entry.day}}&nbsp;</span> <span class=text-light>{{'LINE_UP.SCHEDULE.HOUR' | translate}}:&nbsp;</span> <span class=text-yellow-base>{{entry.hour}}</span> <span class=text-light>{{'LINE_UP.SCHEDULE.STAGE' | translate}}:&nbsp;</span> <span class=\"text-uppercase text-yellow-base\">{{entry.stage}}&nbsp;</span></div><div class=pull-right><img class=add-to-my-schedule src=/assets/img/line-up/add-to-schedule.png alt=\"Add to schedule\"></div></div></section></li><li ng-show=\"ac.artists.length === 0\"><h4 class=\"text-center margin-top-70\">{{'LINE_UP.COMING_SOON' | translate}}</h4></li></ul></div>"
  );


  $templateCache.put('assets/views/line-up/line-up.tpl.html',
    "<div class=line-up sort-controller><div class=bar itemscope itemtype=http://schema.org/Festival><meta itemprop=name content=\"Electric Castle Festival\"><meta itemprop=startDate content=\"2016-07-14T10:00\"><meta itemprop=endDate content=\"2016-07-18T08:00\"><div class=\"container filter\"><a ui-sref=ElectricCastlePublic.LineUp.List class=\"action filter__item filter__item--selected\" data-sort=ranking>List</a> <a ui-sref=ElectricCastlePublic.LineUp.List class=\"action filter__item\" data-sort=alphabetical>Alphabetical</a></div></div><div class=container ui-view=line-up-content itemprop=performers></div></div>"
  );


  $templateCache.put('assets/views/line-up/list.tpl.html',
    "<div class=line-up-tab-content artist-grid=lc.get()><div class=view><section class=\"grid artists-container\"><div class=grid__sizer></div><div class=\"grid__item artist\" itemscope itemtype=http://schema.org/MusicGroup ng-repeat=\"artist in lc.get()\" data-sort={{artist.ranking}} data-name=\"{{artist.name | lowercase}}\" ng-class=\"{'grid__item--size-a': true}\"><h3 class=artist-name itemprop=name>{{artist.name}}</h3><img ng-src={{artist.image}} alt={{artist.name}} class=\"img-responsive center-block\" image-fallback=\"LINE_UP_ARTIST_IMAGE\"><ul class=social-links><li class=text-center ng-if=artist.websiteUrl><a itemprop=sameAs content={{artist.websiteUrl}} href={{artist.websiteUrl}} target=_blank><img src=/assets/img/line-up/website.png alt=\"Artist website\"></a></li><li class=text-center ng-if=artist.facebookUrl><a itemprop=sameAs content={{artist.facebookUrl}} href={{artist.facebookUrl}} target=_blank><img src=/assets/img/line-up/facebook.png alt=\"Artist facebook\"></a></li><li class=text-center ng-if=artist.twitterUrl><a itemprop=sameAs content={{artist.twitterUrl}} href={{artist.twitterUrl}} target=_blank><img src=/assets/img/line-up/twitter.png alt=\"Artist twitter\"></a></li><li class=text-center ng-if=artist.instagramUrl><a itemprop=sameAs content={{artist.instagramUrl}} href={{artist.instagramUrl}} target=_blank><img src=/assets/img/line-up/instagram.png alt=\"Artist instagram\"></a></li><li class=\"text-center vertical-align\" ng-if=artist.youtubeUrl><a itemprop=sameAs content={{artist.youtubeUrl}} href={{artist.youtubeUrl}} target=_blank><img src=/assets/img/line-up/youtube.png alt=\"Artist youtube channel\"></a></li></ul><img ng-if=artist.taglineImage ng-src={{artist.taglineImage}} class=\"img-responsive artist-tag-line\"><section class=artist-schedule ng-if=artist.schedule><div ng-repeat=\"entry in artist.schedule\"><div class=\"pull-left info\"><span class=text-light>{{'LINE_UP.SCHEDULE.DAY' | translate}}:&nbsp;</span> <span class=\"text-uppercase text-yellow-base\">{{entry.day}}&nbsp;</span> <span class=text-light>{{'LINE_UP.SCHEDULE.HOUR' | translate}}:&nbsp;</span> <span class=text-yellow-base>{{entry.hour}}&nbsp;</span><br><span class=text-light>{{'LINE_UP.SCHEDULE.STAGE' | translate}}:&nbsp;</span> <span class=\"text-uppercase text-yellow-base\">{{entry.stage}}&nbsp;</span></div><div class=pull-right><a ui-sref=ElectricCastlePublic.NewSchedule title=\"See full schedule\" class=add-to-my-schedule><img src=/assets/img/line-up/view-schedule.png alt=\"Go to schedule\"></a></div></div></section></div></section></div></div>"
  );


  $templateCache.put('assets/views/live-wall/live-wall.tpl.html',
    "<div class=livewall-page><div class=container><iframe width=100% height=1650 allowtransparency=true frameborder=0 scrolling=yes src=\"//eventifier.com/embed/1433/\"></iframe></div></div>"
  );


  $templateCache.put('assets/views/modal/add-external-ticket-modal.tpl.html',
    "<div class=modal-content><div class=modal-header><h4 class=modal-title>Add ticket to your account</h4><i class=\"close-modal glyphicon glyphicon-remove\" ng-click=aetmc.closeModal()></i></div><div class=modal-body><p>If you want to upgrade a hard-copy ticket you can add it to your account by entering the code found under the barcode. After this you will be able to upgrade it (add camping access, add VIP access, etc.).</p><p><strong>Important!</strong> You will use your original ticket to enter the festival, so take good care of it.</p><form name=addExternalTicketForm ng-submit=aetmc.submit(addExternalTicketForm) class=margin-top-20 novalidate><fieldset class=\"form-group form-group__error\" ng-show=aetmc.flags.showError><div class=error-alert ng-bind-html=aetmc.model.errorMessage></div></fieldset><fieldset class=\"form-group form-group--full-width margin-bottom-5\"><div class=\"col-md-8 no-padding-left\"><input id=code class=\"form-control form-control--dark margin-bottom-5\" name=code placeholder=\"TICKET CODE\" autocomplete=off ng-class=\"{'has-error': addExternalTicketForm.code.$invalid && addExternalTicketForm.$submitted}\" ng-required=true ng-model=\"aetmc.model.code\"></div><div class=\"col-md-4 no-padding-left\"><button class=\"std-button std-button--light std-button--wide std-button--in-form w-100\" type=submit ng-disabled=\"addExternalTicketForm.$submitted && !addExternalTicketForm.$valid\">Submit</button></div><div class=clearfix></div><span ng-messages=addExternalTicketForm.code.$error ng-show=addExternalTicketForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span></fieldset></form></div></div>"
  );


  $templateCache.put('assets/views/modal/before-you-come.tpl.html',
    "<div class=\"modal-content before-you-come\"><div class=modal-header><h4 class=modal-title>Returnarea sumelor incarcate pe brățăra RFID</h4><i class=\"close-modal glyphicon glyphicon-remove\" ng-click=bycc.closeModal()></i></div><div class=modal-body><section class=content><h4>Returnarea sumelor care provin din tranzactii online</h4><p>Returnarea va fi facuta automat prin proces invers de refund la 5 zile dupa terminarea festivalului, direct pe cardul de pe care s-a facut tranzactia online de incarcare. Fiecare tranzactie este asociata unui card. Astfel daca se fac doua tranzactii de incarcare de 100Lei si 100Lei de pe doua carduri diferite iar in festival se cheltuie 80 Lei, se vor returna 20 pentru prima tranzactie, pe primul card si 100 Lei pe al doilea card, respectiv pentru a doua tranzactie online.</p><h4>Returnarea sumelor de bani care provin din tranzactii pe teritoriul festivalului dupa terminarea festivalului (sau dupa expirarea bratarii de o zi)</h4><p>Returnarea se face dupa completarea unui formular cu datele personale si contul bancar al participantului. Formularul trebuie completat pana in 21.07 și va fi disponibil din 19.07 pe <a href=https://ec2017.pay.intellifest.com/refund target=_blank>ec2017.pay.intellifest.com/refund</a>. Transferul banilor depinde apoi de banca emitentă a fiecărui participant. Deasemenea transferul banilor va suporta comisioane interbancare.</p></section></div><div class=clearfix></div></div>"
  );


  $templateCache.put('assets/views/modal/first-login-thank-you.tpl.html',
    "<div class=\"modal-content first-login-thank-you\"><div class=modal-header><h4 class=modal-title>{{'TICKETS.MODAL.FIRST_LOGIN_THANK_YOU.TITLE' | translate}}</h4><i class=\"close-modal glyphicon glyphicon-remove\" ng-click=fltyc.closeModal()></i></div><div class=modal-body><p class=text-medium bind-html-compile=\"'TICKETS.MODAL.FIRST_LOGIN_THANK_YOU.DESCRIPTION' | translate\"></p></div><div class=\"modal-footer clearfix\"><button type=button class=\"button button--has-border button--has-border--yellow button-xs-block button--dark\" ng-click=fltyc.closeModal()>{{'TICKETS.MODAL.FIRST_LOGIN_THANK_YOU.CLOSE' | translate}}</button></div></div>"
  );


  $templateCache.put('assets/views/modal/login-modal.tpl.html',
    "<div class=\"modal-content login-page\"><div class=modal-header><h4 class=modal-title>{{'MODAL.LOGIN.HEADER' | translate}}</h4><i class=\"close-modal glyphicon glyphicon-remove\" ng-click=lmc.closeModal()></i></div><div class=modal-body><div class=row><div class=col-md-6><h4 class=margin-bottom-15>{{'MODAL.LOGIN.LOGIN_LABEL' | translate}}</h4><login-form post-login-action=CART theme=dark></login-form></div><div class=col-md-6><h4 class=margin-bottom-15>{{'MODAL.LOGIN.REGISTER_LABEL' | translate}}</h4><register-minimal-form post-register-action=CART></register-minimal-form></div></div></div></div>"
  );


  $templateCache.put('assets/views/modal/partners-locations.tpl.html',
    "<div class=\"modal-content partner-locations\"><div class=modal-header><h4 class=modal-title>{{'TICKETS.MODAL.PARTNER_LOCATIONS.HEADER' | translate}}</h4><i class=\"close-modal glyphicon glyphicon-remove\" ng-click=plc.closeModal()></i></div><div class=modal-body><p>If you want to buy <strong>hard-copy tickets</strong> you can get them from our partner locations:</p><ul><li><strong>Cluj-Napoca</strong><ul><li>Atelier Cafe - Memorandumului 9, et 1</li><li>Booha Bar - Piezise 19</li><li>Kingpin Shop - Eroilor 31</li><li>Victor - Victor Babes 33</li></ul></li><li><strong>Timisoara</strong><ul><li>Cuib d'Arte - Marasesti 14</li><li>Hostel Costel - Sfetca Petru 1</li><li>Neata Omelette - Dimitrie Cantemir 1</li></ul></li><li><strong>Iasi</strong><ul><li>Acaju - Sf Sava 15</li><li>Fika - Piata Unirii 7, bloc B4</li><li>Meru - Carol I 3</li></ul></li><li><strong>Bucuresti</strong><ul><li>Acuarela - Polona Street 40</li><li>Energiea - Actor Ion Brezoianu 4</li><li>FunRide Shop - Piata Natiunile Unite 3-5</li><li>H20 Shop - Calea Dorobanti 48</li><li>Steam Coffee Shop - Uruguay 22</li><li>Steam Coffee Shop - Visarion 2</li></ul></li><li><strong>Oradea</strong><ul><li>Steam Pub - Pasajul Vulturului Negru</li></ul></li><li><strong>Brasov</strong><ul><li>Cafe Central - Apollonia Hircher 18</li><li>Jar - Republicii 42</li></ul></li></ul></div></div>"
  );


  $templateCache.put('assets/views/modal/redeem-card-modal.tpl.html',
    "<div class=modal-content><div class=modal-header><h4 class=modal-title>{{'GIFT_CARD.MODAL_HEADER' | translate}}</h4><i class=\"close-modal glyphicon glyphicon-remove\" ng-click=rgcmc.closeModal()></i></div><div class=modal-body><redeem-card-form post-redeem-action=CLOSE_MODAL></redeem-card-form></div></div>"
  );


  $templateCache.put('assets/views/modal/refund.tpl.html',
    "<div class=modal-content><div class=modal-header><h4 class=modal-title>RFID Manual Refund</h4><i class=\"close-modal glyphicon glyphicon-remove\" ng-click=rfc.closeModal()></i></div><div class=modal-body><p class=text-medium>Pentru recuperarea banilor ce au fost incarcati la fata locului trebuie sa urmezi pasi de mai jos:</p><p class=text-medium>1. Trebuie sa ai cont pe <a href=http://ec2016.pay.intellifest.com target=_blank><strong>ec2016.pay.intellifest.com</strong></a><br>2. Daca nu ai cont, creeaza-ti unul si inregistreaza-ti bratara folosind codurile unice de pe spate.<br>3. Du-te la <strong>Refund</strong><br>4. Completeaza datele in formular pana in 31 Iulie.<br>5. Banca va procesa plata, iar banii tai vor fi transferati in contul tau.</p><p class=text-medium>Fiecare operatiune este supusa unei taxe de 3 lei ce reprezinta taxele bancare de transfer manual.</p><hr><p class=text-medium>In order to refund the money that were deposited on you RFID card at the festival, please folow the next steps:</p><p class=text-medium>1. You need an account on <a href=http://ec2016.pay.intellifest.com target=_blank><strong>ec2016.pay.intellifest.com</strong></a><br>2. If you don't have one, create it and register your bracelet tag with the code you will find on it's back.<br>3. Go to <strong>Refund</strong><br>4. Fill the required data until July 31.<br>5. The bank will process your request and the money will be transferred into your account.</p><p class=text-medium>Each operation will be charged with 3 lei representing the manual transfer bank tax.</p></div></div>"
  );


  $templateCache.put('assets/views/modal/ticket-name-modal.tpl.html',
    "<div class=modal-content><div class=modal-header><h4 class=modal-title>The Name on your ticket</h4><i class=\"close-modal glyphicon glyphicon-remove\" ng-click=tnmc.closeModal()></i></div><div class=modal-body><p>You can change the name on your ticket here. Download it again after this.</p><form name=ticketNameForm ng-submit=tnmc.submit(ticketNameForm) class=margin-top-20 novalidate><fieldset class=\"form-group form-group__error\" ng-show=tnmc.flags.showError><div class=error-alert ng-bind-html=tnmc.model.errorMessage></div></fieldset><fieldset class=\"form-group form-group--full-width margin-bottom-5\"><div class=\"col-md-8 no-padding-left\"><input id=name class=\"form-control form-control--dark margin-bottom-5\" name=name placeholder=\"\" autocomplete=off ng-class=\"{'has-error': ticketNameForm.name.$invalid && ticketNameForm.$submitted}\" ng-required=true ng-model=\"tnmc.model.name\"></div><div class=\"col-md-4 no-padding-left\"><button class=\"std-button std-button--light std-button--wide std-button--in-form w-100\" type=submit ng-disabled=\"ticketNameForm.$submitted && !ticketNameForm.$valid\">Change</button></div><div class=clearfix></div><span ng-messages=ticketNameForm.code.$error ng-show=ticketNameForm.$submitted><span class=error ng-message=required>{{'VALIDATIONS_ERRORS.IS_REQUIRED' | translate}}</span></span></fieldset></form></div></div>"
  );


  $templateCache.put('assets/views/newsroom/newsroom-article.tpl.html',
    "<div class=\"page-container page-container__bg-light newsroom-page\" ng-if=!nrac.shouldDisplayNoNewsItem()><header class=banner style=\"background-image: url('{{nrac.newsItem.headerImage}}')\"><div class=container itemscope itemtype=http://schema.org/Article><div class=row><div class=\"col-sm-3 col-sm-offset-1 col-xs-6 col-xs-offset-0\"><a href=\"http://decatorevista.ro/\" target=_blank><img src=/assets/img/newsroom/povestit-de-dor.png></a></div><div class=\"col-sm-2 col-sm-offset-5 col-xs-6 col-xs-offset-0 text-right\"><a href=\"https://www.bancatransilvania.ro/\" target=_blank><img src=/assets/img/newsroom/sustinut-de-bt.png></a></div><div class=clearfix></div><div class=\"col-sm-11 col-sm-offset-1 col-xs-offset-0 margin-top-100\"><h1><a ui-sref=ElectricCastlePublic.Newsroom><small ng-if=\"nrac.newsItem.author !== 'Oana Ivan'\">Electric Newsroom</small> <small ng-if=\"nrac.newsItem.author === 'Oana Ivan'\">Jurnalul Oanei</small></a><br><span itemprop=name>{{nrac.newsItem.title}}</span></h1><h2>{{nrac.newsItem.subtitle}}</h2></div></div></div></header><section class=\"article-details container\"><div class=\"col-md-10 col-md-offset-1 col-sm-offset-0 col-xs-offset-0\"><h5 class=margin-bottom-30 itemprop=author>{{nrac.newsItem.author}} <span>{{nrac.newsItem.publishedAt}}</span></h5><div class=article-text itemprop=articleBody ng-bind-html=nrac.trustHtml(nrac.newsItem.content)></div></div></section><section class=\"article-share container margin-bottom-30\"><div class=row><div class=\"col-md-10 col-md-offset-1\"><h5>Share:</h5><button class=\"button button--has-border button--has-border--yellow button--dark\" socialshare socialshare-provider=facebook socialshare-url={{nrac.shareUrl}}><i class=\"fa fa-facebook\"></i> Facebook</button> <button class=\"button button--has-border button--has-border--yellow button--dark\" socialshare socialshare-provider=twitter socialshare-text={{nrac.newsItem.subtitle}} socialshare-url={{nrac.shareUrl}}><i class=\"fa fa-twitter\"></i> Twitter</button> <button class=\"button button--has-border button--has-border--yellow button--dark\" socialshare socialshare-provider=google socialshare-url={{nrac.shareUrl}}><i class=\"fa fa-google-plus\"></i> Google+</button> <button class=\"button button--has-border button--has-border--yellow button--dark\" socialshare socialshare-provider=skype socialshare-url={{nrac.shareUrl}}><i class=\"fa fa-skype\"></i> Skype</button></div></div></section><div class=container><div class=row><p class=\"col-md-10 col-md-offset-1 col-sm-offset-0 col-xs-offset-0 text-medium\">&laquo; <a ui-sref=ElectricCastlePublic.Newsroom>Newsroom home</a></p></div></div><hr><section class=\"article-list container\" ng-if=!nrac.shouldDisplayNoRelatedNews()><div class=row><div class=\"col-md-3 col-sm-6\" ng-repeat=\"news in nrac.newsItem.related\"><a ui-sref=\"ElectricCastlePublic.NewsroomArticle({ articleId : news.entityId, articleTitle : news.formattedTitle})\"><img ng-src={{news.thumbnail}} class=\"img-responsive\"><div class=title-area><h5>{{news.title}}</h5><p>{{news.subtitle}}</p></div></a></div></div></section></div><div class=newsroom-page ng-if=nrac.shouldDisplayNoNewsItem()><header class=banner><div class=container><div class=row><div class=\"col-sm-2 col-sm-offset-1 col-xs-6 col-xs-offset-0\"><a href=\"http://decatorevista.ro/\" target=_blank><img src=/assets/img/newsroom/povestit-de-dor.png width=\"90\"></a></div><div class=\"col-sm-2 col-sm-offset-6 col-xs-6 col-xs-offset-0 text-right\"><a href=\"https://www.bancatransilvania.ro/\" target=_blank><img src=/assets/img/newsroom/sustinut-de-bt.png></a></div><div class=\"col-sm-11 col-sm-offset-1 col-xs-offset-0 margin-top-140\"><h1><small>Electric Story</small><br>Electric Castle 2016</h1><h2>Booming sounds, happy people, wonderful surroundings</h2></div></div></div></header><section class=\"article-list container\"><h5 class=\"padding-top-40 text-center\">There is no article here. Please go back to the <a ui-sref=ElectricCastlePublic.Newsroom>Newsroom homepage</a>.</h5></section></div>"
  );


  $templateCache.put('assets/views/newsroom/newsroom.tpl.html',
    "<div class=\"page-container page-container__bg-light newsroom-page\"><header class=banner style=\"background-image: url('{{nrc.featured.headerImage}}')\"><div class=container><div class=row><div class=\"col-sm-2 col-sm-offset-1 col-xs-6 col-xs-offset-0\"><a href=\"http://decatorevista.ro/\" target=_blank><img src=/assets/img/newsroom/povestit-de-dor.png></a></div><div class=\"col-sm-2 col-sm-offset-6 col-xs-6 col-xs-offset-0 text-right\"><a href=\"https://www.bancatransilvania.ro/\" target=_blank><img src=/assets/img/newsroom/sustinut-de-bt.png></a></div><a ui-sref=\"ElectricCastlePublic.NewsroomArticle({ articleId : nrc.featured.entityId, articleTitle : nrc.featured.formattedTitle})\"><div class=\"col-sm-11 col-sm-offset-1 col-xs-offset-0 margin-top-100\"><h1><small ng-if=\"nrac.newsItem.author !== 'Oana Ivan'\">Electric Newsroom</small> <small ng-if=\"nrac.newsItem.author === 'Oana Ivan'\">Jurnalul Oanei</small><br>{{nrc.featured.title}}</h1><h2>{{nrc.featured.subtitle}}</h2></div></a></div></div></header><section class=\"article-list container\"><div class=row><div class=\"col-md-3 col-sm-6\" ng-repeat=\"news in nrc.getNews()\"><a ui-sref=\"ElectricCastlePublic.NewsroomArticle({ articleId : news.entityId, articleTitle : news.formattedTitle})\"><img ng-src={{news.thumbnail}} class=\"img-responsive\"><div class=title-area><h5>{{news.title}}</h5><p>{{news.subtitle}}</p></div></a></div></div></section></div>"
  );


  $templateCache.put('assets/views/own-the-stage/own-the-stage.tpl.html',
    "<div class=\"page-container page-container__bg-dark own-the-stage-page\"><div class=container><div class=row><div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\"><img src=/assets/img/own-the-stage/stage-banner.png alt=\"Own the Stage 2017\" class=\"img-responsive center-block\"><h1 class=\"text-uppercase text-center\">Creative music people&nbsp;<br>we want you again to Own the Stage&nbsp;<br>at <span>Electric Castle 2017</span>!</h1><p class=\"text-center intro\"><strong>Unul din scopurile EC este de a promova și de a arăta lumii artiștii români, indiferent dacă sunt la început de drum sau au deja o carieră în spate. So, dacă ai o trupă sau esti DJ, poți ajunge să pui muzică pe una dintre scenele festivalului.</strong></p></div></div><div class=\"row band-content\"><div class=\"col-lg-4 col-lg-offset-2 col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-0\"><h3>Bands Contest</h3><p><strong>Punem la bătaie 4 sloturi pe a doua scenă a festivalului: Hangar!</strong></p><p>Pentru a participa trebuie să completați formularul acesta sau să intrați pe tabul Own the Stage de pe <a href=\"https://www.facebook.com/ElectricCastle/\" target=_blank>facebook.com/electriccastle</a> până în 11 Iunie, ora 23:59.</p><p>În 12 Iunie alegem trupele ce intră în etapa de votare, iar în 19 Iunie vom anunța câștigătorii (trupa cu cele mai multe voturi și încă 3 alese de juriul EC).</p><a href=https://www.wishpond.com/lp/728570/reference class=\"call-to-action call-to-action-lg\" target=_blank>Apply Here</a></div></div><div class=\"row dj-content\"><div class=\"col-lg-4 col-lg-offset-6 col-md-5 col-md-offset-6 col-sm-6 col-sm-offset-6\"><h3>DJ Contest</h3><p><strong>Mecanismul e simplu. Tot concursul se va desfășura pe Mixcloud unde trebuie să uploadezi un mix făcut de tine (neapărat!) care să respecte regulile de mai jos:</strong></p><ul><li>Durata mixului: minim 30 de minute</li><li>Adaugă un tracklist</li><li>Titlul Mixului <strong>“DJ Contest Own The Stage – Numele Tău”</strong></li><li>Folosește tag-ul: <strong>“Own The Stage at Electric Castle 2017”</strong>. <span>Dacă nu vei folosi tag-ul când uploadezi mixul, există șanse ca noi să nu vedem mixul.</span></li><li>Folosește <a href=/assets/img/bg/mixclud.jpg target=_blank>cover-ul de aici</a></li><li>Trebuie să ai minim 150 de ascultări pentru a putea fi selectat printre câștigători</li></ul><p>În 12 Iunie, vor fi aleși finaliștii concursului, iar mixurile lor vor fi postate pe contul de Mixcloud EC. Dintre aceștia vor fi aleși 4 câștigători în 16 Iunie. Pentru alegerea acestora vor fi luate în considerare voturile/favorites publicului (25%) și nota juriului EC (75%).</p><a href=\"https://www.mixcloud.com/\" class=\"call-to-action call-to-action-lg\" target=_blank>Apply Here</a><p>Pentru regulamentul competitiei <a href=/assets/docs/ownthestage-regulament.pdf target=_blank>intrati aici</a>.</p></div></div></div></div>"
  );


  $templateCache.put('assets/views/projects/projects.tpl.html',
    "<div class=\"page-container page-container__bg-dark projects-page\"><div class=container><div class=row><div class=\"col-md-10 col-md-offset-1\"><img src=/assets/img/projects/headline.png class=\"img-responsive center-block\" alt=\"Creative people, get your toolbox ready\"></div></div></div><h2 class=text-center>Join the show at Electric Castle<br><span>and see your dream project come to life!</span></h2><div class=container><div class=row><div class=\"col-md-10 col-md-offset-1\"><img src=/assets/img/projects/line-icons.png class=\"img-responsive center-block\" alt=\"Join the show at Electric Castle and see your dream project come to life!\"><hr class=\"grey\"><div class=row><div class=col-md-6><div class=item><h3>We’re looking for <span>ARTISTS</span> who want to build amazing, immersive installations.</h3><div class=row><div class=col-sm-5><img src=/assets/img/projects/hammer.png class=\"img-responsive center-block\"></div><div class=\"col-sm-7 no-padding-left\"><p>From volumetric letters that write memorable statements, to geometric shapes, mirrors, special projections, interactive installations, optical illusions, immersive lighting setups, everything is possible as long as it has a purpose and offers a unique sensation/experience.</p><a href=https://electric_castle.formstack.com/forms/artists class=\"call-to-action call-to-action-lg\" target=_blank>Apply Here</a><p class=text-light>Grants up to 5.000 Euros are available for selected submissions.</p></div></div></div></div><div class=col-md-6><div class=item><h3><span>ARCHITECTS</span> who can transform sketches into reality and elevate the festival camping site.</h3><div class=row><div class=col-sm-5><img src=/assets/img/projects/liner.png class=\"img-responsive center-block\"></div><div class=\"col-sm-7 no-padding-left\"><p>This year, we plan on making the campus more comfortable than ever. We are interested to see efficient housing ideas for constructions that can accommodate from 2 to 4 people. The production cost for each unit should not be greater than 1.000 Euros.</p><a href=https://electric_castle.formstack.com/forms/architects class=\"call-to-action call-to-action-lg\" target=_blank>Apply Here</a><p class=text-light>Grants up to 5.000 Euros are available for selected submissions.</p></div></div></div></div></div><div class=row><div class=col-md-6><div class=item><h3><span>Storytellers</span> who can imagine the best short film or music video scenarios that could happen at Electric Castle.</h3><div class=row><div class=col-sm-5><img src=/assets/img/projects/pencil.png class=\"img-responsive center-block\"></div><div class=\"col-sm-7 no-padding-left\"><p>Electric Castle is an amazing experience and everyone is aware of the insane amounts of fun you can have during 5 days of festival. We want to discover the unsung stories that happen behind the scenes. The romance, the drama, the comedies and the thrillers. Submit your storyline for a short film (up to 30 minutes long), documentary, music video or sketch and we’ll make it happen.</p><a href=https://electric_castle.formstack.com/forms/storytellers class=\"call-to-action call-to-action-lg\" target=_blank>Apply Here</a><p class=text-light>Grants up to 5.000 Euros are available for selected submissions.</p></div></div></div></div><div class=col-md-6><div class=item><h3><span>MUSICIANS</span> who want to perform on stages in front of thousands of ecstatic fans.</h3><div class=row><div class=col-sm-5><img src=/assets/img/projects/jack.png class=\"img-responsive center-block\"></div><div class=\"col-sm-7 no-padding-left\"><p>You think your band or Dj set deserve to be heard by thousands. But you are struggling to get ahead. Seize a unique chance to perform on some of the biggest stages in the country. Send us a demo or a link to your tunes and maybe you’ll see your name in the final Electric Castle line-up announcement.<br><br><br><br></p><a class=\"call-to-action call-to-action-lg\" ui-sref=ElectricCastlePublic.OwnTheStage>Apply Here</a><p class=text-light>Selected artists will get the chance to perform at Electric Castle.</p></div></div></div></div></div><div class=row><div class=col-md-6><div class=item><h3><span>Activities</span> thinkers who want to implement fun engaging ideas on Castle grounds.</h3><div class=row><div class=col-sm-5><img src=/assets/img/projects/speaker.png class=\"img-responsive center-block\"></div><div class=\"col-sm-7 no-padding-left\"><p>Think of more than 10.000 people moving to a tiny village for 5 days. They will in the camping and on festival grounds for the majority of their stay. Here’s your chance to prove your entertainment skills. Whether it’s yoga, stand-up comedy, physical activities, treasure hunting or something that’s never been done before, we’d love to hear it.</p><a href=https://electric_castle.formstack.com/forms/activities class=\"call-to-action call-to-action-lg\" target=_blank>Apply Here</a><p class=text-light>Grants up to 1.000 Euros are available for selected submissions.</p></div></div></div></div><div class=col-md-6><div class=item><h3><span>Designers</span> who can elevate everything visual about Electric Castle.</h3><div class=row><div class=col-sm-5><img src=/assets/img/projects/marker.png class=\"img-responsive center-block\"></div><div class=\"col-sm-7 no-padding-left\"><p class=details>From EC Merchandise (everything wearable) to Posters, Gifs and even Business Cards, to drawing or illustrating the Electric Castle / EC logo or the Banffy Castle in thousands of different ways – we would love to see your ideas and collaborate to make them happen.<br><br><br></p><a href=https://electric_castle.formstack.com/forms/designers class=\"call-to-action call-to-action-lg\" target=_blank>Apply Here</a><p class=text-light>Grants up to 1.000 Euros are available for selected submissions.</p></div></div></div></div></div></div></div></div></div>"
  );


  $templateCache.put('assets/views/rfid/how-it-works.tpl.html',
    "<div class=\"container rfid-how-it-works\"><div class=content><h1 class=\"text-center margin-bottom-10 margin-bottom-50 title\">Important things to know about tickets registration</h1><div><ol class=steps><li class=steps__step><p class=margin-bottom-0>There are three easy steps to follow</p><ol class=sub-steps><li class=sub-steps__step><a class=\"hvr-overline-from-left text-underline\" href=\"https://ec2016.pay.intellifest.com/\" target=_blank>Create your account here</a></li><li class=sub-steps__step>Register your access ticket using the ticket number</li><li class=sub-steps__step>Deposit your first festival money using a credit card</li></ol></li><li class=steps__step>You can register only 1-Day Tickets, 4-Day Passes, VIP Passes and Invitations. You can’t register Camping Passes!</li><li class=steps__step>Each person must register only ONE ticket. If you will register multiple tickets it will be a family account and each registered ticket will spend the amount of money found on that account.</li><li class=steps__step>After the registration take really good care of your ticket! If someone else will scan your ticket they will be able to use the money you deposited on that account.</li><li class=steps__step>You can use any type of credit card to deposit money online. If you deposit money using a MasterCard or Maestro credit card until July 10, you can win one of the VIP tickets offered by MasterCard.</li><li class=steps__step>After the festival, all the money left that was deposited online (using a credit card) will be automatically refunded (in maximum five working days) to your credit card.</li><li class=steps__step>You can also deposit money on your wristband at one of our Top-Up Points found at Electric Castle.</li><li class=steps__step>All the money that was deposited using cash at our Top-Up points will be refunded only at our Top-Up Points, until the end of the festival.</li><li class=steps__step>Registration can also be made at the festival after you will swap your ticket for the wristband.</li></ol><p class=\"clearfix margin-bottom-100\"><a class=pull-right href=\"https://www.bancatransilvania.ro/\" target=_blank><img src=/assets/img/bt.png class=bt-logo width=\"160\"></a></p></div></div></div>"
  );


  $templateCache.put('assets/views/schedule/artist-box.tpl.html',
    "<li class=artist style={style} tooltip=\"{artistName} {startHour}:{startMinutes} - {endHour}:{endMinutes}\" tooltip-placement=top><div class=artist__wrap><span class=artist__name>{artistName}</span> <small class=artist__time><span>{startHour}:{startMinutes}</span> <span>-</span> <span>{endHour}:{endMinutes}</span></small></div></li>"
  );


  $templateCache.put('assets/views/schedule/current-time.tpl.html',
    "<span class=current-time ng-style=style ng-show=showCurrentTime><span class=time>{{currentTime}}</span></span>"
  );


  $templateCache.put('assets/views/schedule/new-schedule.tpl.html',
    "<div class=\"page-container page-container__bg-dark\"><div class=schedule-page><ul class=\"flex-container flex-container__days\"><li class=\"flex-item flex-item__day\" ng-class=\"{'flex-item--is-active': day.isActive}\" ng-click=day.cb.activate() ui-sref=\"ElectricCastlePublic.NewSchedule({day: day.name})\" ng-repeat=\"day in nsc.cb.getEntireSchedule()\">Day {{day.name}} <small>{{'LINE_UP.SCHEDULE.DAY_' + day.name | translate}}</small></li></ul><ul class=\"flex-container flex-container__stages\" ng-repeat=\"day in nsc.cb.getEntireSchedule()\" ng-show=day.isActive><li class=\"flex-item flex-item__stage\" ng-repeat=\"stage in day.stages\" ng-click=stage.cb.toggleTheRest(stage) ng-class=\"{'flex-item__stage--grown': stage.headerExpanded}\">{{stage.name}}</li></ul><section class=day-schedule-wrap><day-grid model=day ng-repeat=\"day in nsc.cb.getEntireSchedule()\" ng-show=day.isActive></day-grid><schedule-per-stage class=\"flex-container flex-container__artists\" model=day ng-repeat=\"day in nsc.cb.getEntireSchedule()\" ng-show=day.isActive></schedule-per-stage><current-time model=day ng-repeat=\"day in nsc.cb.getEntireSchedule()\" ng-show=day.isActive></current-time></section></div></div>"
  );


  $templateCache.put('assets/views/schedule/schedule.tpl.html',
    "<div class=\"page-container page-container__bg-dark\"><div class=\"container simple-schedule-page\"><table class=\"schedule-table margin-top-50\" ng-repeat=\"day in schc.getMatrix()\" ng-if=!schc.flags.displaySimpleVersion><thead><tr><th class=\"text-center text-uppercase\" colspan=\"{{day.stages.length + 1}}\">Day {{day.name}} - {{'LINE_UP.SCHEDULE.DAY_' + day.name | translate}}</th></tr><tr><th class=time>Start<br>time</th><th class=\"stage-name text-uppercase\" ng-repeat=\"stageName in day.stages\">{{stageName}}</th></tr></thead><tbody><tr ng-repeat=\"hourRow in day\"><td class=stage-hour>{{day.hours[$index]}}</td><td class=artist ng-repeat=\"stageSchedule in hourRow\"><strong>{{stageSchedule.artist}}</strong></td></tr></tbody></table><ul class=schedule-day ng-if=schc.flags.displaySimpleVersion ng-repeat=\"(day, artists) in schc.getSimpleSchedule()\"><h1 class=text-uppercase>Day {{day}} <sub class=\"hidden-md hidden-sm\">{{'LINE_UP.SCHEDULE.DAY_' + day | translate}}</sub></h1><li ng-repeat=\"artist in artists\">{{artist.name}}</li></ul><div class=\"padding-bottom-50 text-right\"><a ui-sref=ElectricCastlePublic.Tickets class=call-to-action analytics-on analytics-event=\"Call to action from Home\" analytics-category=Navigation>{{'HOME.TICKETS' | translate}}</a></div></div></div>"
  );


  $templateCache.put('assets/views/schedule/stage-box.tpl.html',
    "<ul class=\"flex-item flex-item__artists\" style={style} ng-show=model.stages.{index}.isActive>{stageArtists}</ul>"
  );


  $templateCache.put('assets/views/shop/order-failed.tpl.html',
    "<div class=\"page-container page-container__bg\"><div class=\"container order-status-page\"><h1 class=text-error>{{'CHECKOUT.FAILED.TITLE' | translate}}</h1><p class=text-large translate=\"{{'CHECKOUT.FAILED.DESCRIPTION'}}\"></p><p>Your order id: <strong>{{orc.latestOrder.id}}</strong></p></div></div><input type=hidden id=order-id value=\"{{orc.latestOrder.id}}\"> <input type=hidden id=order-value value=\"{{orc.latestOrder.orderTotal}}\">"
  );


  $templateCache.put('assets/views/shop/order-success.tpl.html',
    "<div class=\"page-container page-container__bg\"><div class=\"container order-status-page\"><h1 class=text-success>{{'CHECKOUT.SUCCESS.TITLE' | translate}}</h1><p class=text-large translate=\"{{'CHECKOUT.SUCCESS.DESCRIPTION'}}\"></p><p class=margin-bottom-30>Your order id: <strong>{{orc.latestOrder.id}}</strong></p><a class=\"button button--has-border button--has-border--yellow button--dark button--in-form button-block\" ui-sref=ElectricCastlePublic.MyAccount.Orders>Go to your orders</a></div></div><input type=hidden id=order-id value=\"{{orc.latestOrder.id}}\"> <input type=hidden id=order-value value=\"{{orc.latestOrder.orderTotal}}\"> <img src=\"//drs2.veinteractive.com/DataReceiverService.asmx/Pixel?journeycode=847B8C6D-684E-4709-A73C-6CC97A83FCF2\" width=1 height=1 class=\"pull-left\">"
  );


  $templateCache.put('assets/views/shop/shop.tpl.html',
    "<div class=\"page-container__bg-grey page-container__full-height\"><div class=\"container shop-page\" shop-grid=sc.getProducts()><div class=bar ng-show=sc.shouldDisplayCategories()><div class=bar__bg></div><div class=filter><button class=\"action filter__item\" ng-repeat=\"category in sc.getCategories()\" ng-class=\"{'filter__item--selected': category.filter === '*'}\" data-filter={{::category.filter}}><span class=action__text>{{::category.name | uppercase}}</span></button></div></div><h2 ng-show=sc.shouldDisplayNoProducts() class=\"text-center margin-top-100 margin-bottom-40 coming-soon\">{{'SHOP.NO_PRODUCTS' | translate}}</h2><div class=view itemprop=offers><section class=grid><div class=grid__sizer></div><div class=\"grid__item {{::product.categorySelector}}\" ng-repeat=\"product in sc.getProducts()\" ng-class=\"{'grid__item--size-a': $index % 3 === 0}\" itemscope itemtype=http://schema.org/Offer><div class=\"slider is-loading\"><div class=slider__item ng-repeat=\"image in product.images | orderBy : 'position'\" ng-class=\"{'higher-z-index': $first}\" itemprop=image content={{::image.urlResized}}><img ng-src={{::image.url}} alt=\"{{::product.name}}\"><div class=no-display><img class=high-resolution ng-src={{::image.urlResized}} alt=\"{{::product.name}}\"></div></div></div><div class=details><div class=meta ng-switch=product.isFree><h3 class=meta__title class=name itemprop=name>{{::product.name}}</h3><span class=meta__brand bind-html-compile=product.shortDescription ng-if=product.shortDescription></span> <span class=meta__price ng-switch-when=false itemprop=price>{{::product.price}} <span itemprop=priceCurrency>RON</span>&nbsp; ({{::product.priceEur}} <span itemprop=priceCurrency>EUR</span>)</span> <span class=meta__price ng-switch-when=true>{{::'SHOP.PRODUCT_FREE' | translate}}</span></div><div class=\"grid__item__actions clearfix\"><button class=pull-right ng-click=sc.addToBasket(product);><span>{{::'TICKETS.ADD_TO_BASKET' | translate}}</span></button><div class=pull-right ng-show=product.hasOptions();><ui-select ng-model=product.selectedOption class=size-select search-enabled=false><ui-select-match placeholder=\"Please select\">{{$select.selected.optionName}}</ui-select-match><ui-select-choices repeat=\"option.optionId as option in product.options\"><div ng-bind-html=option.optionName></div></ui-select-choices></ui-select></div></div></div></div></section></div></div></div>"
  );


  $templateCache.put('assets/views/sponsors/advertising.tpl.html',
    "<div class=\"page-container page-container__bg\"><div class=container><div class=row><div class=\"col-md-10 col-md-offset-1\"><h1>Media &amp; Advertising</h1><p>For trading, press or sponsor questions regarding Electric Castle 2017, please send your questions to one of the following email addresses.</p><div class=row><div class=col-sm-3><h3>Sponsors</h3><p><a href=mailto:andrei.lupsa@electriccastle.ro>andrei.lupsa@electriccastle.ro</a></p></div><div class=col-sm-3><h3>Vendors</h3><p><a href=mailto:mihai.tamas@electriccastle.ro>mihai.tamas@electriccastle.ro</a></p></div><div class=col-sm-3><h3>Press Enquiries</h3><p><a href=mailto:press@electriccastle.ro>press@electriccastle.ro</a></p></div><div class=col-sm-3><h3>Other Enquiries</h3><p><a href=mailto:contact@electriccastle.ro>contact@electriccastle.ro</a></p></div></div></div></div></div></div>"
  );


  $templateCache.put('assets/views/sponsors/sponsors.tpl.html',
    "<div class=\"page-container page-container__bg-dark\"><div class=\"container sponsors-page\"><h4 class=text-center>Strategic Partner</h4><div class=row><div class=col-sm-4><a href=\"http://www.lidl.ro/\" target=_blank><img src=/assets/img/sponsors/2017/lidl.png class=center-block height=\"110\"></a></div></div><h4 class=text-center>Main Sponsor</h4><div class=row><div class=col-sm-4><a href=\"http://becks.ro/\" target=_blank><img src=/assets/img/sponsors/2017/becks.png class=\"center-block\"></a></div></div><h4 class=text-center>Major Sponsors</h4><div class=row><div class=col-sm-3><a href=\"https://www.bancatransilvania.ro/\" target=_blank><img src=/assets/img/sponsors/2017/bt.png class=center-block width=\"140\"></a></div><div class=col-sm-3><a href=\"http://www.coca-cola.ro/ro/home/\" target=_blank><img src=/assets/img/sponsors/2017/coca-cola.png class=center-block height=\"90\"></a></div><div class=col-sm-3><a href=\"http://www.jbscotch.com/\" target=_blank><img src=/assets/img/sponsors/2017/j&b.png class=center-block width=\"100\"></a></div></div><div class=row><div class=col-sm-3><a href=\"http://www.aperol.com/\" target=_blank><img src=/assets/img/sponsors/2017/aperol.png class=center-block width=\"130\"></a></div><div class=col-sm-3><a href=https://www.mastercard.ro/ro-ro.html target=_blank><img src=/assets/img/sponsors/2017/mc.png class=center-block width=\"110\"></a></div><div class=col-sm-3><a href=# target=_blank><img src=/assets/img/sponsors/2017/tastemakers.png class=center-block width=\"160\"></a></div></div><div class=row><div class=col-sm-3><a href=\"https://www.facebook.com/AHEADeventsRO/\" target=_blank><img src=/assets/img/sponsors/2017/ahead.png class=center-block width=\"150\"></a></div></div><h4 class=text-center>Sponsors</h4><div class=row><div class=col-sm-3><a href=https://www.enel.ro target=_blank><img src=/assets/img/sponsors/2017/enel.png width=130 class=\"center-block\"></a></div><div class=col-sm-3><a href=\"https://eurogsm.ro/\" target=_blank><img src=/assets/img/sponsors/eurogsm.png width=140 class=\"center-block\"></a></div><div class=col-sm-3><a href=\"https://gustullays.ro/\" target=_blank><img src=/assets/img/sponsors/lays.png width=160 class=\"center-block\"></a></div></div><div class=row><div class=col-sm-3><a href=\"http://www.fortech.ro/\" target=_blank><img src=/assets/img/sponsors/2017/fortech.png width=190 class=\"center-block\"></a></div><div class=col-sm-3><a href=\"http://www.nttdata.com/global/en/\" target=_blank><img src=/assets/img/sponsors/2017/ntt.png width=165 class=\"center-block\"></a></div><div class=col-sm-3><a href=https://www.nn.ro/acasa target=_blank><img src=/assets/img/sponsors/nn.png width=200 class=\"center-block\"></a></div></div><div class=row><div class=col-sm-3><a href=http://mcdonalds.ro target=_blank><img src=/assets/img/sponsors/2017/mcdonalds.png width=110 class=\"center-block\"></a></div><div class=col-sm-3><a href=http://ro.kronospan-express.com/ro target=_blank><img src=/assets/img/sponsors/krono.png width=190 class=\"center-block\"></a></div><div class=col-sm-3><a href=\"http://www.farmtech.ro/\" target=_blank><img src=/assets/img/sponsors/2017/schaeffer.png width=190 class=\"center-block\"></a></div></div><div class=row><div class=col-sm-3><a href=\"http://www.perlaharghitei.ro/\" target=_blank><img src=/assets/img/sponsors/perla.png class=center-block width=\"190\"></a></div><div class=col-sm-3><a href=\"http://www.persil.ro/\" target=_blank><img src=/assets/img/sponsors/2017/persil.png class=center-block width=\"130\"></a></div><div class=col-sm-3><a href=\"https://www.burn.com/\" target=_blank><img src=/assets/img/sponsors/2017/burn.png class=center-block width=\"190\"></a></div></div><h4 class=text-center>Official car</h4><div class=row><div class=col-sm-3><a href=http://www.smart.ro/ro/ro/index.html target=_blank><img src=/assets/img/sponsors/smart.png width=160 class=\"center-block\"></a></div></div><h4 class=\"text-center padding-bottom-20\">#weshowcase</h4><div class=row><div class=\"col-sm-3 padding-bottom-30\"><a href=https://www.quickmobile.ro/brand/abc-tech target=_blank><img src=/assets/img/sponsors/weshowcase/abc-tech.png width=120 class=\"center-block\"></a></div><div class=\"col-sm-3 padding-bottom-30\"><a href=\"https://www.buzzsneakers.com/\" target=_blank><img src=/assets/img/sponsors/weshowcase/buzz.png width=120 class=\"center-block\"></a></div><div class=\"col-sm-3 padding-bottom-30\"><a href=https://www.dizainar.ro target=_blank><img src=/assets/img/sponsors/weshowcase/dizainar.png width=120 class=\"center-block\"></a></div></div><div class=row><div class=col-sm-3><a href=\"https://www.farmec.ro/\" target=_blank><img src=/assets/img/sponsors/weshowcase/farmec.png width=110 class=\"center-block\"></a></div><div class=col-sm-3><a href=\"https://bicicletapegas.ro/\" target=_blank><img src=/assets/img/sponsors/weshowcase/pegas.png width=150 class=\"center-block\"></a></div><div class=col-sm-3><a href=\"http://www.targuldecariere.ro/\" target=_blank><img src=/assets/img/sponsors/weshowcase/tdc.png width=120 class=\"center-block\"></a></div></div><h4 class=text-center>Partners</h4><div class=row><div class=col-sm-3><a href=http://facebook.com/booha target=_blank><img src=/assets/img/sponsors/booha.png width=120 class=\"center-block\"></a></div><div class=col-sm-3><a href=https://www.facebook.com/boohabar target=_blank><img src=/assets/img/sponsors/bb.png width=120 class=\"center-block\"></a></div><div class=col-sm-3><a href=\"http://www.americanexperience.ro/en/\" target=_blank><img src=/assets/img/sponsors/ae.png width=120 class=\"center-block\"></a></div></div><div class=row><div class=col-sm-3><a href=\"http://www.young-advertising.ro/\" target=_blank><img src=/assets/img/sponsors/young.png width=110 class=\"center-block\"></a></div><div class=col-sm-3><a href=\"http://impress.ro/\" target=_blank><img src=/assets/img/sponsors/impress.png width=150 class=\"center-block\"></a></div><div class=col-sm-3><a href=http://www.mediatrust.ro/english target=_blank><img src=/assets/img/sponsors/mediaTrust.png width=140 class=\"center-block\"></a></div></div><div class=row><div class=col-sm-3><a href=http://reea.net/en target=_blank><img src=/assets/img/sponsors/reea.png width=120 class=\"center-block\"></a></div><div class=col-sm-3><a href=https://home.kpmg.com/ro/en/home.html target=_blank><img src=/assets/img/sponsors/kpmg.png width=120 class=\"center-block\"></a></div><div class=col-sm-3><a href=# target=_blank><img src=/assets/img/sponsors/2017/aroc.png width=110 class=\"center-block\"></a></div></div><div class=row><div class=col-sm-3><a href=\"http://amprenta-advertising.ro/\" target=_blank><img src=/assets/img/sponsors/2017/amprenta.png width=155 class=\"center-block\"></a></div><div class=col-sm-3><a href=\"https://be-at.tv/\" target=_blank><img src=/assets/img/sponsors/2017/be-at.jpg width=140 class=\"center-block\"></a></div><div class=col-sm-3><a href=\"http://www.ministryofsound.com/\" target=_blank><img src=/assets/img/sponsors/2017/mos.png width=90 class=\"center-block\"></a></div></div><div class=row><div class=col-sm-3><a href=\"http://mainoi.ro/\" target=_blank><img src=/assets/img/sponsors/mainoi.png width=130 class=\"center-block\"></a></div><div class=col-sm-3><a href=\"http://www.fibrexco.ro/\" target=_blank><img src=/assets/img/sponsors/2017/fibrex.png width=140 class=\"center-block\"></a></div><div class=col-sm-3><a href=\"https://www.getpony.ro/\" target=_blank><img src=/assets/img/sponsors/2017/pony.png width=130 class=\"center-block\"></a></div></div><div class=row><div class=col-sm-3><a href=\"http://www.csiportal.com/ro/\" target=_blank><img src=/assets/img/sponsors/csi.png width=110 class=\"center-block\"></a></div><div class=col-sm-3><a href=\"http://www.djsuperstore.ro/\" target=_blank><img src=/assets/img/sponsors/djsuperstore.png width=140 class=\"center-block\"></a></div><div class=col-sm-3><a href=\"https://www.aramisfeeling.ro/\" target=_blank><img src=/assets/img/sponsors/aramis.png width=140 class=\"center-block\"></a></div></div><div class=row><div class=\"col-sm-3 padding-top-30\"><a href=\"http://www.devronbike.ro/\" target=_blank><img src=/assets/img/sponsors/2017/devron.png width=140 class=\"center-block\"></a></div><div class=\"col-sm-3 padding-top-30\"><a href=\"https://www.flixbus.ro/\" target=_blank><img src=/assets/img/sponsors/2017/flixbus.png width=120 class=\"center-block\"></a></div><div class=\"col-sm-3 padding-top-30\"><a href=\"http://www.alisgrup.autogari.ro/\" target=_blank><img src=/assets/img/sponsors/2017/alis.png width=120 class=\"center-block\"></a></div></div><div class=row><div class=\"col-sm-3 padding-top-30\"><a href=\"http://alisholidays.ro/\" target=_blank><img src=/assets/img/sponsors/2017/alis-holidays.png width=120 class=\"center-block\"></a></div><div class=\"col-sm-3 padding-top-30\"><a href=\"http://www.morphoza.ro/\" target=_blank><img src=/assets/img/sponsors/2017/morphoza.png width=150 class=\"center-block\"></a></div><div class=\"col-sm-3 padding-top-30\"><a href=http://www.albalact.ro/brand-uri/brand/zuzu/produse/iaurt.html target=_blank><img src=/assets/img/sponsors/2017/zuzu.png width=110 class=\"center-block\"></a></div></div><div class=row><div class=\"col-sm-3 padding-top-30\"><a href=\"https://www.facebook.com/vestigecentreville/\" target=_blank><img src=/assets/img/sponsors/2017/vestige.png width=150 class=\"center-block\"></a></div><div class=\"col-sm-3 padding-top-30\"><a href=\"http://thaitherapy.ro/\" target=_blank><img src=/assets/img/sponsors/2017/thaiterapy.png width=110 class=\"center-block\"></a></div></div><h4 class=text-center>Accommodation</h4><div class=row><div class=col-sm-3><a href=\"http://hotelnapoca.ro/\" target=_blank><img src=/assets/img/sponsors/grandhotel.png width=150 class=\"center-block\"></a></div><div class=col-sm-3><a href=\"https://universt.ro/\" target=_blank><img src=/assets/img/sponsors/univers-t.png width=110 class=\"center-block\"></a></div><div class=col-sm-3><a href=\"http://www.operaplaza.ro/\" target=_blank><img src=/assets/img/sponsors/opera-plaza.png width=150 class=\"center-block\"></a></div></div><h4 class=text-center>Authorities</h4><div class=row><div class=col-sm-3><a href=\"http://www.cjcluj.ro/\" target=_blank><img src=/assets/img/sponsors/consiliul-judetean-cluj.png width=170px class=\"center-block\"></a></div><div class=col-sm-3><a href=\"http://www.comunabontida.ro/\" target=_blank><img src=/assets/img/sponsors/primaria-bontida.png width=170px class=\"center-block\"></a></div><div class=col-sm-3><a href=\"http://www.transylvaniatrust.ro/\" target=_blank><img src=/assets/img/sponsors/transylvania-trust.png width=180px class=\"center-block\"></a></div></div><div class=row><div class=col-sm-3><a href=\"http://www.rosilva.ro/\" target=_blank><img src=/assets/img/sponsors/2017/romsilva.png width=180px class=\"center-block\"></a></div></div><h4 class=text-center>Media Partners</h4><div class=row><div class=col-sm-2><a href=\"http://kissfm.ro/\" target=_blank><img src=/assets/img/sponsors/kissfm.png width=90 class=\"center-block\"></a></div></div><div class=row><div class=col-sm-2><a href=\"https://www.cosmopolitan.ro/\" target=_blank><img src=/assets/img/sponsors/cosmo.png width=130 class=\"center-block\"></a></div><div class=col-sm-2><a href=\"https://www.natgeo.ro/\" target=_blank><img src=/assets/img/sponsors/natgeo.png width=130 class=\"center-block\"></a></div><div class=col-sm-2><a href=\"https://www.facebook.com/BeauMondeStyle/\" target=_blank><img src=/assets/img/sponsors/beau.png width=130 class=\"center-block\"></a></div><div class=col-sm-2><a href=\"https://www.menshealth.ro/\" target=_blank><img src=/assets/img/sponsors/mens.png width=130 class=\"center-block\"></a></div></div><div class=row><div class=col-sm-2><a href=\"https://www.marieclaire.ro/\" target=_blank><img src=/assets/img/sponsors/marie-claire.png width=125 class=\"center-block\"></a></div><div class=col-sm-2><a href=https://www.vice.com/ro target=_blank><img src=/assets/img/sponsors/vice.png width=110 class=\"center-block\"></a></div><div class=col-sm-2><a href=\"http://www.clujlife.com/\" target=_blank><img src=/assets/img/sponsors/cluj-life.png width=110 class=\"center-block\"></a></div><div class=col-sm-2><a href=\"http://www.clashmusic.com/\" target=_blank><img src=/assets/img/sponsors/2017/clash.png width=100 class=\"center-block\"></a></div></div><div class=row><div class=col-sm-2><a href=\"http://www.gigwise.com/\" target=_blank><img src=/assets/img/sponsors/2017/g-square.png width=60 class=\"center-block\"></a></div><div class=col-sm-2><a href=\"http://www.sub25.ro/\" target=_blank><img src=/assets/img/sponsors/2017/sub25.png width=60 class=\"center-block\"></a></div><div class=col-sm-2><a href=\"http://www.catavencii.ro/\" target=_blank><img src=/assets/img/sponsors/2017/catavencii.png width=120 class=\"center-block\"></a></div></div><h4 class=text-center>Partner Locations</h4><div class=row><div class=col-sm-2><a href=\"https://www.facebook.com/Acuarelabistro/\" target=_blank><img src=/assets/img/sponsors/locations/acuarela.png width=110 class=\"center-block\"></a></div><div class=col-sm-2><a href=\"https://www.facebook.com/hostelcosteltimisoara/\" target=_blank><img src=/assets/img/sponsors/locations/costel.png width=100 class=\"center-block\"></a></div><div class=col-sm-2><a href=\"https://www.facebook.com/energiea/\" target=_blank><img src=/assets/img/sponsors/locations/energia.png width=100 class=\"center-block\"></a></div><div class=col-sm-2><a href=\"https://www.facebook.com/NuDoarOPauzadeCafea/\" target=_blank><img src=/assets/img/sponsors/locations/fika.png width=100 class=\"center-block\"></a></div></div><div class=row><div class=col-sm-2><a href=\"https://www.facebook.com/shoph2o/\" target=_blank><img src=/assets/img/sponsors/locations/h20.png width=110 class=\"center-block\"></a></div><div class=col-sm-2><a href=https://www.facebook.com/pages/Meru/278684655629362 target=_blank><img src=/assets/img/sponsors/locations/meru.png width=120 class=\"center-block\"></a></div><div class=col-sm-2><a href=\"https://www.facebook.com/NeataOmeletteBistro/\" target=_blank><img src=/assets/img/sponsors/locations/neata.png width=100 class=\"center-block\"></a></div><div class=col-sm-2><a href=\"https://www.facebook.com/victor.freshtogo/\" target=_blank><img src=/assets/img/sponsors/locations/victor.png width=100 class=\"center-block\"></a></div></div></div></div>"
  );


  $templateCache.put('assets/views/stories/stories-article.tpl.html',
    "<div class=\"page-container page-container__bg-light stories-page story-details\" ng-if=!stac.shouldDisplayNoNewsItem()><div class=container><a ui-sref=ElectricCastlePublic.Stories class=back><i class=\"fa fa-chevron-left\" aria-hidden=true></i> Back to all items in the Journal</a></div><section class=\"article-details container\" itemscope itemtype=http://schema.org/Article><div class=\"col-lg-10 col-lg-offset-1 col-md-12 col-md-offset-0\"><img ng-src={{stac.newsItem.headerImage}} class=\"img-responsive\"><h1 itemprop=name class=text-center>{{stac.newsItem.title}}</h1><h2 class=text-center>{{stac.newsItem.subtitle}}</h2><div class=article-text itemprop=articleBody ng-bind-html=stac.trustHtml(stac.newsItem.content)></div><h5 class=margin-bottom-30 itemprop=author>{{stac.newsItem.author}} <span>{{stac.newsItem.publishedAt}}</span></h5></div></section><section class=\"article-share container\"><div class=\"col-lg-10 col-lg-offset-1 col-md-12 col-md-offset-0\"><h5>Share:</h5><button class=\"button button--has-border button--round\" socialshare socialshare-provider=facebook socialshare-url={{stac.shareUrl}}><i class=\"fa fa-facebook\"></i></button> <button class=\"button button--has-border button--round\" socialshare socialshare-provider=twitter socialshare-text=\"{{stac.newsItem.subtitle}} #electriccastle5\" socialshare-url={{stac.shareUrl}}><i class=\"fa fa-twitter\"></i></button> <button class=\"button button--has-border button--round\" socialshare socialshare-provider=google socialshare-url={{stac.shareUrl}}><i class=\"fa fa-google-plus\"></i></button> <button class=\"button button--has-border button--round\" socialshare socialshare-provider=skype socialshare-url={{stac.shareUrl}}><i class=\"fa fa-skype\"></i></button></div></section><hr><section class=\"article-list container\" ng-if=!stac.shouldDisplayNoRelatedNews()><h4 class=text-center>You should also read this:</h4><div class=\"col-md-3 col-sm-6\" ng-repeat=\"news in stac.newsItem.related\"><a ui-sref=\"ElectricCastlePublic.StoriesArticle({ articleId : news.entityId, articleTitle : news.formattedTitle})\"><img ng-src={{news.thumbnail}} class=\"img-responsive\"><div class=\"title-area hvr-overline-from-left\"><h5>{{news.title}}</h5><p>{{news.subtitle}}</p></div></a></div></section></div><div class=newsroom-page ng-if=stac.shouldDisplayNoNewsItem()><section class=\"article-list container\"><h5 class=\"padding-top-40 text-center\">There is no article here. Please go back to the <a ui-sref=ElectricCastlePublic.Stories>Journal home</a>.</h5></section></div>"
  );


  $templateCache.put('assets/views/stories/stories.tpl.html',
    "<div class=\"page-container stories-page\"><div class=container journal-grid=stc.getNews()><div class=bar><div class=bar__bg></div><div class=filter><button class=\"action filter__item\" data-filter=*><span class=action__text>All</span></button> <button class=\"action filter__item\" data-filter=.news><span class=action__text>News</span></button> <button class=\"action filter__item\" data-filter=.story><span class=action__text>Stories</span></button> <button class=\"action filter__item\" data-filter=.music><span class=action__text>Music</span></button> <button class=\"action filter__item\" data-filter=.video><span class=action__text>Video</span></button></div></div></div><section class=\"article-list container\"><h1>The Journal</h1><div class=grid><div class=grid__sizer></div><div class=\"item grid__item {{news.category}}\" ng-class=\"{'grid__item--size-a': $index % 3 === 0}\" ng-repeat=\"news in stc.getNews()\"><a ui-sref=\"ElectricCastlePublic.StoriesArticle({ articleId : news.entityId, articleTitle : news.formattedTitle})\"><span class=category>{{news.category}}</span> <img ng-src={{::news.thumbnail}} class=\"img-responsive\"><div class=title-area><h5>{{::news.title}}</h5><p>{{::news.subtitle}}</p></div></a></div></div></section></div>"
  );


  $templateCache.put('assets/views/tickets/basket.tpl.html',
    "<div class=\"page-container page-container__bg-grey\"><div class=\"error-message animated bounceInDown\" ng-show=bc.flags.showError><div class=container><div class=row><div class=\"col-lg-10 col-lg-offset-1\"><div class=text>{{bc.flags.error}}</div></div></div></div></div><div class=\"container basket-page\"><div class=row><div class=\"col-lg-10 col-lg-offset-1\"><div class=\"pull-right text-right hidden-xs\"><strong class=padding-right-15>Continue shopping</strong> <a class=btn-link title=Tickets ui-sref=ElectricCastlePublic.Tickets analytics-on analytics-event=\"Back to shop\" analytics-category=Shop><img src=\"/assets/img/tickets/icon-ticket-checkout.svg\"></a>&nbsp; <a type=button class=btn-link ui-sref=ElectricCastlePublic.Shop title=Merchandise analytics-on analytics-event=\"Back to tickets\" analytics-category=Shop><img src=\"/assets/img/tickets/icon-tshirt-checkout.svg\"></a></div><h1>Checkout</h1><form name=basketForm><h2>{{'BASKET.SHOPPING_CART' | translate}} ({{bc.getNumberOfProducts()}} items)</h2><table class=table><thead><tr><th width=40%>Description</th><th width=\"\" class=\"text-center hidden-xs\">Quantity</th><th class=\"text-right hidden-xs\" width=24%>Amount</th><th width=12% class=hidden-xs></th></tr></thead><tbody><tr ng-repeat=\"(key, item) in bc.products\" ng-class=\"{'error' : item.error}\"><td class=desc><span ng-switch=item.type><img ng-switch-when=virtual src=\"/assets/img/tickets/icon-ticket-yellow.png\"> <img ng-switch-when=simple src=\"/assets/img/tickets/icon-tshirt-yellow.png\"> <img ng-switch-default src=\"/assets/img/tickets/icon-tshirt-yellow.png\"></span><h5>{{item.name}}</h5></td><td class=qty><input type=number ng-model=item.qty min=1 max=6 ng-change=bc.onQuantityChanged(); ng-disabled=\"item.cannotChangeQty\"></td><td class=\"text-right price\"><label class=visible-xs>Amount</label><h5><strong>{{(item.price * item.qty).toFixed(2)}}&nbsp;RON</strong> ({{(item.priceEur * item.qty).toFixed(2)}}&nbsp;EUR)</h5></td><td class=\"text-right remove\"><button type=button class=btn-link ng-click=bc.removeProduct(key)>Remove</button></td></tr><tr ng-if=bc.shouldDisplayTotalItem(bc.retrieveBasketTotals().shipping)><td class=desc><img src=\"/assets/img/tickets/icon-tshirt-yellow.png\"><h5>Shipping</h5></td><td class=qty></td><td class=\"text-right price\"><h5><strong>{{bc.retrieveBasketTotals().shipping}} RON</strong> ({{bc.retrieveBasketTotals().shippingEur}} EUR)</h5></td><td class=remove></td></tr><tr ng-if=bc.shouldDisplayDiscountItem()><td class=desc><img src=\"/assets/img/tickets/icon-discount-yellow.png\"><h5>Discount</h5></td><td class=qty></td><td class=\"text-right price\"><h5><strong>-{{bc.retrieveBasketTotals().discount}} RON</strong> (-{{bc.retrieveBasketTotals().discountEur}} EUR)</h5></td><td class=\"text-right remove\"><button ng-click=bc.openRedeemCard() class=\"btn-link pointer\" ng-if=!bc.shouldDisplayCouponOptionItem(bc.retrieveBasketTotals().discount)>{{'BASKET.REDEEM_GIFT_CARD' | translate}}</button> <button ng-click=bc.removeCoupon() class=\"btn-link pointer\" ng-if=bc.shouldDisplayCouponOptionItem(bc.retrieveBasketTotals().discount)>Remove coupon</button></td></tr><tr ng-show=bc.shouldDisplayNoProducts()><td colspan=4><h4 class=text-center ng-bind-html=\"'BASKET.NO_PRODUCT' | translate\"></h4></td></tr></tbody><tfoot><tr ng-if=!bc.shouldDisplayNoProducts()><td class=hidden-xs></td><td class=\"text-uppercase text-center total\">Total:</td><td class=text-right>{{bc.retrieveBasketTotals().total}} RON&nbsp; <span class=not-bold>({{bc.retrieveBasketTotals().totalEur}} EUR)</span></td><td class=text-right></td></tr></tfoot></table><div ng-if=\"!bc.shouldDisplayNoProducts() && !bc.shouldDisplayTotalsMessage()\"><div class=\"row checkout-area\"><div class=\"col-md-6 col-sm-6\"><p class=\"margin-bottom-5 margin-top-10\"><label class=\"tickets-checkbox text-grey-dark\" for=termsPayment><input type=checkbox id=termsPayment ng-model=\"bc.flags.termsPaymentAccepted\"> <span class=tickets-checkbox__tick-box></span> &nbsp;I agree with the <a ui-sref=ElectricCastlePublic.RulesAndRegulations target=_blank>rules and regulations</a>.</label></p></div><div class=\"col-md-6 col-sm-6 text-right\"><button type=button class=\"std-button std-button--light std-button--wide\" ng-click=bc.checkout(false) ng-disabled=\"bc.flags.isCheckoutButtonDisabled || !bc.flags.termsPaymentAccepted\" analytics-on analytics-event=\"Cart checkout - Full\" analytics-category=Shop>Pay Now {{bc.retrieveBasketTotals().total}} RON</button></div></div></div><div ng-if=\"!bc.shouldDisplayNoProducts() && bc.shouldDisplayTotalsMessage()\"><div class=row><div class=col-md-12><div class=\"payment-method selected\"><p>You will be asked to login or register before checkout.</p><button type=button class=\"std-button std-button--light std-button--wide button-block margin-top-20\" ng-click=bc.checkout() ng-disabled=bc.flags.isCheckoutButtonDisabled analytics-on analytics-event=\"Cart checkout\" analytics-category=Shop>Continue to checkout</button></div></div></div></div><div class=clearfix></div></form><div ng-show=bc.shouldDisplayTotalsMessage()><p class=\"margin-bottom-30 margin-top-20\">* {{'BASKET.ADDITIONAL_INFO.TOTALS' | translate}}</p></div></div></div></div></div>"
  );


  $templateCache.put('assets/views/tickets/camping-confirmation.tpl.html',
    "<article class=camping-confirmation><header><div class=container><h1 class=text-uppercase>{{'TICKETS_V2.CAMPING_CONFIRMATION.TITLE' | translate}}</h1><p class=margin-top-20 bind-html-compile=\"'TICKETS_V2.CAMPING_CONFIRMATION.SUBTITLE' | translate\"></p></div></header><div class=container><div class=premium-camping-add-ons><h3 class=text-uppercase>{{'TICKETS_V2.PREMIUM_CAMPING_ADD_ONS' | translate}}</h3><ul class=list-unstyled><li ng-repeat=\"campingOption in campingOptions\"><figure><img ng-src={{campingOption.thumbnails[0]}} alt=\"{{'TICKETS_V2.CAMPING_ADD_ON' | translate}}\"><figcaption class=text-center>{{::campingOption.name}}</figcaption></figure></li></ul></div><div class=margin-bottom-10><button class=\"text-uppercase button-confirm\" ng-click=ccc.cb.goToCamping() analytics-on analytics-event=\"Go to camping\" analytics-category=\"Tickets new\">{{'TICKETS_V2.CAMPING_CONFIRMATION.GO_BACK_TO_CAMPING' | translate}}</button></div><div><button class=\"text-uppercase button-confirm\" ng-click=ccc.cb.finalize() analytics-on analytics-event=\"Finalize from message\" analytics-category=\"Tickets new\">{{'TICKETS_V2.CAMPING_CONFIRMATION.FINALIZE' | translate}}</button></div></div></article>"
  );


  $templateCache.put('assets/views/tickets/from-abroad.tpl.html',
    "<div class=\"page-container page-container__bg-light\"><div class=\"container from-abroad\"><div id=festicket-content><noscript><iframe src='//www.festicket.com/api/1/embed/package_list.html?festival=electric-castle-2017&amp;referrer=sc-festival-tickets-management' height='3500px' width='100%' frameborder='0'></iframe></noscript><festicket></festicket></div></div></div>"
  );


  $templateCache.put('assets/views/tickets/no-camping.tpl.html',
    "<article class=camping-confirmation><header><div class=container><h1 class=text-uppercase bind-html-compile=\"'TICKETS_V2.NO_CAMPING.TITLE' | translate\"></h1></div></header><div class=container><div class=\"margin-bottom-10 margin-top-20\"><button class=\"text-uppercase button-confirm\" ng-click=ncc.cb.goToCamping() analytics-on analytics-event=\"Go back camping\" analytics-category=\"Tickets new\">{{'TICKETS_V2.NO_CAMPING.GO_BACK_TO_CAMPING' | translate}}</button></div><div><button class=\"text-uppercase button-confirm\" ng-click=ncc.cb.finalize() analytics-on analytics-event=\"Finalize from message\" analytics-category=\"Tickets new\">{{'TICKETS_V2.NO_CAMPING.FINALIZE' | translate}}</button></div></div></article>"
  );


  $templateCache.put('assets/views/tickets/no-more-tickets-on-site.tpl.html',
    "<div class=no-more-tickets ng-class=\"{'noHeader': tc.noHeader}\"><div class=\"container tickets-page padding-top-100 padding-bottom-100\"><h1 class=closed-title>We are closed!</h1><h3 class=closed-sub-title>Get your ticket, camping pass or upgrade at the festival entrance.</h3><article class=item><aside class=item__image><img src=/assets/img/svg/ticket-placeholder.svg class=\"img-responsive center-block\" alt=\"\" width=\"80\"></aside><section class=item__description>4 Day Pass</section><section class=item__price>399 Lei</section></article><article class=item><aside class=item__image><img src=/assets/img/svg/ticket-placeholder.svg class=\"img-responsive center-block\" alt=\"\" width=\"80\"></aside><section class=item__description><span>4 Day Pass</span> <span class=item__description--vip>VIP</span></section><section class=item__price>689 Lei</section></article><article class=item><aside class=item__image><img src=/assets/img/svg/ticket-placeholder.svg class=\"img-responsive center-block\" alt=\"\" width=\"80\"></aside><section class=item__description><span>4 Day Pass</span> <span class=item__description--vip>upgrade to VIP</span></section><section class=\"item__price item__price--small\">The price will vary depending on the price of the ticket you have already bought.</section></article><article class=item><aside class=item__image><img src=/assets/img/svg/ticket-placeholder.svg class=\"img-responsive center-block\" alt=\"\" width=\"80\"></aside><section class=item__description>Day 2 Ticket - July 15</section><section class=item__price>159 Lei</section></article><article class=item><aside class=item__image><img src=/assets/img/svg/ticket-placeholder.svg class=\"img-responsive center-block\" alt=\"\" width=\"80\"></aside><section class=item__description>Day 3 Ticket - July 16</section><section class=item__price>159 Lei</section></article><article class=item><aside class=item__image><img src=/assets/img/svg/ticket-placeholder.svg class=\"img-responsive center-block\" alt=\"\" width=\"80\"></aside><section class=item__description>Day 4 Ticket - July 17</section><section class=item__price>159 Lei</section></article><article class=item><aside class=item__image><img src=/assets/img/svg/ticket-placeholder.svg class=\"img-responsive center-block\" alt=\"\" width=\"80\"></aside><section class=item__description><span>Day Ticket</span> <span class=item__description--vip>VIP</span></section><section class=item__price>249 Lei</section></article><article class=item><aside class=item__image><img src=/assets/img/svg/ticket-placeholder.svg class=\"img-responsive center-block\" alt=\"\" width=\"80\"></aside><section class=item__description><span>Day Ticket</span> <span class=item__description--vip>upgrade to VIP</span></section><section class=\"item__price item__price--small\">The price will vary depending on the price of the ticket you have already bought.</section></article><article class=item><aside class=item__image><img src=/assets/img/svg/camping-placeholder.svg class=\"img-responsive center-block\" alt=\"\" width=\"80\"></aside><section class=item__description>All Camping Options</section><section class=item__price>SOLD OUT</section></article></div></div>"
  );


  $templateCache.put('assets/views/tickets/tickets-cart.tpl.html',
    "<aside class=user-cart ng-class=\"{'is-visible': isCartVisible()}\"><h2 class=text-uppercase><span>{{'TICKETS_V2.TICKETS_CART.TITLE' | translate}}</span> <i class=\"fa fa-remove pull-right hidden-lg hidden-md cursor-pointer\" ng-click=closeModal()></i></h2><i class=\"fa fa-angle-double-left checkout-your-cart hidden-lg hidden-md\" ng-show=isUserCartTriggerVisible ng-class=\"{'is-pulsating': pulsating}\" ng-click=openTicketsCart()></i><ul class=cart__items><li class=item ng-repeat=\"item in tcc.cb.getItems();\"><span class=\"item__quantity text-yellow-base\">{{item.quantity}} X</span> <span class=\"item__name text-yellow-base text-uppercase\">{{::item.name}}</span> <span class=\"item__price text-light pull-right\">{{'TICKETS.SECTION.PRICE' | translate: {price: item.price * item.quantity} }}</span></li><li class=\"no-items text-light\" ng-hide=tcc.cb.thereAreProducts();>{{'TICKETS_V2.TICKETS_CART.EMPTY' | translate}}</li></ul><div class=\"user-cart__total text-light\"><strong class=text-uppercase>{{'TICKETS_V2.TICKETS_CART.TOTAL' | translate}}</strong> <span class=pull-right>{{'TICKETS.SECTION.PRICE' | translate: {price: tcc.cb.getTotal()} }}</span></div><button class=\"button button-checkout button-block text-uppercase margin-top-70\" ng-click=tcc.cb.addToCart(); analytics-on analytics-event=\"Finalize from cart\" analytics-category=\"Tickets new\">{{'TICKETS_V2.TICKETS_CART.CHECKOUT' | translate}}</button> <button class=\"button button-start-over button-block text-uppercase margin-top-20\" ng-click=tcc.cb.startOver() analytics-on analytics-event=\"Start over\" analytics-category=\"Tickets new\">{{'TICKETS_V2.TICKETS_CART.START_OVER' | translate}}</button><div class=help><h3>{{'TICKETS_V2.TICKETS_CART.NEED_HELP' | translate}}</h3><p bind-html-compile=\"'TICKETS_V2.TICKETS_CART.MAIL_AND_LINK' | translate: {mail: 'orders@electriccastle.ro', sref: 'ElectricCastlePublic.Info.Faq'}\"></p></div></aside>"
  );


  $templateCache.put('assets/views/tickets/tickets-info-bar.tpl.html',
    "<div class=\"product-info-bar animated slideInDown\"><div class=container><div class=\"col-md-6 col-sm-6 hidden-sm hidden-xs no-padding-left padding-top-15\"><span>{{'TICKETS.INFO_BAR.MESSAGES.NOTHING_SELECTED' | translate}}</span></div><div class=\"col-md-4 col-sm-8 col-xs-6 text-right balance\" ng-bind-html=\"'TICKETS.INFO_BAR.TOTAL_VALUE' | translate: {totalPrice: trc.cb.getTotalPrice().total, totalPriceEur: trc.cb.getTotalPrice().totalEur}\"></div><div class=\"col-md-2 col-sm-4 col-xs-6\"><button ng-click=trc.cb.finalize() ng-disabled=!trc.cb.canFinalize()>Checkout</button></div></div></div>"
  );


  $templateCache.put('assets/views/tickets/tickets-info.tpl.html',
    "<div class=\"page-container page-container__bg-grey\"><div class=\"container tickets-info-page\"><div class=row id=tt><div class=col-md-12><h1 class=margin-bottom-20>How to buy tickets</h1><hr class=\"margin-bottom-0\"></div><div class=col-md-12><ol class=how><li><span>1.</span><div class=\"pull-left padding-bottom-10\"><strong class=text-large>Go to the <a ui-sref=ElectricCastlePublic.Tickets>tickets page</a></strong>.<br>If you're from abroad, visit <a href=\"https://www.festicket.com/packages/electric-castle-2017/?referrer=sc-festival-tickets-management&shared_from=partner_linkgen&utm_source=www.electriccastle.co.uk&utm_campaign=Electric%20Castle%202017&utm_medium=Partner%20-%20Supplier\" target=_blank>Festicket</a>.<br>If you’re from The Netherlands or Belgium, visit <a href=\"https://festival.travel/festivals/electric-castle/?utm_source=electriccastle.ro&utm_medium=verwijzing&utm_campaign=official-website\" target=_blank>Festival.Travel</a>.<br><br>If you want to buy a hard-copy ticket you can get them from <a ng-click=tic.openPartnerLocations() class=pointer>our partner locations</a>.</div><a ui-sref=ElectricCastlePublic.Tickets class=\"std-button std-button--light std-button--wide pull-right\">Go now</a><div class=clearfix></div></li><li><span>2.</span><div class=\"pull-left padding-bottom-10\"><strong class=text-large>Choose your Pass.</strong><br>&bull;&nbsp; General Access<br>&bull;&nbsp; General Access with Camping<br>&bull;&nbsp; Premium Pass<br>&bull;&nbsp; Premium Pass with Camping<br>&bull;&nbsp; The Black Ticket</div><div class=clearfix></div></li><li><span>3.</span><div class=\"pull-left padding-bottom-10\"><strong class=text-large>Enhance your camping experience with one of our awesome add-ons:</strong><br>&bull;&nbsp; Pre-Pitched Tents<br>&bull;&nbsp; Dream Tents<br>&bull;&nbsp; Swedish Lodges<br>&bull;&nbsp; Panorama Tents</div><a ui-sref=ElectricCastlePublic.Tickets class=\"std-button std-button--light std-button--wide pull-right\">See all</a><div class=clearfix></div></li><li><span>4.</span> <strong class=\"text-large pull-left margin-top-10 padding-bottom-10\">Click <em>Finalize Order</em>, then login or create your account.</strong><div class=clearfix></div></li><li><span>5.</span> <strong class=\"text-large pull-left margin-top-10 padding-bottom-10\">Click <em>Pay Now</em>.</strong><div class=clearfix></div></li><li><span>6.</span> <strong class=\"text-large pull-left margin-top-10 padding-bottom-10\">Make the payment by entering your bank card details.</strong><div class=clearfix></div></li><li><span>7.</span> <strong class=\"text-large pull-left margin-top-10 padding-bottom-10\">Keep your confirmation email safe!</strong><div class=clearfix></div></li><li><span>8.</span><div class=\"pull-left padding-bottom-10\"><strong class=text-large>(Optional) Upgrade your ticket</strong><br>In order to upgrade you pass you need to login with our account and you will see the upgrade option in your orders section.<br>Any ticket can be upgraded, for example from General Pass to General Pass with Camping or from General Pass to Premium Pass.</div><div class=clearfix></div></li><li><span>9.</span><div class=\"pull-left padding-bottom-10\"><strong class=text-large>Receive/download your tickets(s)</strong><br>After the purchase, you will receive the order confirmation on your email. Keep that email!<br>Also, on your account, on the <em>Orders</em> section you will see the purchased tickets and the individual codes for each.<br><br>Starting mid-April you will be able to download your tickets as PDF files.<br><br>If your ticket if a gift and need your ticket right now, write us an email at contact@electriccastle.ro and we'll help you out.</div><div class=clearfix></div></li></ol></div></div></div></div>"
  );


  $templateCache.put('assets/views/tickets/tickets-redesign.tpl.html',
    "<main class=\"page-container page-container__bg\"><div class=\"tickets-redesign page\" ng-if=!trc.cb.noTickets()><tickets-info-bar></tickets-info-bar><section class=container><div class=row><div class=\"col-lg-10 col-lg-offset-1\"><p class=\"text-right margin-top-10 margin-right-10 hidden-xs\">Choose one of our specially curated <a ui-sref=ElectricCastlePublic.Packages><strong>travel packages</strong></a> to enhance your stay.</p><section ng-repeat=\"block in trc.cb.get()\"><section ng-if=\"block.data.isDeal && block.items.length\" class=deals><div class=deals__bg></div><header class=deals__header><p class=deals__header__title><strong>Find below your limited special offers</strong></p><p class=deals__header__subtitle>Get one now and we'll meet at the castle!</p></header><section class=\"flex tickets__content\"><article class=\"tickets__item flex {{ticket.data.cssClass}}\" ng-class=\"{'item-sold-out': ticket.isSoldout}\" ng-repeat=\"ticket in block.items\"><div><header class=tickets__item__header><p class=tickets__item__title>{{ticket.title}}</p></header><section class=tickets__item__content><div class=tickets__item__description bind-html-compile=ticket.description></div></section></div><img ng-if=ticket.isSoldout src=/assets/img/tickets/sold-out.png width=100 class=\"sold-out\"><footer class=tickets__item__footer><div class=tickets__item__price ng-if=\"ticket.price > 0\">{{ticket.price}}&nbsp;RON ({{ticket.priceEur}}&nbsp;EUR) <strike ng-if=ticket.hasPriceFinal>{{ticket.priceFinal}} RON&nbsp;&nbsp;({{ticket.priceFinalEur}} EUR)</strike></div><div class=\"flex flex-space-between flex-v-center controls\" ng-if=!ticket.isComingSoon><h-number value=ticket.quantity min=1 max=6 step=1 class=tickets__item__number></h-number><button class=tickets__item__select ng-click=trc.cb.onProductAdded(ticket) ng-disabled=ticket.isSoldout>Add to cart</button></div><h3 ng-if=ticket.isComingSoon class=text-right>Available soon</h3></footer></article></section></section></section><section ng-repeat=\"block in trc.cb.get()\"><section ng-repeat=\"category in block.items\" ng-if=block.data.isPass class=tickets><section class=\"flex tickets__content\" ng-repeat=\"tickets in category.items\"><article class=\"tickets__item flex {{ticket.data.cssClass}}\" ng-class=\"{'item-sold-out': ticket.isSoldout}\" ng-repeat=\"ticket in tickets.items\"><div><header class=tickets__item__header><p class=tickets__item__title>{{ticket.title}}</p></header><section class=tickets__item__content><div class=tickets__item__description bind-html-compile=ticket.description></div></section></div><img ng-if=ticket.isSoldout src=/assets/img/tickets/sold-out.png width=100 class=\"sold-out\"><footer class=tickets__item__footer><div class=tickets__item__price ng-if=\"ticket.price > 0\">{{ticket.price}}&nbsp;RON&nbsp;&nbsp;({{ticket.priceEur}}&nbsp;EUR) <strike ng-if=ticket.hasPriceFinal>{{ticket.priceFinal}} RON&nbsp;&nbsp;({{ticket.priceFinalEur}} EUR)</strike></div><div class=\"flex flex-space-between flex-v-center controls\" ng-if=!ticket.isComingSoon><h-number value=ticket.quantity min=1 max=6 step=1 class=tickets__item__number></h-number><button class=tickets__item__select ng-click=trc.cb.onProductAdded(ticket) ng-disabled=ticket.isSoldout>Add to cart</button></div><h3 ng-if=ticket.isComingSoon class=text-right>Available soon</h3></footer></article></section></section><section ng-if=block.data.isAccommodation class=accomodation id=accommodation><div class=accomodation__bg></div><header class=accomodation__header><p class=accomodation__header__title><strong>Wanna make your camping experience more pleasant?</strong></p><p class=accomodation__header__subtitle>Spice it up with one of our many awesome add-ons!</p></header><article class=\"accomodation__item flex\" ng-class=\"{'item-sold-out': accomodation.isSoldout}\" ng-repeat=\"accomodation in block.items\"><div class=accomodation__item__capacity ng-if=accomodation.capacity>Capacity: {{accomodation.capacity}} persons</div><img class=\"accomodation__item__image hidden-sm\" ng-src={{accomodation.image}} alt=\"\" image-fallback=\"PRODUCT_IMAGE\"><div class=accomodation__item__content><h3 class=accomodation__item__title>{{accomodation.title}}</h3><div class=accomodation__item__description bind-html-compile=accomodation.description></div></div><div class=\"accomodation__item__footer flex flex-end\"><img ng-if=accomodation.isSoldout src=/assets/img/tickets/sold-out.png width=100 class=\"sold-out\"><div class=accomodation__item__price>{{accomodation.price}}&nbsp;RON&nbsp;&nbsp;({{accomodation.priceEur}}&nbsp;EUR)</div><div class=\"flex flex-space-between flex-v-center\"><h-number value=accomodation.quantity min=1 max=6 step=1 class=accomodation__item__number></h-number><button class=accomodation__item__select ng-click=trc.cb.onProductAdded(accomodation) ng-disabled=accomodation.isSoldout>Add to cart</button></div></div></article></section><section ng-if=block.data.isGoodie class=goodie><header class=goodie__header><p class=goodie__header__title><strong>Add some awesome merch goodies to your order!</strong></p><p class=goodie__header__subtitle>Wear it anywhere but wear it with pride!</p></header><section class=\"flex goodie__container\"><article class=goodie__item ng-repeat=\"goodie in block.items\"><img class=goodie__item__image ng-src={{goodie.image}} alt=\"\"><div class=goodie__item__content><p class=goodie__item__title>{{goodie.title}}</p></div><div class=goodie__item__footer><p class=goodie__item__price>{{goodie.price}}&nbsp;RON&nbsp;&nbsp;({{goodie.priceEur}}&nbsp;EUR)</p><div class=flex><ui-select ng-model=goodie.selectedOption class=size-select search-enabled=false ng-show=goodie.options.length><ui-select-match placeholder=Size>{{$select.selected.optionName}}</ui-select-match><ui-select-choices repeat=\"option.optionId as option in goodie.options\"><div>{{option.optionName}}</div></ui-select-choices></ui-select><h-number value=goodie.quantity min=1 max=6 step=1 class=goodie__item__number></h-number></div><button class=goodie__item__select ng-click=trc.cb.onProductAdded(goodie)>Add to cart</button></div></article></section></section></section><section class=page__footer><button class=\"button button--has-bg button--has-bg--yellow button-block button--large button--dark\" type=button ng-disabled=!trc.cb.canFinalize() ng-click=trc.cb.finalize()>Checkout</button></section></div></div></section></div><div class=\"tickets-redesign page\" ng-if=trc.cb.noTickets()><h1 class=\"page__title text-center margin-top-30\">Tickets and dates for ec 2018 will be announced soon...</h1></div></main>"
  );


  $templateCache.put('assets/views/tickets/tickets-v2.tpl.html',
    "<div class=\"container tickets-v2-page\" scroll-to><tickets-cart></tickets-cart><article class=\"step step--one\" data-js=step-one ng-if=tv2c.cb.getVisibility().firstStep><div class=step-content><header><h1 class=\"headline text-center\">{{'TICKETS_V2.CHOOSE_YOUR_TICKET' | translate}}</h1><p class=\"text-grey-base text-center margin-bottom-30 hidden-xs\" bind-html-compile=\"'TICKETS.LOCATIONS' | translate: {callback: 'tv2c.cb.openPartnerLocations();'}\"></p></header><div class=flex-container><section class=path-choice-box ng-click=tv2c.cb.revealItems(tv2c.PATH.TICKETS)>{{'TICKETS_V2.FOUR_DAY_PASS' | translate}}</section><section class=path-choice-box ng-click=tv2c.cb.revealItems(tv2c.PATH.CAMPING)>{{'TICKETS_V2.CAMPING' | translate}}</section></div></div></article><article class=\"step step--two\" data-js=step-two ng-if=tv2c.cb.getVisibility().theRest><h1 class=\"headline text-center\">{{'TICKETS_V2.CHOOSE_YOUR_PASS' | translate}}</h1><div class=flex-container><div class=\"ticket {{ticket.status | formatter : 'kebab'}}\" ng-repeat=\"ticket in tv2c.tickets\"><section class=\"path-choice-box has-cut\" ng-switch=ticket.showPriceTBA trigger-select=ticket-{{$index}}><span class=ticket-name ng-class=\"{'is-short': tv2c.cb.isShortTitle(ticket.name)}\">{{::ticket.name}}</span> <span class=ticket-price ng-switch-when=false>{{'TICKETS.SECTION.PRICE' | translate: {price: ticket.price} }}</span> <span class=ticket-price ng-switch-when=true>{{'TICKETS.PRICE_TBA' | translate}}</span></section><span class=\"badge-container {{ticket.status | formatter : 'kebab'}}\" ng-if=ticket.shouldDisplayBadge>{{'TICKETS.' + ticket.status | translate}}</span><select selectpicker data-js=ticket-{{$index}} ng-if=ticket.shouldDisplayQty ng-model=ticket.quantity ng-change=tv2c.cb.onProductAdded(ticket)><option value=0>{{'TICKETS.SECTION.NOTHING_SELECTED' | translate}}</option><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option><option value=6>6</option><option value=7>7</option><option value=8>8</option><option value=9>9</option></select><div bind-html-compile=ticket.shortDescription></div></div></div><div></div></article><article class=\"step step--three\" data-js=step-three ng-if=tv2c.cb.getVisibility().theRest><h1 class=\"headline text-center\">{{'TICKETS_V2.CHOOSE_YOUR_CAMPING' | translate}}</h1><div class=flex-container><div class=\"ticket {{camping.status | formatter : 'kebab'}}\" ng-repeat=\"camping in tv2c.camping\"><section class=\"path-choice-box has-cut\" trigger-select=camping-{{$index}}><span class=ticket-name>{{::camping.name}}</span> <span class=ticket-price>{{'TICKETS.SECTION.PRICE' | translate: {price: camping.price} }}</span> <i class=badge></i></section><select selectpicker data-js=camping-{{$index}} ng-model=camping.quantity ng-change=tv2c.cb.onProductAdded(camping)><option value=0>{{'TICKETS.SECTION.NOTHING_SELECTED' | translate}}</option><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option><option value=6>6</option><option value=7>7</option><option value=8>8</option><option value=9>9</option></select><div bind-html-compile=camping.shortDescription></div></div></div><div class=\"premium-camping-add-ons hidden-xs\" ng-click=tv2c.cb.goToCampingOptions()><h3 class=text-uppercase>{{'TICKETS_V2.PREMIUM_CAMPING_ADD_ONS' | translate}}</h3><ul class=list-unstyled><li ng-repeat=\"campingOption in tv2c.campingOptions\"><figure><img ng-src={{campingOption.thumbnails[0]}} alt=\"{{'TICKETS_V2.CAMPING_ADD_ON' | translate}}\"><figcaption class=text-center>{{::campingOption.name}}</figcaption></figure></li></ul></div><div></div></article><article class=\"step step--four\" data-js=step-four ng-if=tv2c.cb.getVisibility().theRest><h1 class=\"headline text-center\">{{'TICKETS_V2.CHOOSE_YOUR_ADD_ON' | translate}}</h1><div class=flex-container><div class=\"ticket is-full-width margin-bottom-50 {{campingOption.status | formatter : 'kebab'}}\" ng-repeat=\"campingOption in tv2c.campingOptions\"><section class=\"path-choice-box has-cut\" trigger-select=camping-option-{{$index}}><span class=ticket-name>{{::campingOption.name}}</span> <span class=ticket-price>{{'TICKETS.SECTION.PRICE' | translate: {price: campingOption.price} }}</span></section><select selectpicker data-js=camping-option-{{$index}} ng-model=campingOption.quantity ng-change=tv2c.cb.onProductAdded(campingOption)><option value=0>{{'TICKETS.SECTION.NOTHING_SELECTED' | translate}}</option><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option><option value=6>6</option><option value=7>7</option><option value=8>8</option><option value=9>9</option></select><div bind-html-compile=campingOption.shortDescription></div></div></div><div></div></article><section class=\"text-center margin-bottom-100\" ng-show=tv2c.cb.thereAreProducts()><button class=\"button-finalize text-uppercase\" ng-click=tv2c.cb.addToCart(); analytics-on analytics-event=Finalize analytics-category=\"Tickets new\">{{'TICKETS_V2.FINALIZE' | translate}}</button></section></div>"
  );


  $templateCache.put('assets/views/tickets/tickets.tpl.html',
    "<div class=\"page-container page-container__bg\"><div ng-show=\"tc.tickets.length > 0\" ng-class=\"{'noHeader': tc.noHeader}\"><tickets-info-bar></tickets-info-bar><div class=\"container tickets-page margin-top-20\" itemprop=offers><section ng-repeat=\"ticketGroup in tc.tickets\" class=ticket-group><div class=\"ticket-group__item row flex flex-v-center\" itemscope itemtype=http://schema.org/Offer ng-repeat=\"ticket in ticketGroup.tickets\" ng-show=ticket.isVisible ng-class=\"{'SOLD_OUT': 'text-grey'}[ticket.status]\"><div class=\"left flex flex-v-center col-md-3\"><div class=top>&nbsp;</div><h2 class=\"text-center center-block\">{{::ticket.name}}</h2><div class=bottom>&nbsp;</div></div><div class=\"col-md-9 right flex flex-space-between flex-v-center\"><div class=desc-wrap><div class=ticket-group__item__description bind-html-compile=ticket.shortDescription ng-class=\"{'SOLD_OUT': 'text-grey'}[ticket.status]\"></div></div><div><div ng-switch=ticket.showPriceTBA class=ticket-group__item__price><span ng-switch-when=false itemprop=price class=text-grey-base>{{::ticket.price}} <span itemprop=priceCurrency>Lei</span></span> <span ng-switch-when=true class=text-grey-base>{{'TICKETS.PRICE_TBA' | translate}}</span></div></div><div class=text-right ng-switch=ticket.status><select selectpicker name=quantity-{{$parent.$index}}-{{$index}} ng-switch-when=AVAILABLE ng-model=ticket.quantity ng-change=tc.onProductAdded(ticket)><option value=0>{{'TICKETS.SECTION.NOTHING_SELECTED' | translate}}</option><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option><option value=6>6</option></select><a class=\"pull-right button button--dark button--small button--has-border button--has-bg--yellow\" ui-sref=ElectricCastlePublic.Login ng-switch-when=ONLY_FOR_REGISTERED ng-bind-html=\"'TICKETS.ONLY_FOR_REGISTERED' | translate\"></a> <span class=ticket-group__item__sold-out ng-switch-when=SOLD_OUT>{{'TICKETS.SOLD_OUT' | translate}}</span> <span class=ticket-group__item__sold-out ng-switch-when=COMING_SOON>{{'TICKETS.COMING_SOON' | translate}}</span></div></div></div></section></div><div class=tickets-controls><div class=text-center><a href=javascript:void(0) ng-show=tc.info.hasTickets() ng-click=tc.finalizeShopping() class=call-to-action analytics-on analytics-event=\"Finalize tickets\" analytics-category=Shop>{{'TICKETS.CONTROLS.FINALIZE' | translate}}</a></div></div></div><div ng-show=\"tc.tickets.length === 0\" class=no-tickets><h2 class=\"tag-line text-center margin-bottom-50 margin-top-100 soon\">{{'TICKETS.COMING_SOON' | translate}}</h2><p class=text-center><a ui-sref=ElectricCastlePublic.TicketsInfo>Read more info</a></p><div ng-switch=tc.flags.hasConcurrencyError><h2 ng-switch-when=false class=\"tag-line text-center text-yellow-secondary margin-bottom-50\">{{'TICKETS.COMING_SOON' | translate}}</h2><h2 ng-switch-when=true class=\"concurrency-error tag-line text-center text-info margin-bottom-50\" translate=\"{{'TICKETS.TRY_AGAIN_LATER'}}\"></h2></div></div></div>"
  );


  $templateCache.put('assets/views/tickets/waiting-for-tickets.tpl.html',
    "<div class=\"container waiting-for-tickets\"><img src=/assets/img/tickets/register-for-early-bird.png alt=\"Register for early bird\" class=\"img-responsive center-block\"><p class=\"margin-top-100 text-center\"><a ui-sref=ElectricCastlePublic.Register>{{'TICKETS.WAITING.REGISTER_MESSAGE' | translate}}</a></p><p class=text-center>{{'TICKETS.WAITING.VALID_FROM' | translate}}</p></div>"
  );


  $templateCache.put('assets/views/vendors/vendors.tpl.html',
    "<div class=\"page-container page-container__bg-grey\"><div class=\"container vendors\"><div class=row><div class=\"col-md-10 col-md-offset-1\"><h1>EC 2017 vendors application</h1><p class=text-medium>The applications for food vendors are now closed. Thank you for your interest!</p></div></div></div></div>"
  );


  $templateCache.put('assets/views/volunteers/volunteers.tpl.html',
    "<div class=\"page-container page-container__bg-grey\"><div class=container><div class=row><div class=\"col-md-10 col-md-offset-1\"><h1>All volunteers are welcome!</h1><p class=text-medium>Registrations are closed. Thank you!<br></p></div></div></div></div>"
  );

}]);
;(function ElectricCastleControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'ElectricCastleController',
        dependencies   = ['$scope', '$injector'];

    function ElectricCastleController ($scope, $injector) {
        var PubSub               = $injector.get('PublisherSubscriber'),
            BasketService        = $injector.get('BasketService'),
            HeaderAccountService = $injector.get('HeaderAccountService'),

            EVENTS = module.constants.APP_EVENTS,

            addToBasketPromise,

            onCheckoutRequested,
            onSuccessLogin;

        function onLogin () {
            addToBasketPromise = BasketService.addToBasketFromCookie().then(function () {
                HeaderAccountService.setHeaderCartQty(BasketService.getNumberOfProducts());

                PubSub.publish(EVENTS.BASKET.ADD_FROM_COOKIE);
            });
        }

        function onCheckout () {
            if (_.isFunction(addToBasketPromise.then)) {
                addToBasketPromise.then(function () {
                    BasketService.checkout();
                });
            }
        }

        onSuccessLogin      = PubSub.subscribe(EVENTS.LOGIN.SUCCESS, onLogin);
        onCheckoutRequested = PubSub.subscribe(EVENTS.BASKET.CHECKOUT, onCheckout);

        $scope.$on('$destroy', function () {
            onCheckoutRequested.remove();
            onSuccessLogin.remove();
        });
    }

    dependencies.push(ElectricCastleController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function ApplicationLogoWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'applicationLogo',
        dependencies  = [];

    function ApplicationLogo () {
        var VIEWS_PATH = module.constants.PATH.VIEWS;

        return {
            restrict : 'EA',
            scope    : {
                inverted : '@inverted'
            },
            templateUrl : VIEWS_PATH + '/application/application-logo.tpl.html',
            link        : function (scope, element) {
                scope.inverted = !!scope.inverted;

                if (scope.inverted) {
                    $(element).addClass('is-inverted');
                }
            }
        };
    }

    dependencies.push(ApplicationLogo);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function BindHtmlCompileWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'bindHtmlCompile',
        dependencies  = ['$compile'];

    function BindHtmlCompile ($compile) {
        return {
            restrict : 'A',
            link     : function (scope, element, attrs) {
                scope.$watch(function () {
                    return scope.$eval(attrs.bindHtmlCompile);
                }, function (value) {
                    var compileScope = scope;

                    element.html(value && value.toString());

                    if (attrs.bindHtmlScope) {
                        compileScope = scope.$eval(attrs.bindHtmlScope);
                    }

                    $compile(element.contents())(compileScope);
                });
            }
        };
    }

    dependencies.push(BindHtmlCompile);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function CarouselWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'owlCarousel',
        dependencies  = [];

    function Carousel () {
        return {
            restrict : 'E',
            link     : function (scope, element) {
                var isMobile = $.browser.mobile,
                    $poster;

                $(element).on('initialized.owl.carousel', function () {
                    $(this).find('.owl-item').each(function () {
                        $(this).attr('data-src', $(this).find('img')[0].getAttribute('data-img-src'));
                    });

                    $(element).find('.owl-stage').lightGallery({
                        thumbnail          : true,
                        animateThumb       : true,
                        showThumbByDefault : false,
                        download           : false
                    });
                });

                $(element).owlCarousel({
                    items    : 1,
                    lazyLoad : true,
                    nav      : true,
                    navText  : [
                        '<img src="/assets/img/carousel-arrow-left.png" class="pull-left" />',
                        '<img src="/assets/img/carousel-arrow-right.png" class="pull-right" />'
                    ],
                    loop       : true,
                    responsive : {
                        912 : {
                            items : 5
                        },
                        710 : {
                            items : 4
                        },
                        600 : {
                            items : 3
                        },
                        360 : {
                            items : 2
                        }
                    }
                });

                // Custom Navigation Events
                $('.owl-carousel-arrows .next').click(function () {
                    $(element).trigger('owl.next');
                });

                $('.owl-carousel-arrows .prev').click(function () {
                    $(element).trigger('owl.prev');
                });

                if (isMobile) {
                    $poster = $('.poster');

                    $poster.on('click', function () {
                        $('.owl-carousel:visible').find('img')[0].click();
                    });
                }
            }
        };
    }

    dependencies.push(Carousel);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function CombodateWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'combodate',
        dependencies  = ['TimeUtil'];

    function Combodate (TimeUtil) {
        return {
            restrict : 'A',
            require  : 'ngModel',
            link     : function (scope, elem, attrs, ngModel) {
                $(elem).combodate({
                    minYear : moment().subtract(100, 'years').year(),
                    maxYear : moment().subtract(10, 'years').year()
                });

                scope.$watch(function () {
                    return ngModel.$modelValue;
                }, function (newValue) {
                    if (newValue) {
                        $(elem).combodate('setValue', newValue);
                    }
                });

                ngModel.$validators.validateDate = function (value) {
                    return TimeUtil.isDateValid(value);
                };
            }
        };
    }

    dependencies.push(Combodate);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function CookieConsentWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'cookieConsent',
        dependencies  = [];

    function CookieConsent () {
        var VIEWS_PATH = module.constants.PATH.VIEWS;

        return {
            restrict : 'E',
            replace  : true,

            scope : {

            },

            templateUrl      : VIEWS_PATH + 'application/cookie-consent.tpl.html',
            controller       : 'CookieConsentController as ccc',
            bindToController : true,

            link : function () {

            }
        };
    }

    dependencies.push(CookieConsent);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function CookieConsentControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'CookieConsentController',
        dependencies   = ['Cookie'];

    function CookieConsentController (Cookie) {
        var self           = this,
            currentConsent = Cookie.get('consent');

        self.consent = function (consent) {
            if (!consent) {
                return currentConsent;
            }

            if (consent) {
                Cookie.set('consent', true, {
                    expires : 60
                });

                currentConsent = true;

                return currentConsent;
            }

            return null;
        };
    }

    dependencies.push(CookieConsentController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function CountdownWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'countdown',
        dependencies  = ['$interval', 'TimeUtil'];

    function Countdown ($interval, TimeUtil) {
        return {
            restrict : 'EA',
            scope    : {
                date : '@countdown'
            },
            link : function (scope, element) {
                var future = new Date(scope.date);

                $interval(function () {
                    var diff = Math.floor((future.getTime() - new Date().getTime()) / 1000);

                    return element.text(TimeUtil.getInterval(diff));
                }, 1000);
            }
        };
    }

    dependencies.push(Countdown);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function ECDropdownWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'ecDropdown',
        dependencies  = [];

    function ECDropdown () {
        return {
            restrict : 'EA',
            link     : function (scope, element) {
                var $li      = $(element).find('> li'),
                    isMobile = $.browser.mobile;

                if (!isMobile) {
                    $li.off('mouseenter');
                    $li.off('click');
                    $li.off('mouseleave');

                    $li.on('mouseenter', function () {
                        $(this).addClass('is-visible');
                        $(this).siblings().removeClass('is-visible');
                    });

                    $li.on('click', function () {
                        $(this).removeClass('is-visible');
                    });

                    $li.on('mouseleave', function () {
                        $(this).removeClass('is-visible');
                    });
                } else {
                    $li.off('click');

                    $li.on('click', function () {
                        $(this).toggleClass('is-visible');
                        $(this).siblings().removeClass('is-visible');
                    });

                    $(document).on('click', '.navbar-collapse.in', function (e) {
                        if ($(e.target).is('a') && !$(e.target).hasClass('dropdown-toggle')) {
                            $(this).collapse('hide');
                        }
                    });

                    $(document).on('click', function (e) {
                        var $navbar  = $('.navbar-collapse'),
                            isNavbar = $(e.target).parents('.nav-site').length > 0;

                        if ($navbar.hasClass('in') && !isNavbar) {
                            $navbar.collapse('hide');
                        }

                        if (!$(e.target).parents('.nav-account > li').length && $li.hasClass('is-visible')) {
                            $li.removeClass('is-visible');
                        }
                    });
                }
            }
        };
    }

    dependencies.push(ECDropdown);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);;(function FesticketWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'festicket',
        dependencies  = [];

    function Festicket () {
        return {
            restrict : 'EA',
            replace  : true,
            link     : function () {
                FESTICKET.embedWhiteLabelStore({
                    container : '#festicket-content',
                    festival  : 'electric-castle-2017',
                    referrer  : 'sc-festival-tickets-management'
                });
            }
        };
    }

    dependencies.push(Festicket);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function FooterWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'applicationFooter',
        dependencies  = [];

    function Footer () {
        var VIEWS_PATH = module.constants.PATH.VIEWS;

        return {
            restrict         : 'EA',
            replace          : true,
            templateUrl      : VIEWS_PATH + 'application/footer.tpl.html',
            controller       : 'FooterController as fc',
            bindToController : true
        };
    }

    dependencies.push(Footer);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function FooterControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'FooterController',
        dependencies   = ['$ngBootbox', '$translate', '$location', 'AuthService'];

    function FooterController ($ngBootbox, $translate, $location, AuthService) {
        var self = this;

        self.model = {
            email : ''
        };

        self.location = {};

        self.message          = '';
        self.shouldHideFooter = !!$location.search().noFooter;

        $translate('FOOTER.EMAIL_SUBSCRIBE_SUCCESS').then(function (translation) {
            self.message = translation;
        });

        self.subscribe = function ($form) {
            if ($form.$valid) {
                AuthService.subscribeToNewsletter(self.model).then(function (data) {
                    if (data.success) {
                        $ngBootbox.alert(self.message);
                        self.model.email = '';
                        $form.$setPristine();
                    }
                });
            }
        };
    }

    dependencies.push(FooterController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function HeaderAccountWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'headerAccount',
        dependencies  = [];

    function HeaderAccount () {
        var VIEWS_PATH = module.constants.PATH.VIEWS;

        return {
            restrict    : 'EA',
            replace     : true,
            templateUrl : VIEWS_PATH + 'auth/header-account.tpl.html',
            controller  : 'HeaderAccountController as hac',
            link        : function (scope, element) {
                var $li = $(element);

                $li.on('mouseenter', function () {
                    $(this).addClass('is-visible');
                    $(this).siblings().removeClass('is-visible');
                });

                $li.on('click', function () {
                    $(this).removeClass('is-visible');
                });

                $li.on('mouseleave', function () {
                    $(this).removeClass('is-visible');
                });
            }
        };
    }

    dependencies.push(HeaderAccount);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function HeaderAccountControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'HeaderAccountController',
        dependencies   = ['$scope', '$injector'];

    function HeaderAccountController ($scope, $injector) {
        var self = this,

            HeaderAccountService = $injector.get('HeaderAccountService'),
            StateUtil            = $injector.get('StateUtil'),
            PubSub               = $injector.get('PublisherSubscriber'),
            AuthService          = $injector.get('AuthService'),
            TicketsService       = $injector.get('TicketsService'),

            STATES = module.constants.STATES,
            EVENTS = module.constants.APP_EVENTS,

            onLogin,
            onTokenExpiration;

        self.isLoggedIn        = HeaderAccountService.retrieveUserStatus;
        self.getHeaderUserData = HeaderAccountService.getHeaderUserData;

        self.logout = function () {
            AuthService.logout();
            StateUtil.go(STATES.HOME);

            HeaderAccountService.resetHeaderData();
            TicketsService.resetProducts();
        };

        function onLoginSuccess () {
            HeaderAccountService.retrieveHeaderUserData();
        }

        if (self.isLoggedIn()) {
            HeaderAccountService.retrieveHeaderUserData();
        } else {
            HeaderAccountService.retrieveNumberOfProducts();
        }

        onLogin           = PubSub.subscribe(EVENTS.LOGIN.SUCCESS, onLoginSuccess);
        onTokenExpiration = PubSub.subscribe(EVENTS.GENERAL.INVALID_TOKEN, self.logout);

        $scope.$on('$destroy', function () {
            onLogin.remove();
            onTokenExpiration.remove();
        });
    }

    dependencies.push(HeaderAccountController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'HeaderAccountService',
        dependencies = ['DataShare', 'AuthService', 'BasketService'];

    function HeaderAccountService (DataShare, AuthService, BasketService) {
        var factory = {},

            headerUserData = {
                customerHasInvitations : false,
                name                   : '',
                cartQty                : 0
            };

        factory.retrieveUserStatus = function () {
            return DataShare.isLoggedIn();
        };

        factory.retrieveHeaderUserData = function () {
            AuthService.getHeaderUserData().then(function (response) {
                if (response.success) {
                    headerUserData  = response.data;
                }
            });
        };

        factory.retrieveNumberOfProducts = function () {
            BasketService.retrieveNumberOfProducts().then(function (response) {
                if (response.success) {
                    headerUserData.cartQty = response.data;
                }
            });
        };

        factory.setHeaderUserData = function (newValue) {
            if (!_.isUndefined(newValue)) {
                headerUserData = newValue;
            }
        };

        factory.setHeaderCartQty = function (newValue) {
            if (!_.isUndefined(newValue)) {
                headerUserData.cartQty = newValue;
            }
        };

        factory.setHeaderName = function (newValue) {
            if (!_.isUndefined(newValue)) {
                headerUserData.name = newValue;
            }
        };

        factory.resetHeaderData = function () {
            headerUserData = {
                customerHasInvitations : false,
                name                   : '',
                cartQty                : 0
            };
        };

        factory.getHeaderUserData = function () {
            return headerUserData;
        };

        return factory;
    }

    dependencies.push(HeaderAccountService);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function HeaderWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'applicationHeader',
        dependencies  = [];

    function Header () {
        var VIEWS_PATH = module.constants.PATH.VIEWS;

        return {
            restrict         : 'EA',
            replace          : true,
            templateUrl      : VIEWS_PATH + 'application/header.tpl.html',
            controller       : 'HeaderController as hc',
            bindToController : true
        };
    }

    dependencies.push(Header);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function HeaderControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'HeaderController',
        dependencies   = ['$location', 'PublisherSubscriber'];

    function HeaderController ($location, PubSub) {
        var self  = this,
            EVENTS = module.constants.APP_EVENTS;

        self.message          = '';
        self.shouldHideHeader = !!$location.search().noHeader;
        self.toggleMenu       = function () {
            PubSub.publish(EVENTS.APP_MENU.TOGGLE);
        };
    }

    dependencies.push(HeaderController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function HomeBoxWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'homeBox',
        dependencies  = [];

    function HomeBox () {
        var VIEWS_PATH = module.constants.PATH.VIEWS;

        return {
            restrict    : 'EA',
            replace     : true,
            templateUrl : VIEWS_PATH + 'application/home-box.tpl.html',
            link        : function () {}
        };
    }

    dependencies.push(HomeBox);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function ImageFallbackWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'imageFallback',
        dependencies  = [];

    function ImageFallback () {
        return {
            restrict : 'EA',
            scope    : {
                type : '@imageFallback'
            },
            link : function (scope, element, attrs) {
                var DEFAULT_ICON = module.constants.IMAGE_FALLBACK[scope.type];

                element.bind('error', function () {
                    if (attrs.src !== DEFAULT_ICON) {
                        attrs.$set('src', DEFAULT_ICON);
                    }
                });
            }
        };
    }

    dependencies.push(ImageFallback);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function LightGalleryWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'lightGallery',
        dependencies  = ['$timeout'];

    function LightGallery ($timeout) {
        return {
            restrict : 'EAC',
            scope    : {
                collectionToBeWatched : '=lightGallery'
            },
            link : function (scope, element) {
                var $lg;

                function buildGallery () {
                    $timeout(function () {
                        $lg = $(element).lightGallery({
                            thumbnail          : false,
                            animateThumb       : true,
                            showThumbByDefault : false,
                            download           : false,
                            selector           : '.item'
                        });
                    }, 0);
                }

                buildGallery();

                scope.$watch('collectionToBeWatched', function (newValue, oldValue) {
                    if (!_.isEqual(newValue, oldValue) && $lg) {
                        $lg.data('lightGallery').destroy(true);
                    }

                    buildGallery();
                }, true);

                scope.$on('$locationChangeStart', function () {
                    if ($lg) {
                        $lg.data('lightGallery').destroy(true);
                    }
                });
            }
        };
    }

    dependencies.push(LightGallery);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function LoaderWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'loader',
        dependencies  = ['$timeout', 'PublisherSubscriber'];

    function Loader ($timeout, PubSub) {
        var EVENTS     = module.constants.APP_EVENTS,
            VIEWS_PATH = module.constants.PATH.VIEWS;

        return {
            restrict    : 'EA',
            replace     : true,
            templateUrl : VIEWS_PATH + 'application/loader.tpl.html',
            link        : function (scope, element) {
                var showSubscription,
                    hideSubscription;

                function onShowRequested () {
                    $timeout(function () {
                        $(element).addClass('is-visible');
                    });
                }

                function onHideRequested () {
                    $timeout(function () {
                        $(element).removeClass('is-visible');
                    });
                }

                showSubscription = PubSub.subscribe(EVENTS.LOADER.SHOW, onShowRequested);
                hideSubscription = PubSub.subscribe(EVENTS.LOADER.HIDE, onHideRequested);

                scope.$on('$destroy', function () {
                    showSubscription.remove();
                    hideSubscription.remove();
                });
            }
        };
    }

    dependencies.push(Loader);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function LoginFormOverlayWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'loginFormOverlay',
        dependencies  = ['PublisherSubscriber'];

    function LoginFormOverlay (PubSub) {
        var VIEWS_PATH = module.constants.PATH.VIEWS,
            EVENTS     = module.constants.APP_EVENTS;

        return {
            restrict         : 'EA',
            replace          : true,
            templateUrl      : VIEWS_PATH + 'auth/login-form-overlay.tpl.html',
            controller       : 'LoginFormOverlayController as lfoc',
            bindToController : true,
            link             : function (scope, element) {
                function onShowHideOverlayRequest (data) {
                    $(element)[data.shouldDisplay ? 'addClass' : 'removeClass']('is-visible');
                }

                scope.showHideOverlayRequest = PubSub.subscribe(EVENTS.LOGIN.SHOW_HIDE_LOGIN_OVERLAY, onShowHideOverlayRequest);
                scope.onLoginSuccess         = PubSub.subscribe(EVENTS.LOGIN.SUCCESS, _.partial(onShowHideOverlayRequest, {
                    shouldDisplay : false
                }));

                scope.$on('$destroy', function () {
                    scope.showHideOverlayRequest.remove();
                    scope.onLoginSuccess.remove();
                });
            }
        };
    }

    dependencies.push(LoginFormOverlay);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function LoginFormOverlayControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'LoginFormOverlayController',
        dependencies   = ['PublisherSubscriber'];

    function LoginFormOverlayController (PubSub) {
        var self = this,

            EVENTS = module.constants.APP_EVENTS;

        self.cb = {
            close : function () {
                PubSub.publish(EVENTS.LOGIN.SHOW_HIDE_LOGIN_OVERLAY, {
                    shouldDisplay : false
                });
            }
        };
    }

    dependencies.push(LoginFormOverlayController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function LoginFormWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'loginForm',
        dependencies  = [];

    function LoginForm () {
        var VIEWS_PATH = module.constants.PATH.VIEWS;

        return {
            restrict         : 'EA',
            replace          : true,
            templateUrl      : VIEWS_PATH + 'auth/login-form.tpl.html',
            controller       : 'LoginFormController as lfc',
            bindToController : true,
            scope            : {
                postLoginAction : '@',
                theme           : '@'
            }
        };
    }

    dependencies.push(LoginForm);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function LoginFormControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'LoginFormController',
        dependencies   = ['$timeout', '$injector'];

    function LoginFormController ($timeout, $injector) {
        var self = this,
            SN   = module.constants.STATES,

            AuthService = $injector.get('AuthService'),
            StateUtil   = $injector.get('StateUtil'),
            PubSub      = $injector.get('PublisherSubscriber'),

            TIME               = module.constants.TIME,
            EVENTS             = module.constants.APP_EVENTS,
            STATES             = module.constants.STATES,
            POST_LOGIN_ACTIONS = {
                CHECKOUT            : 'CHECKOUT',
                CART                : 'CART',
                REDIRECT_MY_ACCOUNT : 'REDIRECT_MY_ACCOUNT',
                DEFAULT             : 'DEFAULT',
                REDIRECT_SETTINGS   : 'REDIRECT_SETTINGS',
                REDIRECT_TICKETS    : 'REDIRECT_TICKETS'
            };

        self.model = {
            email        : '',
            password     : '',
            rememberMe   : false,
            errorMessage : ''
        };

        if (!self.postLoginAction) {
            self.postLoginAction = POST_LOGIN_ACTIONS.DEFAULT;
        }

        self.flags = {
            showLoginError : false,
            darkVersion    : self.theme === 'dark'
        };

        self.goToRegister = function () {
            PubSub.publish(EVENTS.MODAL.CLOSE);

            StateUtil.go(STATES.REGISTER);
        };

        function clearErrors () {
            self.flags.showLoginError = false;
            self.model.errorMessage   = '';
        }

        self.login = function ($form) {
            var actions = {};

            actions[POST_LOGIN_ACTIONS.REDIRECT_MY_ACCOUNT] = function () {
                StateUtil.go(SN.HOME);
            };

            actions[POST_LOGIN_ACTIONS.REDIRECT_SETTINGS] = function () {
                StateUtil.go([SN.MY_ACCOUNT.ROOT, SN.MY_ACCOUNT.SETTINGS].join('.'));
            };

            actions[POST_LOGIN_ACTIONS.CHECKOUT] = function () {
                PubSub.publish(EVENTS.MODAL.CLOSE);
                PubSub.publish(EVENTS.BASKET.CHECKOUT);
            };

            actions[POST_LOGIN_ACTIONS.CART] = function () {
                PubSub.publish(EVENTS.MODAL.CLOSE);
            };

            actions[POST_LOGIN_ACTIONS.REDIRECT_TICKETS] = function () {
                StateUtil.go(SN.TICKETS);
            };

            actions[POST_LOGIN_ACTIONS.DEFAULT] = function () {
                PubSub.publish(EVENTS.MODAL.CLOSE);
            };

            if ($form.$valid) {
                AuthService.login(self.model).then(function (data) {
                    $form.$setPristine();

                    if (data.success) {
                        clearErrors();
                        PubSub.publish(EVENTS.LOGIN.SUCCESS);

                        actions[self.postLoginAction]();
                    } else {
                        self.flags.showLoginError = true;
                        self.model.errorMessage   = data.error;
                        self.model.email          = '';
                        self.model.password       = '';

                        $timeout(clearErrors, TIME.ERROR_TIMEOUT);
                    }
                });
            }
        };
    }

    dependencies.push(LoginFormController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function MainMenuWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'mainMenu',
        dependencies  = ['PublisherSubscriber'];

    function MainMenu (PubSub) {
        var VIEWS_PATH = module.constants.PATH.VIEWS,
            EVENTS     = module.constants.APP_EVENTS;

        return {
            restrict         : 'EA',
            replace          : true,
            templateUrl      : VIEWS_PATH + 'application/main-menu.tpl.html',
            controller       : 'MainMenuController as mmc',
            bindToController : true,
            link             : function (scope, element) {
                var CSS_CLASSES = {
                        IS_OPEN : 'is-open'
                    },
                    toggleSubscription,
                    closeSubscription;

                function isMenuOpened () {
                    return $(element).hasClass(CSS_CLASSES.IS_OPEN);
                }

                function isClickInsideMenu (event) {
                    return $(event.target).parents('[data-js="menu-items"]').length > 0 ||
                           $(event.target).is($('[data-js="header-logo"]'));
                }

                function isClickOnMenuIcon (event) {
                    return $(event.target).parents('[data-js="menu-toggle"]').length > 0 ||
                           $(event.target).is($('[data-js="menu-toggle"]'));
                }

                function onToggleRequested () {
                    $(element).toggleClass(CSS_CLASSES.IS_OPEN);
                }

                function onCloseRequested () {
                    if (isMenuOpened()) {
                        $(element).removeClass(CSS_CLASSES.IS_OPEN);
                        PubSub.publish(EVENTS.APP_MENU.CHANGE_ICON);
                    }
                }

                $('html, body').on('click', function (event) {
                    if (isClickInsideMenu(event) && !isClickOnMenuIcon(event)) {
                        onCloseRequested();
                    }
                });

                toggleSubscription = PubSub.subscribe(EVENTS.APP_MENU.TOGGLE, onToggleRequested);
                closeSubscription  = PubSub.subscribe(EVENTS.APP_MENU.CLOSE, onCloseRequested);

                scope.$on('$destroy', function () {
                    toggleSubscription.remove();
                    closeSubscription.remove();
                });
            }
        };
    }

    dependencies.push(MainMenu);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function MainMenuControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'MainMenuController',
        dependencies   = ['$injector'];

    function MainMenuController ($injector) {
        var self   = this,
            STATES = module.constants.STATES,

            HeaderAccountService = $injector.get('HeaderAccountService'),
            AuthService          = $injector.get('AuthService'),
            StateUtil            = $injector.get('StateUtil');

        self.cb = {
            isLoggedIn : HeaderAccountService.retrieveUserStatus,
            logout     : function () {
                AuthService.logout();
                StateUtil.go(STATES.HOME);

                HeaderAccountService.resetHeaderData();
            }
        };
    }

    dependencies.push(MainMenuController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function ModalWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'modal',
        dependencies  = ['PublisherSubscriber'];

    function Modal (PubSub) {
        var VIEWS_PATH = module.constants.PATH.VIEWS,
            EVENTS     = module.constants.APP_EVENTS;

        return {
            restrict    : 'E',
            replace     : true,
            templateUrl : VIEWS_PATH + 'application/modal.tpl.html',
            link        : function (scope, element) {
                scope.modalTypes = EVENTS.MODAL.TYPES;
                scope.options    = {
                    useKeyboard     : false,
                    backdropDismiss : 'static'
                };

                function onOpenRequest (params) {
                    scope.modalType = params.type;

                    if (params.options) {
                        scope.options.useKeyboard     = params.options.useKeyboard;
                        scope.options.backdropDismiss = params.options.backdropDismiss;
                    }

                    if (params.model) {
                        scope.model = params.model;
                    }

                    $(element).modal('show');
                }

                function onCloseRequest () {
                    scope.modalType = null;
                    $(element).modal('hide');
                }

                PubSub.subscribe(EVENTS.MODAL.OPEN, onOpenRequest);
                PubSub.subscribe(EVENTS.MODAL.CLOSE, onCloseRequest);

                scope.$on('$destroy', function () {
                    PubSub.unsubscribeAll(EVENTS.MODAL.OPEN);
                    PubSub.unsubscribeAll(EVENTS.MODAL.CLOSE);
                });
            }
        };
    }

    dependencies.push(Modal);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function AddExternalTicketModalWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'addExternalTicket',
        dependencies  = [];

    function AddExternalTicketModal () {
        var VIEWS_PATH = module.constants.PATH.VIEWS;

        return {
            restrict    : 'EA',
            replace     : true,
            templateUrl : VIEWS_PATH + 'modal/add-external-ticket-modal.tpl.html',
            controller  : 'AddExternalTicketModalController as aetmc'
        };
    }

    dependencies.push(AddExternalTicketModal);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function AddExternalTicketModalControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'AddExternalTicketModalController',
        dependencies   = ['PublisherSubscriber', 'OrdersService', '$timeout'];

    function AddExternalTicketModalController (PubSub, OrdersService, $timeout) {
        var self   = this,
            EVENTS = module.constants.APP_EVENTS,
            TIME   = module.constants.TIME;

        self.model = {
            code         : '',
            errorMessage : ''
        };

        self.flags = {
            showError : false
        };

        function clearErrors () {
            self.flags.showError    = false;
            self.model.errorMessage = '';
        }

        self.submit = function ($form) {
            if ($form.$valid) {
                OrdersService.addExternalTicket(self.model.code).then(function (data) {
                    $form.$setPristine();

                    if (data.data.success) {
                        clearErrors();

                        OrdersService.fetch();
                        PubSub.publish(EVENTS.MODAL.CLOSE);
                    } else {
                        self.flags.showError    = true;
                        /*eslint-disable */
                        self.model.errorMessage = data.data.error_message;
                        /*eslint-enable */

                        $timeout(clearErrors, TIME.ERROR_TIMEOUT);
                    }

                    self.model.code = '';
                });
            }
        };

        self.closeModal = function () {
            PubSub.publish(EVENTS.MODAL.CLOSE);
        };
    }

    dependencies.push(AddExternalTicketModalController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function BeforeYouComeWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'beforeYouCome',
        dependencies  = [];

    function BeforeYouCome () {
        var VIEWS_PATH = module.constants.PATH.VIEWS;

        return {
            restrict    : 'EA',
            replace     : true,
            templateUrl : VIEWS_PATH + 'modal/before-you-come.tpl.html',
            controller  : 'BeforeYouComeController as bycc'
        };
    }

    dependencies.push(BeforeYouCome);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function BeforeYouComeControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'BeforeYouComeController',
        dependencies   = ['$injector'];

    function BeforeYouComeController ($injector) {
        var self   = this,
            EVENTS = module.constants.APP_EVENTS,
            STATES = module.constants.STATES,

            PubSub    = $injector.get('PublisherSubscriber'),
            StateUtil = $injector.get('StateUtil'),

            LANGUAGES = {
                EN : 'EN',
                RO : 'RO'
            };

        self.model = {
            language : LANGUAGES.RO,
            tabs     : [{
                isActive : true,
                langKey  : LANGUAGES.RO,
                index    : 0
            }, {
                isActive : false,
                langKey  : LANGUAGES.EN,
                index    : 1
            }]
        };

        self.closeModal = function () {
            PubSub.publish(EVENTS.MODAL.CLOSE);
        };

        self.toggleLanguage = function (tabIndex) {
            self.model.tabs = _.map(self.model.tabs, function (tab) {
                tab.isActive = tab.index === tabIndex;

                return tab;
            });
        };

        self.getActiveLanguage = function () {
            return _.first(_.filter(self.model.tabs, 'isActive')).langKey;
        };

        self.goToAccess = function () {
            self.closeModal();
            StateUtil.go(STATES.ACCESS);
        };
    }

    dependencies.push(BeforeYouComeController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function FirstLoginThankYouWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'firstLoginThankYou',
        dependencies  = [];

    function FirstLoginThankYou () {
        var VIEWS_PATH = module.constants.PATH.VIEWS;

        return {
            restrict    : 'EA',
            replace     : true,
            templateUrl : VIEWS_PATH + 'modal/first-login-thank-you.tpl.html',
            controller  : 'FirstLoginThankYouController as fltyc'
        };
    }

    dependencies.push(FirstLoginThankYou);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function FirstLoginThankYouControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'FirstLoginThankYouController',
        dependencies   = ['$injector'];

    function FirstLoginThankYouController ($injector) {
        var self   = this,
            EVENTS = module.constants.APP_EVENTS,

            PubSub = $injector.get('PublisherSubscriber');

        self.closeModal = function () {
            PubSub.publish(EVENTS.MODAL.CLOSE);
        };
    }

    dependencies.push(FirstLoginThankYouController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function LoginModalWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'loginModal',
        dependencies  = [];

    function LoginModal () {
        var VIEWS_PATH = module.constants.PATH.VIEWS;

        return {
            restrict    : 'EA',
            replace     : true,
            templateUrl : VIEWS_PATH + 'modal/login-modal.tpl.html',
            controller  : 'LoginModalController as lmc'
        };
    }

    dependencies.push(LoginModal);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function LoginModalControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'LoginModalController',
        dependencies   = ['PublisherSubscriber'];

    function LoginModalController (PubSub) {
        var self   = this,
            EVENTS = module.constants.APP_EVENTS;

        self.closeModal = function () {
            PubSub.publish(EVENTS.MODAL.CLOSE);
        };
    }

    dependencies.push(LoginModalController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function PartnerLocationsControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'PartnerLocationsController',
        dependencies   = ['$injector'];

    function PartnerLocationsController ($injector) {
        var self   = this,
            EVENTS = module.constants.APP_EVENTS,

            PubSub = $injector.get('PublisherSubscriber');

        self.closeModal = function () {
            PubSub.publish(EVENTS.MODAL.CLOSE);
        };
    }

    dependencies.push(PartnerLocationsController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function PartnerLocationsWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'partnerLocations',
        dependencies  = [];

    function PartnerLocations () {
        var VIEWS_PATH = module.constants.PATH.VIEWS;

        return {
            restrict    : 'EA',
            replace     : true,
            templateUrl : VIEWS_PATH + 'modal/partners-locations.tpl.html',
            controller  : 'PartnerLocationsController as plc'
        };
    }

    dependencies.push(PartnerLocations);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function RedeemCardModalWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'redeemCardModal',
        dependencies  = [];

    function RedeemCardModal () {
        var VIEWS_PATH = module.constants.PATH.VIEWS;

        return {
            restrict    : 'EA',
            replace     : true,
            templateUrl : VIEWS_PATH + 'modal/redeem-card-modal.tpl.html',
            controller  : 'RedeemCardModalController as rgcmc'
        };
    }

    dependencies.push(RedeemCardModal);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function RedeemCardModalControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'RedeemCardModalController',
        dependencies   = ['PublisherSubscriber'];

    function RedeemCardModalController (PubSub) {
        var self   = this,
            EVENTS = module.constants.APP_EVENTS;

        self.closeModal = function () {
            PubSub.publish(EVENTS.MODAL.CLOSE);
        };
    }

    dependencies.push(RedeemCardModalController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function RefundWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'refund',
        dependencies  = [];

    function Refund () {
        var VIEWS_PATH = module.constants.PATH.VIEWS;

        return {
            restrict    : 'EA',
            replace     : true,
            templateUrl : VIEWS_PATH + 'modal/refund.tpl.html',
            controller  : 'RefundController as rfc'
        };
    }

    dependencies.push(Refund);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function RefundControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'RefundController',
        dependencies   = ['$injector'];

    function RefundController ($injector) {
        var self   = this,
            EVENTS = module.constants.APP_EVENTS,
            STATES = module.constants.STATES,

            PubSub    = $injector.get('PublisherSubscriber'),
            StateUtil = $injector.get('StateUtil'),

            LANGUAGES = {
                EN : 'EN',
                RO : 'RO'
            };

        self.model = {
            language : LANGUAGES.RO,
            tabs     : [{
                isActive : true,
                langKey  : LANGUAGES.RO,
                index    : 0
            }, {
                isActive : false,
                langKey  : LANGUAGES.EN,
                index    : 1
            }]
        };

        self.closeModal = function () {
            PubSub.publish(EVENTS.MODAL.CLOSE);
        };

        self.toggleLanguage = function (tabIndex) {
            self.model.tabs = _.map(self.model.tabs, function (tab) {
                tab.isActive = tab.index === tabIndex;

                return tab;
            });
        };

        self.getActiveLanguage = function () {
            return _.first(_.filter(self.model.tabs, 'isActive')).langKey;
        };

        self.goToAccess = function () {
            self.closeModal();
            StateUtil.go(STATES.ACCESS);
        };
    }

    dependencies.push(RefundController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function TicketNameModalWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'ticketName',
        dependencies  = [];

    function TicketNameModal () {
        var VIEWS_PATH = module.constants.PATH.VIEWS;

        return {
            restrict    : 'EA',
            replace     : true,
            templateUrl : VIEWS_PATH + 'modal/ticket-name-modal.tpl.html',
            controller  : 'TicketNameModalController as tnmc',
            model       : '='
        };
    }

    dependencies.push(TicketNameModal);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function TicketNameModalControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'TicketNameModalController',
        dependencies   = ['PublisherSubscriber', 'OrdersService', '$timeout', '$scope'];

    function TicketNameModalController (PubSub, OrdersService, $timeout, $scope) {
        var self   = this,
            EVENTS = module.constants.APP_EVENTS,
            TIME   = module.constants.TIME,

            ticketInfoId = $scope.model;

        self.model = {
            id           : '',
            name         : '',
            errorMessage : ''
        };

        self.flags = {
            showError : false
        };

        function clearErrors () {
            self.flags.showError    = false;
            self.model.errorMessage = '';
        }

        OrdersService.getTicketInfo(ticketInfoId).then(function (response) {
            self.model.name = response.data.ticketName;
            self.model.id   = response.data.ticketId;
        });

        self.submit = function ($form) {
            if ($form.$valid) {
                OrdersService.updateTicketInfo(self.model.id, {name : self.model.name}).then(function (data) {
                    $form.$setPristine();

                    if (data.data.success) {
                        clearErrors();

                        OrdersService.fetch();
                        PubSub.publish(EVENTS.MODAL.CLOSE);
                    } else {
                        self.flags.showError    = true;
                        /*eslint-disable */
                        self.model.errorMessage = data.data.error_message;
                        /*eslint-enable */

                        $timeout(clearErrors, TIME.ERROR_TIMEOUT);
                    }

                    self.model.code = '';
                });
            }
        };

        self.closeModal = function () {
            PubSub.publish(EVENTS.MODAL.CLOSE);
        };
    }

    dependencies.push(TicketNameModalController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function PanZoomWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'panZoom',
        dependencies  = [];

    function PanZoom () {
        return {
            restrict : 'EA',
            link     : function (scope, element) {
                element.panzoom({
                    minScale       : 0.3,
                    maxScale       : 1,
                    startTransform : 'translate(-700px, -700px)',
                    $zoomIn        : $('.zoom-in'),
                    $zoomOut       : $('.zoom-out'),
                    $zoomRange     : $('.zoom-range')
                });

                element.parent().get(0).addEventListener('gestureend', function () {});
                element.parent().on('mousewheel.focal', function (e) {
                    var delta   = e.delta || e.originalEvent.wheelDelta,
                        zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;

                    e.preventDefault();

                    element.panzoom('zoom', zoomOut, {
                        increment : 0.1,
                        animate   : false,
                        focal     : e
                    });
                });
            }
        };
    }

    dependencies.push(PanZoom);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function RedeemCardFormWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'redeemCardForm',
        dependencies  = [];

    function RedeemCard () {
        var VIEWS_PATH = module.constants.PATH.VIEWS;

        return {
            restrict         : 'EA',
            replace          : true,
            templateUrl      : VIEWS_PATH + 'auth/redeem-card-form.tpl.html',
            controller       : 'RedeemCardFormController as rcfc',
            bindToController : true,
            scope            : {
                postRedeemAction : '@'
            }
        };
    }

    dependencies.push(RedeemCard);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function RedeemCardFormControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'RedeemCardFormController',
        dependencies   = ['$log', '$timeout', '$injector'];

    function RedeemCardFormController ($log, $timeout, $injector) {
        var self    = this,
            $logger = $log.getInstance(controllerName),

            MyAccountService = $injector.get('MyAccountService'),
            BasketService    = $injector.get('BasketService'),
            PubSub           = $injector.get('PublisherSubscriber'),

            TIME                = module.constants.TIME,
            EVENTS              = module.constants.APP_EVENTS,
            POST_REDEEM_ACTIONS = {
                CLOSE_MODAL         : 'CLOSE_MODAL',
                REDIRECT_MY_ACCOUNT : 'REDIRECT_MY_ACCOUNT'
            };

        self.model = {
            code         : '',
            errorMessage : ''
        };

        self.flags = {
            showError : false
        };

        function clearErrors () {
            self.flags.showError    = false;
            self.model.errorMessage = '';
        }

        self.submit = function ($form) {
            if ($form.$valid) {
                $logger.debug('Form is valid');

                MyAccountService.redeemGiftCard(self.model.code).then(function (data) {
                    $form.$setPristine();

                    if (data.success) {
                        clearErrors();

                        if (self.postRedeemAction === POST_REDEEM_ACTIONS.REDIRECT_MY_ACCOUNT) {
                            PubSub.publish(EVENTS.GIFT_CARD.UPDATE);
                        } else {
                            BasketService.get();
                            PubSub.publish(EVENTS.MODAL.CLOSE);
                        }
                    } else {
                        self.flags.showError    = true;
                        self.model.errorMessage = data.error;

                        $timeout(clearErrors, TIME.ERROR_TIMEOUT);
                    }

                    self.model.code = '';
                });
            } else {
                $logger.debug('Form is invalid');
            }
        };

        self.submitCoupon = function ($form) {
            if ($form.$valid) {
                $logger.debug('Form is valid');

                MyAccountService.redeemCoupon(self.model.code).then(function (data) {
                    $form.$setPristine();

                    if (data.success) {
                        clearErrors();

                        BasketService.get();
                        PubSub.publish(EVENTS.MODAL.CLOSE);
                    } else {
                        self.flags.showError    = true;
                        self.model.errorMessage = data.errorMessage;

                        $timeout(clearErrors, TIME.ERROR_TIMEOUT);
                    }

                    self.model.code = '';
                });
            } else {
                $logger.debug('Form is invalid');
            }
        };
    }

    dependencies.push(RedeemCardFormController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function RegisterMinimalFormWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'registerMinimalForm',
        dependencies  = [];

    function RegisterMinimalForm () {
        var VIEWS_PATH = module.constants.PATH.VIEWS;

        return {
            restrict         : 'EA',
            replace          : true,
            templateUrl      : VIEWS_PATH + 'auth/register-minimal-form.tpl.html',
            controller       : 'RegisterMinimalFormController as rmfc',
            bindToController : true,
            scope            : {
                postRegisterAction : '@'
            }
        };
    }

    dependencies.push(RegisterMinimalForm);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function RegisterMinimalFormControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'RegisterMinimalFormController',
        dependencies   = ['$timeout', '$injector'];

    function RegisterMinimalFormController ($timeout, $injector) {
        var self = this,

            COUNTRY_NATIONALITY = $injector.get('COUNTRY_NATIONALITY'),

            AuthService = $injector.get('AuthService'),
            StateUtil   = $injector.get('StateUtil'),
            PubSub      = $injector.get('PublisherSubscriber'),

            TIME    = module.constants.TIME,
            SN      = module.constants.STATES,
            EVENTS  = module.constants.APP_EVENTS,

            POST_REGISTER_ACTIONS = {
                CHECKOUT            : 'CHECKOUT',
                CART                : 'CART',
                REDIRECT_MY_ACCOUNT : 'REDIRECT_MY_ACCOUNT',
                DEFAULT             : 'DEFAULT'
            };

        if (!self.postRegisterAction) {
            self.postRegisterAction = POST_REGISTER_ACTIONS.DEFAULT;
        }

        self.model = {
            firstName            : '',
            lastName             : '',
            email                : '',
            phone                : '',
            nationality          : COUNTRY_NATIONALITY.NATIONALITY[0].name,
            city                 : '',
            street               : '',
            number               : '',
            block                : '',
            floorNumber          : '',
            apartment            : '',
            zipCode              : '',
            password             : '',
            passwordConfirmation : '',
            birthDate            : '',
            gender               : 'male',
            errorMessage         : '',
            country              : '',
            countryList          : COUNTRY_NATIONALITY.COUNTRY,
            cityList             : COUNTRY_NATIONALITY.CITY,
            subscribeNewsletter  : false
        };

        self.flags = {
            showRegisterError  : false,
            showConfirmation   : false,
            datePickerOpened   : false,
            showCityTextBox    : false,
            countryHasCityList : false
        };

        function loginSuccess (response, $form) {
            var actions = {};

            actions[POST_REGISTER_ACTIONS.REDIRECT_MY_ACCOUNT] = function () {
                StateUtil.go([SN.MY_ACCOUNT.ROOT, SN.MY_ACCOUNT.ORDERS].join('.'));
            };

            actions[POST_REGISTER_ACTIONS.CHECKOUT] = function () {
                PubSub.publish(EVENTS.BASKET.CHECKOUT);
            };

            actions[POST_REGISTER_ACTIONS.CART] = function () {
                StateUtil.go(SN.BASKET);
            };

            actions[POST_REGISTER_ACTIONS.DEFAULT] = function () {
                PubSub.publish(EVENTS.MODAL.CLOSE);
            };

            $form.$setPristine();

            if (response.success) {
                PubSub.publish(EVENTS.LOGIN.SUCCESS);

                actions[self.postRegisterAction]();
            }
        }

        function clearErrors () {
            self.flags.showRegisterError = false;
            self.model.errorMessage      = '';
        }

        function registerSuccess (response, $form) {
            if (response.success) {
                PubSub.publish(EVENTS.MODAL.CLOSE);
                clearErrors();

                AuthService.login(response.data).then(function (res) {
                    loginSuccess(res, $form);
                });
            } else {
                $form.$setPristine();

                self.flags.showRegisterError = true;
                self.model.errorMessage      = response.error;

                $timeout(clearErrors, TIME.ERROR_TIMEOUT);
            }
        }

        self.register = function ($form) {
            if ($form.$valid) {
                self.flags.disableRegisterBtn = true;

                AuthService.register(self.model).then(function (response) {
                    registerSuccess(response, $form);
                }, function () {
                    self.flags.disableRegisterBtn = false;
                    $form.$setPristine();
                });
            }
        };

        self.countryChanged = function () {
            if (self.model.country === COUNTRY_NATIONALITY.COUNTRY[0].name) {
                self.flags.showCityTextBox    = false;
                self.flags.countryHasCityList = true;

                if (!_.find(self.model.cityList, ['name', self.model.city])) {
                    self.model.cityList.unshift({name : self.model.city});
                }
            } else {
                self.flags.showCityTextBox    = true;
                self.flags.countryHasCityList = false;
            }
        };
    }

    dependencies.push(RegisterMinimalFormController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function ScrollRevealWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'scrollReveal',
        dependencies  = [];

    function ScrReveal () {
        return {
            restrict : 'EA',
            link     : function (scope, element) {
                /* eslint-disable */
                window.sr = ScrollReveal().reveal(element.find('.reveal'), {duration : 1200, distance : '200px'});
                /* eslint-enable */
            }
        };
    }

    dependencies.push(ScrReveal);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function ScrollToTopWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'scrollToTop',
        dependencies  = ['$uiViewScroll', 'PublisherSubscriber'];

    function ScrollToTop ($uiViewScroll, PubSub) {
        var EVENTS = module.constants.APP_EVENTS;

        return {
            restrict : 'EA',
            link     : function (scope, element) {
                function onStateChanged () {
                    $uiViewScroll(element);
                }

                PubSub.subscribe(EVENTS.GENERAL.STATE_CHANGED, onStateChanged);
            }
        };
    }

    dependencies.push(ScrollToTop);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function ScrollToWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'scrollTo',
        dependencies  = ['$timeout', '$document', 'PublisherSubscriber'];

    function ScrollTo ($timeout, $document, PubSub) {
        var EVENTS = module.constants.APP_EVENTS,
            PATH   = module.constants.TICKET.PATHS,

            ANIMATION = module.constants.TICKET.ANIMATION;

        return {
            restrict : 'EA',
            replace  : true,
            link     : function (scope) {
                var $steps = {
                        one   : $('[data-js="step-one"]'),
                        two   : $('[data-js="step-two"]'),
                        three : $('[data-js="step-three"]'),
                        four  : $('[data-js="step-four"]')
                    },

                    goToCampingSubscription,
                    pathChosenSubscription;

                function scrollTo (pathName) {
                    var steps = {};

                    $steps = {
                        one   : $('[data-js="step-one"]'),
                        two   : $('[data-js="step-two"]'),
                        three : $('[data-js="step-three"]'),
                        four  : $('[data-js="step-four"]')
                    };

                    steps[PATH.BEGINNING.NAME]       = $steps.one;
                    steps[PATH.TICKETS.NAME]         = $steps.two;
                    steps[PATH.CAMPING.NAME]         = $steps.three;
                    steps[PATH.CAMPING_OPTIONS.NAME] = $steps.four;

                    $document.duScrollTo(steps[pathName], 40, ANIMATION.SCROLL);
                }

                function onPathChosen (path) {
                    $timeout(function () {
                        scrollTo(path);
                    }, 0);
                }

                pathChosenSubscription  = PubSub.subscribe(EVENTS.TICKETS.PATH_CHOSEN, onPathChosen);
                goToCampingSubscription = PubSub.subscribe(EVENTS.TICKETS.GO_TO_CAMPING, function () {
                    scrollTo(PATH.CAMPING.NAME);
                });

                scope.$on('$destroy', function () {
                    goToCampingSubscription.remove();
                    pathChosenSubscription.remove();
                });
            }
        };
    }

    dependencies.push(ScrollTo);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function SvgIconWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'svgIcon',
        dependencies  = ['PublisherSubscriber'];

    function SvgIconDirective (PubSub) {
        var SVG_ICON_CONFIG = module.SVG_ICON_CONFIG,
            EVENTS          = module.constants.APP_EVENTS,
            menuCloseSubs;

        return {
            restrict : 'EA',
            link     : function (scope, element) {
                function hasClass (el, c) {
                    return $(el).hasClass(c);
                }

                function extend (a, b) {
                    var key;

                    for (key in b) {
                        if (b.hasOwnProperty(key)) {
                            a[key] = b[key];
                        }
                    }
                    return a;
                }

                function mobileCheck () {
                    return $.browser.mobile;
                }

                function retrieveRelTg (e) {
                    if (e.relatedTarget) {
                        return e.relatedTarget;
                    } else if (e.type === 'mouseout') {
                        return e.toElement;
                    }

                    return e.fromElement;
                }

                function isMouseLeaveOrEnter (e, handler) {
                    var reltg = retrieveRelTg(e);

                    if (e.type !== 'mouseout' && e.type !== 'mouseover') {
                        return false;
                    }

                    while (reltg && reltg !== handler) {
                        reltg = reltg.parentNode;
                    }

                    return reltg !== handler;
                }

                function SvgIcon (el, config, options) {
                    var self;

                    this.el      = el;
                    this.options = extend({}, this.options);

                    extend(this.options, options);

                    this.svg = new Snap(this.options.size.w, this.options.size.h);

                    this.svg.attr('viewBox', '0 0 64 64');
                    this.el.appendChild(this.svg.node);

                    this.toggled    = false;
                    this.clickevent = mobileCheck() ? 'touchstart' : 'click';

                    this.config = config[this.el.getAttribute('data-icon-name')];

                    if (hasClass(this.el, 'si-icon-reverse')) {
                        this.reverse = true;
                    }

                    if (!this.config) {
                        return;
                    }

                    self = this;

                    Snap.load(this.config.url, function (f) {
                        var g = f.select('g');

                        self.svg.append(g);
                        self.options.onLoad();
                        self.initEvents();

                        if (self.reverse) {
                            self.toggle();
                        }
                    });
                }

                SvgIcon.prototype.options = {
                    speed  : 200,
                    easing : function (a) {
                        return a;
                    },
                    evtoggle : 'click',
                    size     : {
                        w : 64,
                        h : 64
                    },
                    onLoad : function () {
                        return false;
                    },
                    onToggle : function () {
                        return false;
                    }
                };

                SvgIcon.prototype.initEvents = function () {
                    var self     = this,
                        toggleFn = function (ev) {
                            if ((ev.type.toLowerCase() === 'mouseover' || ev.type.toLowerCase() === 'mouseout') &&
                                isMouseLeaveOrEnter(ev, this) || ev.type.toLowerCase() === 'click') {
                                self.toggle(true);
                                self.options.onToggle();
                            }
                        };

                    if (this.options.evtoggle === 'mouseover') {
                        $(this.el).on('mouseover', toggleFn);
                        $(this.el).on('mouseout', toggleFn);
                    } else {
                        $(this.el).on('click', toggleFn);
                    }
                };

                function timeoutCallback (elem, value, animationProp, self) {
                    return function () {
                        elem.animate(JSON.parse(value), self.options.speed, self.options.easing, function () {
                            if (animationProp.after) {
                                this.attr(JSON.parse(animationProp.after));
                            }

                            if (animationProp.animAfter) {
                                this.animate(JSON.parse(animationProp.animAfter), self.options.speed, self.options.easing);
                            }
                        });
                    };
                }

                function getAnimation (self, a) {
                    return self.toggled ? a.animProperties.from : a.animProperties.to;
                }

                function getTimeout (motion, animProp) {
                    return motion && animProp.delayFactor ? animProp.delayFactor : 0;
                }

                function treatBefore (animProp, el) {
                    if (animProp.before) {
                        el.attr(JSON.parse(animProp.before));
                    }
                }

                SvgIcon.prototype.toggle = function (motion) {
                    var self = this,
                        len,
                        i,

                        a,
                        el,
                        animProp,
                        val,
                        timeout;

                    if (!this.config.animation) {
                        return;
                    }

                    for (i = 0, len = this.config.animation.length; i < len; ++i) {
                        a        = this.config.animation[i];
                        el       = this.svg.select(a.el);
                        animProp = getAnimation(this, a);
                        val      = animProp.val;
                        timeout  = getTimeout(motion, animProp);

                        treatBefore(animProp, el);

                        if (motion) {
                            setTimeout(timeoutCallback(el, val, animProp, self), timeout * self.options.speed);
                        } else {
                            el.attr(JSON.parse(val));
                        }
                    }

                    this.toggled = !this.toggled;
                };

                scope.icon = new SvgIcon(element[0], SVG_ICON_CONFIG);

                menuCloseSubs = PubSub.subscribe(EVENTS.APP_MENU.CHANGE_ICON, function () {
                    if ($(scope.icon.el).attr('data-js') === 'menu-toggle') {
                        scope.icon.toggle(true);
                    }
                });

                scope.$on('$destroy', function () {
                    menuCloseSubs.remove();
                });
            }
        };
    }

    dependencies.push(SvgIconDirective);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function SvgIconConfigWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        constantName = 'SVG_ICON_CONFIG',
        PREFIX       =  module.constants.PATH.SVG,
        SVG_ICON_CONFIG;

    SVG_ICON_CONFIG = {
        clock : {
            url       : PREFIX + 'clock.svg',
            animation : [{
                el             : 'path:nth-child(2)',
                animProperties : {
                    from : {
                        val : '{"transform" : "r0 32 32"}'
                    },
                    to : {
                        val : '{"transform" : "r630 32 32"}'
                    }
                }
            }, {
                el             : 'path:nth-child(3)',
                animProperties : {
                    from : {
                        val : '{"transform" : "r0 32 32"}'
                    },
                    to : {
                        val : '{"transform" : "r80 32 32"}'
                    }
                }
            }]
        },
        trash : {
            url       : PREFIX + 'trash.svg',
            animation : [{
                el             : 'path:nth-child(1)',
                animProperties : {
                    from : {
                        val : '{"transform" : "t0 0"}'
                    },
                    to : {
                        val : '{"transform" : "t0 -8"}'
                    }
                }
            }]
        },
        contract : {
            url       : PREFIX + 'contract.svg',
            animation : [{
                el             : 'rect:nth-child(2)',
                animProperties : {
                    from : {
                        val   : '{"transform" : "t0 0"}',
                        after : '{ "opacity" : 0 }'
                    },
                    to : {
                        val    : '{"transform" : "t-5 -5"}',
                        before : '{ "opacity" : 1 }'
                    }
                }
            }, {
                el             : 'rect:nth-child(3)',
                animProperties : {
                    from : {
                        val   : '{"transform" : "t0 0"}',
                        after : '{ "opacity" : 0 }'
                    },
                    to : {
                        val    : '{"transform" : "t-10 -10"}',
                        before : '{ "opacity" : 1 }'
                    }
                }
            }]
        },
        maximize : {
            url       : PREFIX + 'maximize.svg',
            animation : [{
                el             : 'path:nth-child(1)',
                animProperties : {
                    from : {
                        val : '{"transform" : "t0 0"}'
                    },
                    to : {
                        val : '{"transform" : "t-5 -5"}'
                    }
                }
            }, {
                el             : 'path:nth-child(2)',
                animProperties : {
                    from : {
                        val : '{"transform" : "t0 0"}'
                    },
                    to : {
                        val : '{"transform" : "t5 -5"}'
                    }
                }
            }, {
                el             : 'path:nth-child(3)',
                animProperties : {
                    from : {
                        val : '{"transform" : "t0 0"}'
                    },
                    to : {
                        val : '{"transform" : "t-5 5"}'
                    }
                }
            }, {
                el             : 'path:nth-child(4)',
                animProperties : {
                    from : {
                        val : '{"transform" : "t0 0"}'
                    },
                    to : {
                        val : '{"transform" : "t5 5"}'
                    }
                }
            }]
        },
        maximizeRotate : {
            url       : PREFIX + 'maximize.svg',
            animation : [{
                el             : 'path:nth-child(1)',
                animProperties : {
                    from : {
                        val : '{"transform" : "r0 16 16 t0 0"}'
                    },
                    to : {
                        val : '{"transform" : "r180 16 16 t-5 -5"}'
                    }
                }
            }, {
                el             : 'path:nth-child(2)',
                animProperties : {
                    from : {
                        val : '{"transform" : "r0 48 16 t0 0"}'
                    },
                    to : {
                        val : '{"transform" : "r-180 48 16 t5 -5"}'
                    }
                }
            }, {
                el             : 'path:nth-child(3)',
                animProperties : {
                    from : {
                        val : '{"transform" : "r0 16 48 t0 0"}'
                    },
                    to : {
                        val : '{"transform" : "r-180 16 48 t-5 5"}'
                    }
                }
            }, {
                el             : 'path:nth-child(4)',
                animProperties : {
                    from : {
                        val : '{"transform" : "r0 48 48 t0 0"}'
                    },
                    to : {
                        val : '{"transform" : "r180 48 48 t5 5"}'
                    }
                }
            }]
        },
        volume : {
            url       : PREFIX + 'volume.svg',
            animation : [{
                el             : 'path:nth-child(1)',
                animProperties : {
                    from : {
                        val : '{"transform" : "t-10 0 s0 32 32"}'
                    },
                    to : {
                        val         : '{"transform" : "t0 0 s1 32 32", "opacity" : 1}',
                        before      : '{"transform" : "t-10 0 s0 32 32"}',
                        delayFactor : 0.5
                    }
                }
            }, {
                el             : 'path:nth-child(2)',
                animProperties : {
                    from : {
                        val         : '{"transform" : "t-10 0 s0 32 32"}',
                        delayFactor : 0.25
                    },
                    to : {
                        val         : '{"transform" : "t0 0 s1 32 32", "opacity" : 1}',
                        before      : '{"transform" : "t-10 0 s0 32 32"}',
                        delayFactor : 0.25
                    }
                }
            }, {
                el             : 'path:nth-child(3)',
                animProperties : {
                    from : {
                        val         : '{"transform" : "t-10 0 s0 32 32"}',
                        delayFactor : 0.5
                    },
                    to : {
                        val    : '{"transform" : "t0 0 s1 32 32", "opacity" : 1}',
                        before : '{"transform" : "t-10 0 s0 32 32"}'
                    }
                }
            }]
        },
        plus : {
            url       : PREFIX + 'plus.svg',
            animation : [{
                el             : 'path:nth-child(1)',
                animProperties : {
                    from : {
                        val : '{"transform" : "r0 32 32", "opacity" : 1}'
                    },
                    to : {
                        val : '{"transform" : "r180 32 32", "opacity" : 0}'
                    }
                }
            }, {
                el             : 'path:nth-child(2)',
                animProperties : {
                    from : {
                        val : '{"transform" : "r0 32 32"}'
                    },
                    to : {
                        val : '{"transform" : "r180 32 32"}'
                    }
                }
            }]
        },
        plusCross : {
            url       : PREFIX + 'plus.svg',
            animation : [{
                el             : 'path:nth-child(1)',
                animProperties : {
                    from : {
                        val : '{"transform" : "r0 32 32"}'
                    },
                    to : {
                        val : '{"transform" : "r45 32 32"}'
                    }
                }
            }, {
                el             : 'path:nth-child(2)',
                animProperties : {
                    from : {
                        val : '{"transform" : "r0 32 32"}'
                    },
                    to : {
                        val : '{"transform" : "r45 32 32"}'
                    }
                }
            }]
        },
        hamburger : {
            url       : PREFIX + 'hamburger.svg',
            animation : [{
                el             : 'path:nth-child(1)',
                animProperties : {
                    from : {
                        val : '{"path" : "m 5.0916789,20.818994 53.8166421,0"}'
                    },
                    to : {
                        val : '{"path" : "m 5.091679,9.771104 53.816642,0"}'
                    }
                }
            }, {
                el             : 'path:nth-child(3)',
                animProperties : {
                    from : {
                        val : '{"path" : "m 5.0916788,42.95698 53.8166422,0"}'
                    },
                    to : {
                        val : '{"path" : "m 5.0916789,54.00487 53.8166421,0"}'
                    }
                }
            }]
        },
        hamburgerCross : {
            url       : PREFIX + 'hamburger.svg',
            animation : [{
                el             : 'path:nth-child(1)',
                animProperties : {
                    from : {
                        val : '{"path" : "m 5.0916789,20.818994 53.8166421,0"}'
                    },
                    to : {
                        val : '{"path" : "M 12.972944,50.936147 51.027056,12.882035"}'
                    }
                }
            }, {
                el             : 'path:nth-child(2)',
                animProperties : {
                    from : {
                        val    : '{"transform" : "s1 1", "opacity" : 1}',
                        before : '{"transform" : "s0 0"}'
                    },
                    to : {
                        val : '{"opacity" : 0}'
                    }
                }
            }, {
                el             : 'path:nth-child(3)',
                animProperties : {
                    from : {
                        val : '{"path" : "m 5.0916788,42.95698 53.8166422,0"}'
                    },
                    to : {
                        val : '{"path" : "M 12.972944,12.882035 51.027056,50.936147"}'
                    }
                }
            }]
        },
        navLeftArrow : {
            url       : PREFIX + 'nav-left-arrow.svg',
            animation : [{
                el             : 'path',
                animProperties : {
                    from : {
                        val : '{"path" : "M 48.592939,9.792208 15.407062,31.887987 48.592939,54.025974"}'
                    },
                    to : {
                        val : '{"path" : "M 15.407062,9.792208 48.592939,31.887987 15.407062,54.025974"}'
                    }
                }
            }]
        },
        navUpArrow : {
            url       : PREFIX + 'nav-up-arrow.svg',
            animation : [{
                el             : 'path',
                animProperties : {
                    from : {
                        val : '{"path" : "M 9.8831175,48.502029 31.978896,15.316152 54.116883,48.502029"}'
                    },
                    to : {
                        val : '{"path" : "M 9.8831175,15.316152 31.978896,48.502029 54.116883,15.316152"}'
                    }
                }
            }]
        },
        rightArrow : {
            url       : PREFIX + 'right-arrow.svg',
            animation : [{
                el             : 'path',
                animProperties : {
                    from : {
                        val : '{"path" : "M 34.419061,13.24425 57.580939,32.017897 34.419061,50.75575"}'
                    },
                    to : {
                        val : '{"path" : "M 31.580939,13.24425 8.419061,32.017897 31.580939,50.75575"}'
                    }
                }
            }]
        },
        downArrow : {
            url       : PREFIX + 'down-arrow.svg',
            animation : [{
                el             : 'path',
                animProperties : {
                    from : {
                        val : '{"path" : "M 14.083963,33.258774 32.85761,56.420652 51.595463,33.258774"}'
                    },
                    to : {
                        val : '{"path" : "M 14.083963,30.420652 32.85761,7.258774 51.595463,30.420652"}'
                    }
                }
            }]
        },
        smiley : {
            url       : PREFIX + 'smiley.svg',
            animation : [{
                el             : 'path',
                animProperties : {
                    from : {
                        val : '{"path" : "m 19.380224,39.901132 c 0,0 4.860771,5.28501 12.770151,5.28501 7.909379,0 12.770152,-5.28501 12.770152,-5.28501"}'
                    },
                    to : {
                        val : '{"path" : "m 19.380224,45.186142 c 0,0 4.860771,-5.28501 12.770151,-5.28501 7.909379,0 12.770152,5.28501 12.770152,5.28501"}'
                    }
                }
            }]
        },
        play : {
            url       : PREFIX + 'play.svg',
            animation : [{
                el             : 'path',
                animProperties : {
                    from : {
                        val : '{"path" : "M 18.741071,52 31.30178,42.531655 45.258928,31.887987 18.741071,12 z"}'
                    },
                    to : {
                        val : '{"path" : "m 12.5,52 39,0 0,-40 -39,0 z"}'
                    }
                }
            }]
        },
        mail : {
            url       : PREFIX + 'mail.svg',
            animation : [{
                el             : 'path',
                animProperties : {
                    from : {
                        val : '{"path" : "m 61.693118,24.434001 -59.386236,0 29.692524,19.897984 z"}'
                    },
                    to : {
                        val : '{"path" : "m 61.693118,24.434001 -59.386236,0 29.692524,-19.7269617 z"}'
                    }
                }
            }]
        },
        equalizer : {
            url       : PREFIX + 'equalizer.svg',
            animation : [{
                el             : 'path:nth-child(1)',
                animProperties : {
                    from : {
                        val : '{"transform" : "t 0 0"}'
                    },
                    to : {
                        val : '{"transform" : "t 0 -30"}'
                    }
                }
            }, {
                el             : 'path:nth-child(2)',
                animProperties : {
                    from : {
                        val : '{"transform" : "t 0 0"}'
                    },
                    to : {
                        val : '{"transform" : "t 0 35"}'
                    }
                }
            }, {
                el             : 'path:nth-child(3)',
                animProperties : {
                    from : {
                        val : '{"transform" : "t 0 0"}'
                    },
                    to : {
                        val : '{"transform" : "t 0 -10"}'
                    }
                }
            }]
        },
        glass : {
            url       : PREFIX + 'glass.svg',
            animation : [{
                el             : 'path',
                animProperties : {
                    from : {
                        val : '{"path" : "m 16.778805,44 c 0,0 9.518312,-3.481153 13.221195,-2 10,4 17.153596,2 17.153596,2 L 45,54 20,54 z"}'
                    },
                    to : {
                        val : '{"path" : "M 13.183347,29 C 13.183347,29 25,31.439358 30,29 c 12.710171,-6.200932 20,0 20,0 l -5,25 -25,0 z"}'
                    }
                }
            }]
        },
        hourglass : {
            url       : PREFIX + 'hourglass.svg',
            animation : [{
                el             : 'path:nth-child(1)',
                animProperties : {
                    from : {
                        val : '{"transform" : "r 0 32 32"}'
                    },
                    to : {
                        val : '{"transform" : "r 180 32 32"}'
                    }
                }
            }, {
                el             : 'path:nth-child(2)',
                animProperties : {
                    from : {
                        val       : '{"transform" : "r 0 32 32"}',
                        animAfter : '{"path" : "m 31,32 2,0 0,0 9,15 -20,0 9,-15 z"}'
                    },
                    to : {
                        val       : '{"transform" : "r 180 32 32"}',
                        animAfter : '{"path" : "m 22,17 20,0 -9,15 0,0 -2,0 0,0 z"}'
                    }
                }
            }]
        },
        padlock : {
            url       : PREFIX + 'padlock.svg',
            animation : [{
                el             : 'path',
                animProperties : {
                    from : {
                        val : '{"transform" : "t 0 0"}'
                    },
                    to : {
                        val : '{"transform" : "t 0 -11"}'
                    }
                }
            }]
        },
        zoom : {
            url       : PREFIX + 'zoom.svg',
            animation : [{
                el             : 'path:nth-child(1)',
                animProperties : {
                    from : {
                        val : '{"transform" : "s 1 1"}'
                    },
                    to : {
                        val : '{"transform" : "s 1.1 1.1"}'
                    }
                }
            }, {
                el             : 'path:nth-child(2)',
                animProperties : {
                    from : {
                        val : '{"transform" : "s 1 1", "stroke-width" : "1"}'
                    },
                    to : {
                        val : '{"transform" : "s 2 2", "stroke-width" : "2"}'
                    }
                }
            }]
        },
        monitor : {
            url       : PREFIX + 'monitor.svg',
            animation : [{
                el             : 'path',
                animProperties : {
                    from : {
                        val : '{"path" : "m 5,11.75 0,33.75 20.25,0 -6.75,6.75 27,0 -6.75,-6.75 20.25,0 0,-33.75 -54,0 z m 2.65625,2.875 48.6875,0 0,27.8125 -48.6875,0 0,-27.8125 z"}'
                    },
                    to : {
                        val : '{"path" : "m 21.875,16.8125 0,30.375 3.375,0 3.5,0 3.25,0 6.75,0 3.375,0 0,-30.375 -20.25,0 z m 3.375,3.375 13.5,0 0,20.25 -13.5,0 0,-20.25 z m 6.75,22.25 c 0.756641,0 1.375,0.618359 1.375,1.375 0,0.756641 -0.618359,1.375 -1.375,1.375 -0.756641,0 -1.375,-0.618359 -1.375,-1.375 0,-0.756641 0.618359,-1.375 1.375,-1.375 z"}'
                    }
                }
            }]
        },
        flag : {
            url       : PREFIX + 'flag.svg',
            animation : [{
                el             : 'path',
                animProperties : {
                    from : {
                        val : '{"path" : "m 11.75,11.75 c 0,0 10.229631,3.237883 20.25,0 10.020369,-3.2378833 20.25,0 20.25,0 l 0,27 c 0,0 -6.573223,-3.833185 -16.007359,0 -9.434136,3.833185 -24.492641,0 -24.492641,0 z"}'
                    },
                    to : {
                        val : '{"path" : "m 11.75,11.75 c 0,0 8.373476,-4.8054563 17.686738,0 9.313262,4.805456 22.813262,0 22.813262,0 l 0,27 c 0,0 -11.699747,4.363515 -22.724874,0 C 18.5,34.386485 11.75,38.75 11.75,38.75 z"}'
                    }
                }
            }]
        }
    };

    _.assign(module, {
        SVG_ICON_CONFIG : SVG_ICON_CONFIG
    });

    module.constant(constantName, SVG_ICON_CONFIG);
}(angular, MODULES));
;(function TicketsInfoBarWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'ticketsInfoBar',
        dependencies  = ['$timeout', 'TicketsRedesignService', 'PublisherSubscriber'];

    function TicketsInfoBar ($timeout, TicketsRedesignService, PubSub) {
        var VIEWS_PATH   = module.constants.PATH.VIEWS,
            TICKET_CONST = module.constants.TICKET,
            APP_EVENTS   = module.constants.APP_EVENTS;

        return {
            restrict    : 'EA',
            replace     : true,
            templateUrl : VIEWS_PATH + 'tickets/tickets-info-bar.tpl.html',
            link        : function (scope) {
                var timeoutPromise = null,
                    noTicket,
                    noCamping,
                    error,

                    messages = [{
                        messageKey : TICKET_CONST.INFO_BAR.MESSAGES.TICKET_SELECTED,
                        condition  : function (hasTicketSelected, hasCampingSelected) {
                            return hasTicketSelected && !hasCampingSelected && !scope.flags.isCampingVisible;
                        }
                    }, {
                        messageKey : TICKET_CONST.INFO_BAR.MESSAGES.SELECT_CAMPING,
                        condition  : function (hasTicketSelected, hasCampingSelected) {
                            return hasTicketSelected && !hasCampingSelected && scope.flags.isCampingVisible;
                        }
                    }, {
                        messageKey : TICKET_CONST.INFO_BAR.MESSAGES.FINALIZE,
                        condition  : function (hasTicketSelected, hasCampingSelected) {
                            return hasTicketSelected && hasCampingSelected;
                        }
                    }, {
                        messageKey : TICKET_CONST.INFO_BAR.MESSAGES.NOTHING_SELECTED,
                        condition  : function () {
                            return true;
                        }
                    }];

                function defineMessageKey (hasTicketSelected, hasCampingSelected) {
                    scope.flags.isErrorMessage = false;

                    $timeout.cancel(timeoutPromise);

                    _.forEach(messages, function (possible) {
                        if (possible.condition(hasTicketSelected, hasCampingSelected)) {
                            scope.flags.keyOfMessageToDisplay = possible.messageKey;

                            return false;
                        }

                        return true;
                    });

                    if (hasTicketSelected) {
                        timeoutPromise = $timeout(function () {
                            scope.flags.keyOfMessageToDisplay = TICKET_CONST.INFO_BAR.MESSAGES.TICKET_SELECTED;

                            scope.$apply();
                        }, 5000);
                    }
                }

                function isCampingVisible () {
                    var $campingTickets = $('.accommodation');

                    return _.some(_.reduce($campingTickets, function (result, ticket) {
                        result.push($(ticket).visible());

                        return result;
                    }, []));
                }

                scope.flags = {
                    isCampingVisible      : false,
                    isErrorMessage        : false,
                    keyOfMessageToDisplay : TICKET_CONST.INFO_BAR.MESSAGES.NOTHING_SELECTED,
                    errorMessage          : ''
                };

                scope.$watch(TicketsRedesignService.hasSelectedATicket, function (hasTicketSelected) {
                    var hasCampingSelected = TicketsRedesignService.hasSelectedCamping();

                    defineMessageKey(hasTicketSelected, hasCampingSelected);
                });

                scope.$watchCollection(TicketsRedesignService.hasSelectedCamping, function (hasCampingSelected) {
                    var hasTicketSelected = TicketsRedesignService.hasSelectedATicket();

                    defineMessageKey(hasTicketSelected, hasCampingSelected);
                });

                $(window).on('scroll', _.debounce(function () {
                    var hasTicketSelected  = TicketsRedesignService.hasSelectedATicket(),
                        hasCampingSelected = TicketsRedesignService.hasSelectedCamping();

                    scope.flags.isCampingVisible = isCampingVisible();

                    defineMessageKey(hasTicketSelected, hasCampingSelected);

                    scope.$apply();
                }, 1000 / 60));

                function errorTimeout () {
                    var hasTicketSelected = TicketsRedesignService.hasSelectedATicket();

                    scope.flags.isErrorMessage   = true;
                    scope.flags.isCampingVisible = isCampingVisible();

                    $timeout.cancel(timeoutPromise);

                    if (hasTicketSelected) {
                        timeoutPromise = $timeout(function () {
                            scope.flags.keyOfMessageToDisplay = TICKET_CONST.INFO_BAR.MESSAGES.TICKET_SELECTED;
                            scope.flags.isErrorMessage        = false;

                            scope.$apply();
                        }, 5000);
                    }
                }

                function noTicketSelected () {
                    scope.flags.keyOfMessageToDisplay = TICKET_CONST.INFO_BAR.MESSAGES.NO_TICKET_SELECTED;

                    errorTimeout();
                }

                function noCampingSelected () {
                    scope.flags.keyOfMessageToDisplay = TICKET_CONST.INFO_BAR.MESSAGES.NO_CAMPING_SELECTED;

                    errorTimeout();
                }

                function onError (errorMessage) {
                    scope.flags.keyOfMessageToDisplay = TICKET_CONST.INFO_BAR.MESSAGES.ERROR;
                    scope.flags.errorMessage          = errorMessage;

                    errorTimeout();
                }

                noTicket  = PubSub.subscribe(APP_EVENTS.TICKETS.NO_TICKET_SELECTED, noTicketSelected);
                noCamping = PubSub.subscribe(APP_EVENTS.TICKETS.NO_CAMPING_SELECTED, noCampingSelected);
                error     = PubSub.subscribe(APP_EVENTS.TICKETS.ERROR, onError);

                scope.$on('$destroy', function () {
                    noTicket.remove();
                    noCamping.remove();
                    error.remove();
                });
            }
        };
    }

    dependencies.push(TicketsInfoBar);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'validateNumber',
        dependencies  = ['NumberUtil'];

    function ValidateNumber (NumberUtil) {
        function isModelValueANumber (value) {
            return typeof value === 'number' && value >= 0;
        }

        function bindEvents (elem, preventInvalid, preventPaste, isInteger) {
            if (preventInvalid) {
                elem.on('keypress', function (e) {
                    return NumberUtil.checkIfNumberIsValid(isInteger, e);
                });
                elem.on('paste', function (e) {
                    if (preventPaste) {
                        e.preventDefault();
                    }

                    return NumberUtil.checkIfPastedNumberIsValid(e);
                });
            }
        }

        function getValue (model, defaultValue) {
            return model || defaultValue;
        }

        return {
            restrict : 'AE',
            require  : 'ngModel',
            priority : 10,
            scope    : {
                options : '=validateNumber'
            },
            link : function (scope, elem, attrs, ngModel) {
                var DEFAULT_MIN    = getValue(scope.options.min, 0),
                    DEFAULT_MAX    = getValue(scope.options.max, Infinity),
                    DECIMAL_COUNT  = 2,
                    DECIMAL_POINT  = '.',
                    preventInvalid = getValue(scope.options.preventInvalid, true),
                    preventPaste   = getValue(scope.options.preventPaste, false),
                    isInteger      = false,
                    isDouble       = !isInteger;

                if (scope.options.integer) {
                    isInteger = scope.options.integer;
                }

                ngModel.$validators.validateInteger = function (value) {
                    return NumberUtil.validateNumber(value, DEFAULT_MIN, DEFAULT_MAX);
                };

                function onChange () {
                    var floatValue = NumberUtil.floatParser(elem.val(), DECIMAL_COUNT);

                    if (!isNaN(floatValue)) {
                        elem.val(String(floatValue).replace('.', DECIMAL_POINT));
                    }
                }

                function renderValue () {
                    if (isModelValueANumber(ngModel.$modelValue)) {
                        elem.val(NumberUtil.floatParser(ngModel.$modelValue, DECIMAL_COUNT));
                    }
                }

                function floatParser (newValue) {
                    return NumberUtil.floatParser(newValue, DECIMAL_COUNT);
                }

                if (isDouble) {
                    ngModel.$render = renderValue;
                    ngModel.$parsers.unshift(floatParser);
                    elem.on('change', onChange);
                }

                bindEvents(elem, preventInvalid, preventPaste, isInteger);
            }
        };
    }

    dependencies.push(ValidateNumber);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function VideoBoxWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'videoBox',
        dependencies  = ['$timeout'];

    function VideoBox ($timeout) {
        return {
            restrict : 'A',
            link     : function (scope, element) {
                $timeout(function () {
                    $(element).mouseenter(
                        function () {
                            $(this).find('.text').slideUp();
                        }
                    ).mouseout(
                        function () {
                            $(this).find('.text').slideDown();
                        }
                    );
                });
            }
        };
    }

    dependencies.push(VideoBox);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function FormatterWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        filterName   = 'formatter',
        dependencies = [];

    function Formatter () {
        return function (string, format) {
            return _[format + 'Case'](string);
        };
    }

    dependencies.push(Formatter);

    module.filter(filterName, dependencies);
}(angular, MODULES));
;(function InterceptorRunWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        dependencies = ['$injector'];

    function InterceptorRun ($injector) {
        var CustomInterceptor    = $injector.get('CustomInterceptor'),
            ModelInterceptor     = $injector.get('ModelInterceptor'),
            HasAccessInterceptor = $injector.get('HasAccessInterceptor'),
            ResponseInterceptor  = $injector.get('ResponseInterceptor');

        CustomInterceptor.registerRequestInterceptor(ModelInterceptor.request);
        CustomInterceptor.registerRequestInterceptor(HasAccessInterceptor.request);
        CustomInterceptor.registerResponseInterceptor(ResponseInterceptor.response);
        CustomInterceptor.registerResponseErrorInterceptor(ResponseInterceptor.responseError);
    }

    dependencies.push(InterceptorRun);

    module.run(dependencies);
}(angular, MODULES));
;(function CustomInterceptorWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'CustomInterceptor',
        dependencies = ['NumberUtil', 'INTERCEPTOR_CONSTANT'];

    function CustomInterceptor (NumberUtil, INTERCEPTOR_CONSTANT) {
        var TYPES    = INTERCEPTOR_CONSTANT.INTERCEPTOR_TYPE,
            handlers = {};

        _.forEach(TYPES, function (handlerType) {
            handlers[handlerType] = [];
        });

        function withdrawInterceptor (handlerId, type) {
            handlers[type] = _.filter(handlers[type], function (handler) {
                return handler.handlerId !== handlerId;
            });
        }

        function registerInterceptor (options) {
            var handlerId = NumberUtil.guid();

            handlers[options.type].push({
                handlerFn : options.callback,
                handlerId : handlerId
            });

            return {
                handlerId : handlerId,
                withdraw  : function () {
                    withdrawInterceptor(handlerId, options.type);
                }
            };
        }

        function getRequestHandlers () {
            return _.cloneDeep(handlers[TYPES.REQUEST]);
        }

        function getRequestErrorHandlers () {
            return _.cloneDeep(handlers[TYPES.REQUEST_ERROR]);
        }

        function getResponseHandlers () {
            return _.cloneDeep(handlers[TYPES.RESPONSE]);
        }

        function getResponseErrorHandlers () {
            return _.cloneDeep(handlers[TYPES.RESPONSE_ERROR]);
        }

        function registerRequestInterceptor (callbackFn) {
            return registerInterceptor({
                callback : callbackFn,
                type     : TYPES.REQUEST
            });
        }

        function registerRequestErrorInterceptor (callbackFn) {
            return registerInterceptor({
                callback : callbackFn,
                type     : TYPES.REQUEST_ERROR
            });
        }

        function registerResponseInterceptor (callbackFn) {
            return registerInterceptor({
                callback : callbackFn,
                type     : TYPES.RESPONSE
            });
        }

        function registerResponseErrorInterceptor (callbackFn) {
            return registerInterceptor({
                callback : callbackFn,
                type     : TYPES.RESPONSE_ERROR
            });
        }

        return {
            registerRequestInterceptor       : registerRequestInterceptor,
            registerRequestErrorInterceptor  : registerRequestErrorInterceptor,
            registerResponseInterceptor      : registerResponseInterceptor,
            registerResponseErrorInterceptor : registerResponseErrorInterceptor,

            getRequestHandlers       : getRequestHandlers,
            getRequestErrorHandlers  : getRequestErrorHandlers,
            getResponseHandlers      : getResponseHandlers,
            getResponseErrorHandlers : getResponseErrorHandlers
        };
    }

    dependencies.push(CustomInterceptor);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function HttpRequestInterceptorWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'HttpRequestInterceptor',
        dependencies = ['$q', 'CustomInterceptor'];

    function HttpRequestInterceptor ($q, CustomInterceptor) {
        function requestHandler (config) {
            var conf = config;

            _.forEach(CustomInterceptor.getRequestHandlers(), function (callback) {
                conf = callback.handlerFn(conf);
            });

            return conf;
        }

        function requestErrorHandler (rejection) {
            _.forEach(CustomInterceptor.getRequestErrorHandlers(), function (callback) {
                callback.handlerFn(rejection);
            });

            return $q.reject(rejection);
        }

        return {
            request      : requestHandler,
            requestError : requestErrorHandler
        };
    }

    dependencies.push(HttpRequestInterceptor);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function HttpResponseInterceptorWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'HttpResponseInterceptor',
        dependencies = ['$q', 'CustomInterceptor'];

    function HttpResponseInterceptor ($q, CustomInterceptor) {
        function responseHandler (response) {
            _.forEach(CustomInterceptor.getResponseHandlers(), function (callback) {
                callback.handlerFn(response);
            });

            return response;
        }

        function responseErrorHandler (rejection) {
            var reject = rejection;

            _.forEach(CustomInterceptor.getResponseErrorHandlers(), function (callback) {
                reject = callback.handlerFn(reject);
            });

            return $q.reject(reject);
        }

        return {
            response      : responseHandler,
            responseError : responseErrorHandler
        };
    }

    dependencies.push(HttpResponseInterceptor);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function InterceptorConfigWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        dependencies = ['$httpProvider'];

    function InterceptorsConfig ($httpProvider) {
        $httpProvider.interceptors.push('HttpRequestInterceptor');
        $httpProvider.interceptors.push('HttpResponseInterceptor');
    }

    dependencies.push(InterceptorsConfig);

    module.config(dependencies);
}(angular, MODULES));
;(function InterceptorConstantWrap (ng, MODULES) {
    'use strict';

    var module = ng.module(MODULES.APPLICATION.NAME),

        constantName         = 'INTERCEPTOR_CONSTANT',
        INTERCEPTOR_CONSTANT = {
            INTERCEPTOR_TYPE : {
                REQUEST        : 'REQUEST',
                REQUEST_ERROR  : 'REQUEST_ERROR',
                RESPONSE       : 'RESPONSE',
                RESPONSE_ERROR : 'RESPONSE_ERROR'
            },
            RESPONSE_STATUS : {
                SUCCESS               : 'SUCCESS',
                ERROR                 : 'error',
                TOKEN_ERROR           : 'token-error',
                OK                    : 200,
                BAD_REQUEST           : 400,
                INTERNAL_SERVER_ERROR : 500
            }
        };

    module.constant(constantName, INTERCEPTOR_CONSTANT);
}(angular, MODULES));
;(function HasAccessInterceptorWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'HasAccessInterceptor',
        dependencies = ['$q', '$log', '$injector'];

    /**
     * This interceptor implements an additional call
     * that checks if the user is allowed to make a call
     * to the API. It does this by checking 3 things:
     *     1. the constant FLAGS.SHOULD_CHECK_FOR_ACCESS should be true
     *     2. the request is to the API
     *     3. the request is configured so that it should check for access first
     *        (it has [requestAccess] in the url)
     *
     * @param $q
     * @param $log
     * @param $injector
     */
    function HasAccessInterceptor ($q, $log, $injector) {
        var $logger = $log.getInstance(factoryName),

            FLAGS       = $injector.get('FLAGS'),
            API         = $injector.get('API'),
            AuthService = $injector.get('AuthService'),
            Translation = $injector.get('TranslationFactory'),
            RegexUtil   = $injector.get('RegexUtil'),

            URL_PLACEHOLDER = module.constants.URL_PLACEHOLDER,
            API_REGEX       = new RegExp(API.ENDPOINT),
            ACCESS_REGEX    = new RegExp(RegexUtil.build(URL_PLACEHOLDER.REQUEST_ACCESS));

        function shouldCheckForAccess (url) {
            var isAccessRequestEnabled     = FLAGS.SHOULD_CHECK_FOR_ACCESS,
                isAPICall                  = API_REGEX.test(url),
                shouldCallCheckIfHasAccess = ACCESS_REGEX.test(url);

            return isAccessRequestEnabled && isAPICall && shouldCallCheckIfHasAccess;
        }

        function requestHandler (config) {
            var deferred = $q.defer();

            if (shouldCheckForAccess(config.url)) {
                $logger.debug('Checking if ' + config.url + ' has access to API ...');

                AuthService.hasAccess().then(function (response) {
                    var hasAccess = response.success;

                    $logger.debug(config.url + (hasAccess ? ' is' : ' is not ') + ' allowed access to API');

                    if (hasAccess) {
                        config.url = config.url.replace(ACCESS_REGEX, '');

                        deferred.resolve(config);
                    } else {
                        deferred.reject({
                            success : false,
                            error   : Translation.get('TICKETS.TRY_AGAIN_LATER'),
                            config  : config,
                            status  : 504
                        });
                    }
                }, function error () {
                    deferred.reject({
                        success : false,
                        error   : Translation.get('TICKETS.TRY_AGAIN_LATER'),
                        config  : config,
                        status  : 504
                    });
                });
            } else {
                config.url = config.url.replace(ACCESS_REGEX, '');

                deferred.resolve(config);
            }

            return deferred.promise;
        }

        return {
            request : requestHandler
        };
    }

    dependencies.push(HasAccessInterceptor);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function ModelInterceptorWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'ModelInterceptor',
        dependencies = ['PublisherSubscriber', 'DataShare', 'API', 'RegexUtil'];

    function ModelInterceptor (PubSub, DataShare, API, RegexUtil) {
        var EVENTS = module.constants.APP_EVENTS;

        function attachToken (url) {
            return url.indexOf('?') > -1 ? '&' : '?' + 'authorization_token=' + DataShare.getAuthToken();
        }

        function requestHandler (config) {
            var API_REGEX       = new RegExp(API.ENDPOINT),
                URL_PLACEHOLDER = module.constants.URL_PLACEHOLDER,

                LOADER_REGEX = new RegExp(RegexUtil.build(URL_PLACEHOLDER.LOADER)),
                AUTH_REGEX   = new RegExp(RegexUtil.build(URL_PLACEHOLDER.AUTH_TOKEN));

            if (API_REGEX.test(config.url)) {
                if (LOADER_REGEX.test(config.url)) {
                    config.url       = config.url.replace(LOADER_REGEX, '');
                    config.hasLoader = true;

                    PubSub.publish(EVENTS.LOADER.SHOW);
                }

                if (DataShare.isLoggedIn() && AUTH_REGEX.test(config.url)) {
                    config.url += attachToken(config.url);
                }

                config.url = config.url.replace(AUTH_REGEX, '');
            }

            return config;
        }

        return {
            request : requestHandler
        };
    }

    dependencies.push(ModelInterceptor);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function ResponseInterceptorWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'ResponseInterceptor',
        dependencies = ['$q', '$injector', '$timeout'];

    function ResponseInterceptor ($q, $injector, $timeout) {
        var PubSub    = $injector.get('PublisherSubscriber'),
            StateUtil = $injector.get('StateUtil'),
            EVENTS    = module.constants.APP_EVENTS,
            STATES    = module.constants.STATES;

        function isAuthTokenInvalid (response) {
            var invalidTokenMessage = 'There is no customer with this authorization token.';

            /*eslint-disable */
            return response.error_message === invalidTokenMessage;
            /*eslint-enable */
        }

        function responseInterceptor (response) {
            if (isAuthTokenInvalid(response.data)) {
                PubSub.publish(EVENTS.GENERAL.INVALID_TOKEN);
            }

            if (response.config.hasLoader) {
                $timeout(function () {
                    PubSub.publish(EVENTS.LOADER.HIDE);
                }, 0);
            }

            return response;
        }

        function isServerUnavailable (status) {
            var serviceUnavailableStatuses = [-1, 500, 503];

            return _.indexOf(serviceUnavailableStatuses, status) > -1;
        }

        function responseErrorInterceptor (rejection) {
            if (rejection.config.hasLoader) {
                $timeout(function () {
                    PubSub.publish(EVENTS.LOADER.HIDE);
                }, 0);
            }

            if (isServerUnavailable(rejection.status)) {
                StateUtil.go(STATES.INTERNAL_ERROR);
            }

            if (rejection.status === 504) {
                StateUtil.go(STATES.CONCURRENCY_ERROR);
            }

            return $q.reject(rejection);
        }

        return {
            response      : responseInterceptor,
            responseError : responseErrorInterceptor
        };
    }

    dependencies.push(ResponseInterceptor);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function LogDecoratorWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        dependencies = ['$provide'];

    function LogDecorator ($provide) {
        $provide.decorator('$log', ['$delegate', 'LogEnhancer', function ($delegate, logEnhancer) {
            logEnhancer($delegate);

            return $delegate;
        }]);
    }

    dependencies.push(LogDecorator);

    module.config(dependencies);
}(angular, MODULES));
;(function LogEnhancerWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'LogEnhancer',
        dependencies = ['StringUtil', 'TimeUtil'];

    function LogEnhancer (StringUtil, TimeUtil) {
        return function ($log) {
            var DEFAULT_SEPARATOR = '::',
                $logClone;

            $logClone = (function (logService) {
                return {
                    log   : logService.log,
                    info  : logService.info,
                    warn  : logService.warn,
                    debug : logService.debug,
                    error : logService.error
                };
            }($log));

            function prepareLog (logFn, className) {
                return function () {
                    var args = Array.prototype.slice.call(arguments),
                        now  = TimeUtil.getNowFormatted();

                    try {
                        args[0] = StringUtil.supplant('{0} - {1}{2}', [now, className, args[0]], null);
                        args    = StringUtil.supplant('{0}', args);

                        logFn.apply(null, [args]);
                    } catch (error) {
                        $log.error('LogEnhancer error: ' + error);
                    }
                };
            }

            $log.getInstance = function (className, customSeparator) {
                var newClassName = className ? className + (customSeparator || DEFAULT_SEPARATOR) : '';

                return {
                    log   : prepareLog($logClone.log, newClassName),
                    info  : prepareLog($logClone.info, newClassName),
                    warn  : prepareLog($logClone.warn, newClassName),
                    debug : prepareLog($logClone.debug, newClassName),
                    error : prepareLog($logClone.error, newClassName)
                };
            };

            return $log;
        };
    }

    dependencies.push(LogEnhancer);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'Artist',
        dependencies = ['$q', 'Restangular'];

    function Artist ($q, RestAngular) {
        var factory = {},

            URL_PLACEHOLDER = module.constants.URL_PLACEHOLDER,
            API_PATH        = module.constants.API_PATH,
            artistUrl       = [
                API_PATH.ARTIST,
                URL_PLACEHOLDER.LOADER
            ].join(''),
            artistBase = RestAngular.all(artistUrl);

        factory.getAll = function () {
            var deferred = $q.defer();

            artistBase.getList().then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };

        return factory;
    }

    dependencies.push(Artist);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function BasketWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'Basket',
        dependencies = ['$q', 'Restangular'];

    function Basket ($q, RestAngular) {
        var factory         = {},
            URL_PLACEHOLDER = module.constants.URL_PLACEHOLDER,
            API_PATH        = module.constants.API_PATH,

            basketUrl = [
                API_PATH.BASKET,
                URL_PLACEHOLDER.LOADER
            ].join(''),

            basketBase = RestAngular.all(basketUrl);

        factory.add = function (params) {
            var addToBasketData = {
                    actionType         : 'add',
                    authorizationToken : params.authorisationToken,
                    products           : {}
                },
                deferred = $q.defer();

            _.forEach(params.products, function (product) {
                addToBasketData.products[product.id] = product.quantity;
            });

            basketBase.post(addToBasketData).then(function (response) {
                deferred.resolve(response);
            });

            return deferred.promise;
        };

        factory.addUpgrade = function (authToken, products, upgradeInfo) {
            var params = {
                    actionType         : 'add',
                    authorizationToken : authToken,
                    products           : products,
                    upgradeInfo        : upgradeInfo
                },
                deferred = $q.defer();

            basketBase.post(params).then(function (response) {
                deferred.resolve(response);
            });

            return deferred.promise;
        };

        factory.update = function (params) {
            var updateBasketData = {
                    actionType         : 'update',
                    authorizationToken : params.authToken,
                    products           : {}
                },
                deferred = $q.defer();

            _.forEach(params.products, function (product, productKey) {
                updateBasketData.products[productKey] = product.qty;
            });

            basketBase.post(updateBasketData).then(function (response) {
                deferred.resolve(response);
            });

            return deferred.promise;
        };

        factory.setRecurring = function (params) {
            var deferred = $q.defer();

            basketBase.post(params).then(function (response) {
                deferred.resolve(response);
            });

            return deferred.promise;
        };

        factory.remove = function (params) {
            var updateBasketData = {
                    actionType         : 'delete',
                    authorizationToken : params.authToken,
                    products           : {}
                },
                deferred = $q.defer();

            updateBasketData.products[params.itemId] = 0;

            basketBase.post(updateBasketData).then(function (response) {
                deferred.resolve(response);
            });

            return deferred.promise;
        };

        factory.getDetails = function (authToken) {
            return basketBase.one(authToken).get().then(function (response) {
                var isSuccess = response.success;

                return {
                    success : isSuccess,
                    data    : isSuccess ? response.data : null,
                    error   : isSuccess ? null : response.errorMessage
                };
            });
        };

        return factory;
    }

    dependencies.push(Basket);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function CityWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'City',
        dependencies = ['$http', '$q'];

    function City ($http, $q) {
        var factory = {};

        factory.get = function () {
            var deferred = $q.defer();

            $http.get('assets/json/cities-ro.json').success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                return $q.reject(data);
            });

            return deferred.promise;
        };

        return factory;
    }

    dependencies.push(City);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'ContentBox',
        dependencies = ['$q', 'Restangular'];

    function ContentBox ($q, RestAngular) {
        var factory = {},

            URL_PLACEHOLDER = module.constants.URL_PLACEHOLDER,
            API_PATH        = module.constants.API_PATH,
            contentBoxUrl   = [
                API_PATH.CONTENT_BOX,
                URL_PLACEHOLDER.LOADER
            ].join(''),
            contentBoxBase = RestAngular.all(contentBoxUrl);

        factory.getAll = function () {
            var deferred = $q.defer();

            contentBoxBase.getList().then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };

        return factory;
    }

    dependencies.push(ContentBox);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function CountryWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'Country',
        dependencies = ['$http', '$q'];

    function Country ($http, $q) {
        var factory = {};

        factory.get = function () {
            var deferred = $q.defer();

            $http.get('assets/json/country.json').success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                return $q.reject(data);
            });

            return deferred.promise;
        };

        return factory;
    }

    dependencies.push(Country);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function GalleryWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'Gallery',
        dependencies = ['$http', '$q'];

    function Gallery ($http, $q) {
        var factory = {};

        factory.get = function (year) {
            var deferred = $q.defer();

            $http.get('assets/json/gallery-' + year + '.json').success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                return $q.reject(data);
            });

            return deferred.promise;
        };

        return factory;
    }

    dependencies.push(Gallery);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'Invitation',
        dependencies = ['$q', '$http', 'Restangular', 'DataShare'];

    function Invitation ($q, $http, RestAngular, DataShare) {
        var factory = {},

            URL_PLACEHOLDER = module.constants.URL_PLACEHOLDER,
            API_PATH        = module.constants.API_PATH;

        factory.getAll = function () {
            var deferred = $q.defer(),

                invitationsUrl = [
                    API_PATH.INVITATIONS + '/' + DataShare.getAuthToken(),
                    URL_PLACEHOLDER.LOADER
                ].join('');

            RestAngular.oneUrl(invitationsUrl).get().then(function (response) {
                deferred.resolve(response);
            });

            return deferred.promise;
        };

        factory.update = function (data) {
            var deferred = $q.defer(),

                invitationsUrl = [
                    API_PATH.INVITATIONS + '/' + DataShare.getAuthToken(),
                    URL_PLACEHOLDER.LOADER
                ].join('');

            RestAngular.all(invitationsUrl).post(data).then(function (response) {
                deferred.resolve(response);
            });

            return deferred.promise;
        };

        factory.sendInvitationEmail = function (url) {
            var deferred = $q.defer();

            $http({method : 'GET', url : url}).then(function (response) {
                deferred.resolve(response);
            });

            return deferred.promise;
        };

        return factory;
    }

    dependencies.push(Invitation);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function NationalityWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'Nationality',
        dependencies = ['$http', '$q'];

    function Nationality ($http, $q) {
        var factory = {};

        factory.get = function () {
            var deferred = $q.defer();

            $http.get('assets/json/nationality.json').success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                return $q.reject(data);
            });

            return deferred.promise;
        };

        return factory;
    }

    dependencies.push(Nationality);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'News',
        dependencies = ['$q', 'Restangular'];

    function News ($q, RestAngular) {
        var factory = {},

            URL_PLACEHOLDER = module.constants.URL_PLACEHOLDER,
            API_PATH        = module.constants.API_PATH,
            newsUrl   = [
                API_PATH.NEWSROOM,
                URL_PLACEHOLDER.LOADER
            ].join(''),
            newsBase = RestAngular.all(newsUrl);

        factory.getAll = function () {
            var deferred = $q.defer();

            newsBase.all('list').customGET('all').then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };

        factory.get = function (id) {
            var deferred = $q.defer();

            newsBase.get(id).then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };

        return factory;
    }

    dependencies.push(News);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function OrderWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'Order',
        dependencies = ['$q', 'Restangular'];

    function Order ($q, RestAngular) {
        var factory         = {},
            orderBase       = RestAngular.all('orders'),
            API_PATH        = module.constants.API_PATH,
            URL_PLACEHOLDER = module.constants.URL_PLACEHOLDER;

        factory.checkout = function (authToken, isRecurring, salelinkCode) {
            var checkoutData = {
                    authorizationToken : authToken,
                    isRecurring        : isRecurring ? 1 : 0,
                    salelinkCode       : salelinkCode
                },
                deferred = $q.defer();

            orderBase.post(checkoutData).then(function (response) {
                deferred.resolve(response);
            });

            return deferred.promise;
        };

        factory.retrieveUserOrders = function (authToken) {
            var deferred = $q.defer(),
                ordersUrl = [
                    API_PATH.ORDERS,
                    URL_PLACEHOLDER.LOADER
                ].join('');

            RestAngular.all(ordersUrl).one('auth').one(authToken).get().then(function (tickets) {
                deferred.resolve(tickets);
            });

            return deferred.promise;
        };

        factory.retrieveUserVouchers = function (authToken) {
            var deferred = $q.defer(),
                ordersUrl = API_PATH.USER_VOUCHERS;

            RestAngular.all(ordersUrl).one(authToken).get().then(function (tickets) {
                deferred.resolve(tickets);
            });

            return deferred.promise;
        };

        return factory;
    }

    dependencies.push(Order);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function TicketWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'Package',
        dependencies = ['$q', 'Restangular'];

    function Package ($q, Restangular) {
        var factory         = {},
            URL_PLACEHOLDER = module.constants.URL_PLACEHOLDER,
            API_PATH        = module.constants.API_PATH,
            MAGIC_NUMBERS   = module.constants.MAGIC_NUMBERS;

        factory.get = function () {
            var deferred = $q.defer(),

                productsURL = [
                    API_PATH.PRODUCTS,
                    URL_PLACEHOLDER.AUTH_TOKEN,
                    URL_PLACEHOLDER.LOADER,
                    URL_PLACEHOLDER.REQUEST_ACCESS
                ].join(''),

                configuredRestangular = Restangular.withConfig(function (config) {
                    config.restangularFields.options = 'restangularOptions';
                }),

                /*eslint-disable */
                query = {
                    category_id : MAGIC_NUMBERS.PACKAGES,
                    limit       : 100
                };
                /*eslint-enable */

            configuredRestangular.all(productsURL).getList(query).then(function (tickets) {
                deferred.resolve(tickets);
            });

            return deferred.promise;
        };

        return factory;
    }

    dependencies.push(Package);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function ProducteWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'Product',
        dependencies = ['$q', 'Restangular'];

    function Product ($q, RestAngular) {
        var factory         = {},
            URL_PLACEHOLDER = module.constants.URL_PLACEHOLDER,
            API_PATH        = module.constants.API_PATH;

        factory.get = function () {
            var deferred = $q.defer(),

                productsURL = [
                    API_PATH.SHOP,
                    URL_PLACEHOLDER.LOADER
                ].join(''),

                configuredRestangular = RestAngular.withConfig(function (config) {
                    config.restangularFields.options = 'restangularOptions';
                });

            configuredRestangular.all(productsURL).getList().then(function (products) {
                deferred.resolve(products);
            });

            return deferred.promise;
        };

        return factory;
    }

    dependencies.push(Product);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'Story',
        dependencies = ['$q', 'Restangular'];

    function Story ($q, RestAngular) {
        var factory = {},

            URL_PLACEHOLDER = module.constants.URL_PLACEHOLDER,
            API_PATH        = module.constants.API_PATH,
            storiesUrl      = [
                API_PATH.STORIES,
                URL_PLACEHOLDER.LOADER
            ].join(''),
            newsBase = RestAngular.all(storiesUrl);

        factory.getAll = function () {
            var deferred = $q.defer();

            newsBase.all('list').customGET('all').then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };

        factory.get = function (id) {
            var deferred = $q.defer();

            newsBase.get(id).then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };

        return factory;
    }

    dependencies.push(Story);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function TicketWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'Ticket',
        dependencies = ['$q', '$http', 'Restangular', 'StateUtil', 'API'];

    function Ticket ($q, $http, Restangular, StateUtil, API) {
        var factory         = {},
            URL_PLACEHOLDER = module.constants.URL_PLACEHOLDER,
            API_PATH        = module.constants.API_PATH,
            MAGIC_NUMBERS   = module.constants.MAGIC_NUMBERS,

            ticketInfoUrl  = API_PATH.TICKET_INFO,
            ticketInfoBase = Restangular.all(ticketInfoUrl);

        factory.retrieveAllTickets = function () {
            var deferred = $q.defer(),

                DISCOUNT = 'discount',

                productsURL = [
                    API_PATH.PRODUCTS,
                    URL_PLACEHOLDER.AUTH_TOKEN,
                    URL_PLACEHOLDER.LOADER,
                    URL_PLACEHOLDER.REQUEST_ACCESS
                ].join(''),

                configuredRestangular = Restangular.withConfig(function (config) {
                    config.restangularFields.options = 'restangularOptions';
                }),

                /*eslint-disable */
                query = {
                    category_id : MAGIC_NUMBERS.TICKETS,
                    limit       : 100
                };
                /*eslint-enable */

            if (StateUtil.hasQueryParam(DISCOUNT)) {
                query[DISCOUNT] = StateUtil.retrieveQueryParam(DISCOUNT);
            }

            configuredRestangular.all(productsURL).getList(query).then(function (tickets) {
                deferred.resolve(tickets);
            });

            return deferred.promise;
        };


        factory.getInfo = function (authToken, id) {
            var deferred = $q.defer();

            ticketInfoBase.one(authToken).one(id).get().then(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };

        factory.updateInfo = function (authToken, id, data) {
            var deferred = $q.defer(),

                url = [
                    API.ENDPOINT + API_PATH.TICKET_INFO,
                    authToken,
                    id
                ].join('/');

            $http.put(url, data).then(function (response) {
                deferred.resolve(response);
            });

            return deferred.promise;
        };

        return factory;
    }

    dependencies.push(Ticket);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'User',
        dependencies = [];

    function User () {
        var factory = {};

        factory.retrieveInvitations = function () {};

        return factory;
    }

    dependencies.push(User);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function BootBoxServiceWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'BootBoxService',
        dependencies = ['$ngBootbox', '$translate'];

    function BootBoxService ($ngBootbox, $translate) {
        var factory = {};

        factory.addToBasket = function (product, callbacks, isSuccess, errorMessage) {
            var translationIds = [
                'TICKETS.BASKET.MODAL.ADD.TITLE',
                'TICKETS.BASKET.MODAL.ADD.MESSAGE',
                'TICKETS.BASKET.MODAL.ADD.VIEW_BASKET',
                'TICKETS.BASKET.MODAL.ADD.CLOSE'
            ];

            $translate(translationIds, {
                productName  : product.name,
                productPrice : product.price
            }).then(function (transl) {
                var options = {
                    title     : transl[translationIds[0]],
                    message   : isSuccess ? transl[translationIds[1]] : errorMessage,
                    className : '',
                    buttons   : {
                        default : {
                            label     : transl[translationIds[3]],
                            className : 'std-button std-button--light std-button--wide',
                            callback  : callbacks.default
                        },
                        success : {
                            label     : transl[translationIds[2]],
                            className : 'std-button std-button--bordered std-button--wide',
                            callback  : callbacks.success
                        }
                    }
                };

                $ngBootbox.customDialog(options);
            });
        };

        factory.removeFromBasket = function (callbacks) {
            var translationIds = [
                'TICKETS.BASKET.MODAL.REMOVE.TITLE'
            ];

            $translate(translationIds).then(function (transl) {
                $ngBootbox.confirm(transl[translationIds[0]]).then(function () {
                    callbacks.confirm();
                }, function () {
                    ng.noop();
                });
            });
        };

        factory.confirmNotFinalizedOrder = function (callbacks) {
            var translationIds = [
                'TICKETS_REDESIGN.CONFIRM_NOT_FINALIZED_ORDER.TITLE',
                'TICKETS_REDESIGN.CONFIRM_NOT_FINALIZED_ORDER.MESSAGE',
                'TICKETS_REDESIGN.CONFIRM_NOT_FINALIZED_ORDER.YES',
                'TICKETS_REDESIGN.CONFIRM_NOT_FINALIZED_ORDER.NO'
            ];

            $translate(translationIds).then(function (transl) {
                var options = {
                    title     : transl[translationIds[0]],
                    message   : transl[translationIds[1]],
                    className : '',
                    buttons   : {
                        default : {
                            label     : transl[translationIds[3]],
                            className : 'std-button std-button--light std-button--wide',
                            callback  : ng.noop
                        },
                        success : {
                            label     : transl[translationIds[2]],
                            className : 'std-button std-button--bordered std-button--wide',
                            callback  : callbacks.confirm
                        }
                    }
                };

                $ngBootbox.customDialog(options);
            });
        };

        factory.cancelOrder = function (callbacks) {
            var translationIds = [
                'ORDERS.CANCEL_INSTALLMENTS.TITLE',
                'ORDERS.CANCEL_INSTALLMENTS.MESSAGE',
                'ORDERS.CANCEL_INSTALLMENTS.CLOSE',
                'ORDERS.CANCEL_INSTALLMENTS.CANCEL_ORDER'
            ];

            $translate(translationIds).then(function (transl) {
                var options = {
                    title     : transl[translationIds[0]],
                    message   : transl[translationIds[1]],
                    className : '',
                    buttons   : {
                        default : {
                            label     : transl[translationIds[2]],
                            className : 'std-button std-button--bordered std-button--wide',
                            callback  : ng.noop
                        },
                        success : {
                            label     : transl[translationIds[3]],
                            className : 'std-button std-button--light std-button--wide',
                            callback  : callbacks.confirm
                        }
                    }
                };

                $ngBootbox.customDialog(options);
            });
        };

        factory.updateCard = function (callbacks) {
            var translationIds = [
                'ORDERS.UPDATE_CARD.TITLE',
                'ORDERS.UPDATE_CARD.MESSAGE',
                'ORDERS.UPDATE_CARD.CLOSE',
                'ORDERS.UPDATE_CARD.CANCEL_ORDER'
            ];

            $translate(translationIds).then(function (transl) {
                var options = {
                    title     : transl[translationIds[0]],
                    message   : transl[translationIds[1]],
                    className : '',
                    buttons   : {
                        default : {
                            label     : transl[translationIds[2]],
                            className : 'std-button std-button--bordered std-button--wide',
                            callback  : ng.noop
                        },
                        success : {
                            label     : transl[translationIds[3]],
                            className : 'std-button std-button--light std-button--wide',
                            callback  : callbacks.confirm
                        }
                    }
                };

                $ngBootbox.customDialog(options);
            });
        };

        factory.payFull = function (callbacks) {
            var translationIds = [
                'ORDERS.PAY_FULL.TITLE',
                'ORDERS.PAY_FULL.MESSAGE',
                'ORDERS.PAY_FULL.CLOSE',
                'ORDERS.PAY_FULL.CANCEL_ORDER'
            ];

            $translate(translationIds).then(function (transl) {
                var options = {
                    title     : transl[translationIds[0]],
                    message   : transl[translationIds[1]],
                    className : '',
                    buttons   : {
                        default : {
                            label     : transl[translationIds[2]],
                            className : 'std-button std-button--bordered std-button--wide',
                            callback  : ng.noop
                        },
                        success : {
                            label     : transl[translationIds[3]],
                            className : 'std-button std-button--light std-button--wide',
                            callback  : callbacks.confirm
                        }
                    }
                };

                $ngBootbox.customDialog(options);
            });
        };

        return factory;
    }

    dependencies.push(BootBoxService);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function CookieWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'Cookie',
        dependencies = ['ipCookie'];

    function Cookie (ipCookie) {
        var factory = {};

        factory.get = function (cookieName) {
            return ipCookie(cookieName);
        };

        factory.set = function (cookieName, value, options) {
            var opts = {
                expires : options && options.expires ? options.expires : 1
            };

            ipCookie(cookieName, value, opts);
        };

        factory.remove = function (cookieName) {
            ipCookie.remove(cookieName);
        };

        return factory;
    }

    dependencies.push(Cookie);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function DataShareWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'DataShare',
        dependencies = ['Cookie'];

    function DataShare (Cookie) {
        var factory = {},

            AUTH_CONST = module.constants.AUTH,

            isLoggedIn     = false,
            isFirstLogin   = false,
            addToCartError = {
                isVisible : false,
                message   : ''
            },
            activeRequests = 0,
            lineUpSortBy;

        factory.isLoggedIn = function (newValue) {
            if (!_.isUndefined(newValue)) {
                isLoggedIn = newValue;
            }

            return isLoggedIn;
        };

        factory.isFirstLogin = function (newValue) {
            if (!_.isUndefined(newValue)) {
                isFirstLogin = newValue;
            }

            return isFirstLogin;
        };

        factory.activeRequests = function (newValue) {
            if (!_.isUndefined(newValue)) {
                activeRequests = newValue;
            }

            return activeRequests;
        };

        factory.incrementActiveRequests = function () {
            activeRequests += 1;
        };

        factory.decrementActiveRequests = function () {
            activeRequests -= activeRequests > 1 ? 1 : 0;
        };

        factory.lineUpSortBy = function (newValue) {
            if (!_.isUndefined(newValue)) {
                lineUpSortBy = newValue;
            }

            return lineUpSortBy;
        };

        factory.addToCartError = function (newValue) {
            if (!_.isUndefined(newValue)) {
                addToCartError = newValue;
            }

            return addToCartError;
        };

        factory.getAuthToken = function () {
            return Cookie.get(AUTH_CONST.COOKIE.TOKEN);
        };

        factory.setAuthToken = function (token, options) {
            return Cookie.set(AUTH_CONST.COOKIE.TOKEN, token, options);
        };

        return factory;
    }

    dependencies.push(DataShare);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function TabServiceWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'TabService',
        dependencies = ['$translate', '$q'];

    function TabService ($translate, $q) {
        var factory = {},

            SN = module.constants.STATES;

        factory.build = function (state) {
            var stateName      = state.toUpperCase(),
                translPrefix   = stateName + '.TABS.',
                translationIds = [],
                tabData        = [],
                deferred       = $q.defer();

            _.forEach(SN[state], function (childState) {
                var childStateName = _.snakeCase(childState).toUpperCase();

                if (childStateName !== stateName) {
                    translationIds.push(translPrefix + childStateName);
                    tabData.push({
                        heading : '',
                        route   : [SN.APPLICATION.PUBLIC, SN[stateName].ROOT, SN[stateName][childStateName]].join('.')
                    });
                }
            });

            $translate(translationIds).then(function (transl) {
                _.forEach(tabData, function (tab, index) {
                    tab.heading = transl[translationIds[index]];
                });

                deferred.resolve(tabData);
            });

            return deferred.promise;
        };

        return factory;
    }

    dependencies.push(TabService);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function TranslationFactoryWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'TranslationFactory',
        dependencies = ['$translate'];

    function TranslationFactory ($translate) {
        var factory = {};

        factory.get = function (translationKey) {
            var lankKey = $translate.use();

            return _.get(module.TRANSLATIONS[lankKey.toLowerCase()], translationKey);
        };

        return factory;
    }

    dependencies.push(TranslationFactory);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function PublisherSubscriberWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'PublisherSubscriber',
        dependencies = ['Topic'];

    function PublisherSubscriber (Topic) {
        var factory = {};

        factory.subscribe = function (topic, subscriber) {
            return Topic.addSubscriber(topic, subscriber);
        };

        factory.publish = function (topic, info) {
            Topic.notify(topic, info);
        };

        factory.unsubscribeAll = function (topic) {
            Topic.removeAll(topic);
        };

        return factory;
    }

    dependencies.push(PublisherSubscriber);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function TopicWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'Topic',
        dependencies = [];

    function Topic () {
        var factory         = {},
            topicsContainer = [];

        function createTopic (topicName) {
            if (!topicsContainer[topicName]) {
                topicsContainer[topicName] = {
                    queue : []
                };
            }
        }

        function removeSubscriber (topicName, index) {
            _.remove(topicsContainer[topicName].queue,
                function (subscriber, subscriberIndex) {
                    return subscriberIndex === index;
                }
            );
        }

        function hasSubscribers (topicName) {
            return topicsContainer[topicName] && topicsContainer[topicName].queue.length > 0;
        }

        function getSubscribers (topicName) {
            return topicsContainer[topicName].queue;
        }

        factory.removeAll = function (topicName) {
            topicsContainer[topicName] = {
                queue : []
            };
        };

        factory.addSubscriber = function (topicName, subscriber) {
            var subscriberIndex;

            createTopic(topicName);

            subscriberIndex = topicsContainer[topicName].queue.push(subscriber) - 1;

            return {
                remove : function () {
                    removeSubscriber(topicName, subscriberIndex);
                }
            };
        };

        factory.notify = function (topicName, info) {
            if (hasSubscribers(topicName)) {
                _.forEach(getSubscribers(topicName), function (subscruber) {
                    subscruber(info || {});
                });
            }
        };

        return factory;
    }

    dependencies.push(Topic);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function NumberUtilWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'NumberUtil',
        dependencies = [];

    function NumberUtil () {
        var factory     = {},
            controlKeys = [0, 8, 13];

        function guid () {
            function s4 () {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }

            return function () {
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
            };
        }

        factory.guid = guid();

        factory.isNotDigit = function (which) {
            return which < 44 || which > 57 || which === 47 || which === 45;
        };

        factory.minNumberValidator = function (number, DEFAULT_MIN) {
            return parseFloat(number) >= DEFAULT_MIN;
        };

        factory.maxNumberValidator = function (number, DEFAULT_MAX) {
            return parseFloat(number) <= DEFAULT_MAX;
        };

        factory.isNotControlKey = function (which) {
            return controlKeys.indexOf(which) === -1;
        };

        factory.isDigit = function (which) {
            return which > 47 && which < 58;
        };

        factory.isInvalidIntegerChar = function (which) {
            return !factory.isDigit(which) && factory.isNotControlKey(which);
        };

        factory.isDoubleInvalidChar = function (which) {
            return factory.isNotDigit(which) && factory.isNotControlKey(which);
        };

        factory.floatParser = function (newValue, DECIMAL_COUNT) {
            var floatValue = parseFloat(typeof newValue === 'string' ? newValue.replace(',', '.') : newValue);

            if (parseInt(newValue, 10) === floatValue) {
                return newValue;
            }

            return parseFloat(floatValue.toFixed(DECIMAL_COUNT));
        };

        function checkIfNumberIsValid (isInteger, e) {
            if (isInteger) {
                if (factory.isInvalidIntegerChar(e.which)) {
                    return e.preventDefault();
                }
            } else if (factory.isDoubleInvalidChar(e.which)) {
                return e.preventDefault();
            }

            return true;
        }

        factory.checkIfNumberIsValid = function (isInteger, e) {
            if (e.ctrlKey && e.key === 'v') {
                return;
            }

            checkIfNumberIsValid(isInteger, e);
        };

        factory.checkIfPastedNumberIsValid = function (e) {
            var value = parseInt(e.originalEvent.clipboardData.getData('text/plain'), 10);

            if (_.isNaN(value)) {
                return e.preventDefault();
            }

            return true;
        };

        factory.validateNumber = function (value, DEFAULT_MIN, DEFAULT_MAX) {
            return factory.minNumberValidator(value, DEFAULT_MIN) &&
                factory.maxNumberValidator(value, DEFAULT_MAX);
        };

        factory.isNumber = function (number) {
            return !_.isNaN(parseInt(number, 10));
        };

        factory.getIfValid = function (allegedlyNumber, defaultValue) {
            var numberParsed = parseInt(allegedlyNumber, 10);

            if (!_.isNaN(numberParsed)) {
                return numberParsed;
            }

            return defaultValue;
        };

        return factory;
    }

    dependencies.push(NumberUtil);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function RegexUtilWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'RegexUtil',
        dependencies = [];

    function RegexUtil () {
        var factory = {};

        factory.build = function (pattern) {
            return pattern.replace(/(\[)(.*?)(\])/g, '\\$1$2\\$3');
        };

        return factory;
    }

    dependencies.push(RegexUtil);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function StateUtilWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'StateUtil',
        dependencies = ['$state', '$location'];

    function StateUtil ($state, $location) {
        var factory = {},
            STATES  = module.constants.STATES;

        factory.getAbsUrl = function (stateName, params) {
            return $state.href(stateName, params, {
                absolute : true
            });
        };

        factory.isCurrentStatePrivate = function () {
            return $state.current.data.isPrivate;
        };

        factory.go = function (stateName) {
            $state.go([STATES.APPLICATION.PUBLIC, stateName].join('.'));
        };

        factory.goFullName = function (stateName) {
            $state.go(stateName);
        };

        factory.isNotValidForLoggedIn = function (toStateName) {
            var STATES_NOT_ALLOWED_AS_LOGGED_IN = [
                [STATES.APPLICATION.PUBLIC, STATES.LOGIN].join('.'),
                [STATES.APPLICATION.PUBLIC, STATES.REGISTER].join('.'),
                [STATES.APPLICATION.PUBLIC, STATES.FORGOT_PASSWORD].join('.')
            ];

            return _.indexOf(STATES_NOT_ALLOWED_AS_LOGGED_IN, toStateName) > -1;
        };

        factory.retrieveQueryParam = function (paramName) {
            return $location.search()[paramName];
        };

        factory.hasQueryParam = function (paramName) {
            return !_.isUndefined($location.search()[paramName]);
        };

        return factory;
    }

    dependencies.push(StateUtil);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function StringUtilWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'StringUtil',
        dependencies = [];

    function StringUtil () {
        var factory = {};

        function isPrimitive (r) {
            return typeof r === 'string' || typeof r === 'number' || typeof r === 'boolean';
        }

        factory.supplant = function (template, values) {
            var pattern = /\{([^{}]*)\}/g;

            return template.replace(pattern, function (a, b) {
                var r = values[b];

                if (isPrimitive(r)) {
                    return r;
                } else if (typeof r === 'object') {
                    return JSON.stringify(r, null, 4);
                }

                return a;
            });
        };

        factory.isShorterThan = function (string, charNumber) {
            return string.length < charNumber;
        };

        return factory;
    }

    dependencies.push(StringUtil);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function TimeUtilWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'TimeUtil',
        dependencies = [];

    function TimeUtil () {
        var factory              = {},
            DEFAULT_TIME_PATTERN = 'YYYY/MM/DD HH:mm:ss';

        factory.getNowFormatted = function () {
            return moment().format(DEFAULT_TIME_PATTERN);
        };

        factory.isDateValid = function (date) {
            return moment(date, 'DD/MM/YYYY').isValid();
        };

        factory.getInterval = function (time) {
            var days,
                hours,
                minutes,

                // seconds,

                t = time;

            days    = Math.floor(t / 86400);
            t      -= days * 86400;
            hours   = Math.floor(t / 3600) % 24;
            t      -= hours * 3600;
            minutes = Math.floor(t / 60) % 60;

            // t      -= minutes * 60;
            // seconds = t % 60;

            return [
                days + ' days,',
                hours + ' hours,',
                minutes + ' minutes'

                // seconds + ' seconds'
            ].join(' ');
        };

        return factory;
    }

    dependencies.push(TimeUtil);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function AuthConstantWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        constantName = 'AUTH_CONST',
        AUTH_CONST = {};

    AUTH_CONST.COOKIE = {
        TOKEN     : 'AUTH_TOKEN',
        USER_DATA : 'USER_DATA'
    };

    _.assign(module.constants, {
        AUTH : AUTH_CONST
    });

    module.constant(constantName, AUTH_CONST);
}(angular, MODULES));
;(function StatesManagerWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        dependencies = ['$stateProvider'];

    function StatesManager ($stateProvider) {
        var states = {},

            SN         = module.constants.STATES,
            VIEWS_PATH = module.constants.PATH.VIEWS,

            UI_VIEW_PUBLIC     = module.constants.UI_VIEWS.PUBLIC,
            MY_ACCOUNT_UI_VIEW = '@' + [SN.APPLICATION.PUBLIC, SN.MY_ACCOUNT.ROOT].join('.'),

            myAccountTabs = [{
                url  : 'orders',
                name : SN.MY_ACCOUNT.ORDERS
            }, {
                url  : 'settings',
                name : SN.MY_ACCOUNT.SETTINGS
            }];

        states.myAccount = {
            url   : '/my-account',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.MY_ACCOUNT.ROOT].join('.'),
                isDisabled  : false,
                isPrivate   : true,
                pageTitle   : 'My Account',
                description : '',
                keywords    : '',
                image       : 'https://electriccastle.ro/assets/img/meta/4.jpg',
                hasQueue    : false
            }
        };

        states.myAccount.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'auth/my-account.tpl.html',
            controller  : 'MyAccountController as mac'
        };

        states.invitations = {
            url   : '/invitations',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.MY_ACCOUNT.ROOT, SN.INVITATIONS].join('.'),
                isDisabled  : false,
                isPrivate   : true,
                pageTitle   : 'Invitations',
                description : '',
                keywords    : '',
                image       : 'https://electriccastle.ro/assets/img/meta/4.jpg',
                hasQueue    : false
            }
        };

        states.invitations.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'auth/invitations.tpl.html',
            controller  : 'InvitationsController as ic'
        };

        _.forEach(myAccountTabs, function (myAccountTab) {
            var stateName = 'myAccount' + _.capitalize(myAccountTab.name);

            states[stateName] = {
                url   : '/' + myAccountTab.url,
                views : {},
                data  : {
                    name        : [SN.APPLICATION.PUBLIC, SN.MY_ACCOUNT.ROOT, myAccountTab.name].join('.'),
                    isDisabled  : false,
                    isPrivate   : true,
                    pageTitle   : myAccountTab.name,
                    description : myAccountTab.name,
                    keywords    : '',
                    hasQueue    : false
                }
            };

            states[stateName].views[MY_ACCOUNT_UI_VIEW] = {
                templateUrl : VIEWS_PATH + 'auth/' + myAccountTab.url + '.tpl.html',
                controller  : myAccountTab.name + 'Controller as ' + myAccountTab.name.charAt(0).toLowerCase() + 'c'
            };
        });

        _.forEach(states, function (state) {
            if (!state.data.isDisabled) {
                $stateProvider.state(state.data.name, state);
            }
        });
    }

    dependencies.push(StatesManager);

    module.config(dependencies);
}(angular, MODULES));
;(function ChangePasswordControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'ChangePasswordController',
        dependencies   = ['AuthService'];

    function ChangePasswordController (AuthService) {
        var self = this;

        self.message = '';

        self.model = {
            oldPassword          : '',
            password             : '',
            passwordConfirmation : '',
            errorMessage         : ''
        };

        self.flags = {
            showError : false
        };

        self.changePassword = function ($form) {
            if ($form.$valid) {
                AuthService.changePassword(self.model).then(function (response) {
                    $form.$setPristine();

                    if (!response.success) {
                        self.flags.showError    = true;
                        self.model.errorMessage = response.error;

                        self.model.oldPassword          = '';
                        self.model.password             = '';
                        self.model.passwordConfirmation = '';
                    } else {
                        self.flags.showConfirmation = true;

                        self.model = {
                            oldPassword          : '',
                            password             : '',
                            passwordConfirmation : '',
                            errorMessage         : ''
                        };
                    }
                });
            }
        };
    }

    dependencies.push(ChangePasswordController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function ForgotPasswordControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'ForgotPasswordController',
        dependencies   = ['AuthService'];

    function ForgotPasswordController (AuthService) {
        var self = this;

        self.model = {
            email        : '',
            savedMail    : '',
            errorMessage : ''
        };

        self.flags = {
            showError        : false,
            showConfirmation : false
        };

        self.submit = function ($form) {
            if ($form.$valid) {
                AuthService.forgotPassword(self.model).then(function (response) {
                    $form.$setPristine();

                    if (!response.success) {
                        self.flags.showError    = true;
                        self.model.errorMessage = response.error;

                        self.model.oldPassword          = '';
                        self.model.password             = '';
                        self.model.passwordConfirmation = '';
                    } else {
                        self.flags.showConfirmation = true;
                        self.model.savedMail        = _.cloneDeep(self.model.email);

                        self.model.email = '';
                    }
                });
            }
        };
    }

    dependencies.push(ForgotPasswordController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function InvitationsControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'InvitationsController',
        dependencies   = ['InvitationsService'];

    function InvitationsController (InvitationsService) {
        var self = this;

        InvitationsService.fetchInvitations();

        self.getUsed                         = InvitationsService.getUsed;
        self.getAvailable                    = InvitationsService.getAvailable;
        self.getError                        = InvitationsService.getError;
        self.addNewInvitation                = InvitationsService.addNewInvitation;
        self.makeInvisible                   = InvitationsService.makeInvisible;
        self.getNumberOfAvailableInvitations = InvitationsService.getNumberOfAvailableInvitations;
        self.editClickHandler                = InvitationsService.editClickHandler;

        self.flags = {
            displayNoAvailableInvitations : InvitationsService.displayNoAvailableInvitations,
            displayNoUsedInvitations      : InvitationsService.displayNoUsedInvitations,
            numberOfVisibleInvitations    : 1,
            shouldShowAddMore             : InvitationsService.shouldDisplayAddNewInvitation,
            shouldShowRemoveButton        : InvitationsService.shouldDisplayRemoveButton,
            showErrors                    : InvitationsService.hasErrors
        };

        self.sendInvitations = function ($form) {
            if ($form.$valid) {
                InvitationsService.sendInvitations().then(function (data) {
                    if (data.success) {
                        $form.$setPristine();
                    }
                });
            }
        };

        self.sendInvitationEmail = function (url, $index) {
            InvitationsService.sendInvitationEmail(url).then(function (data) {
                if (data.success) {
                    InvitationsService.sentSuccess($index);
                }
            });
        };
    }

    dependencies.push(InvitationsController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function LoginControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'LoginController',
        dependencies   = [];

    function LoginController () {
        var self = this;

        self.register = function () {
            /** * /
            var authorizationToken = 'U_Mpqe262vtN5Q==',
                dataQuote          = '{"action_type" : "update",  "authorization_token" : "' + authorizationToken + '",  "products" :{"1" : "1"}}';


            jQuery.ajax({
                type        : 'POST',
                contentType : "application/json",
                url         : 'http://api2.electriccastle.ro/api/rest/quotes',
                dataType    : 'json',
                data        : dataQuote,
                success     : function(res) {},
                error       : function(res) {}
            });
            /** */
        };
    }

    dependencies.push(LoginController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function MyAccountControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'MyAccountController',
        dependencies   = ['MyAccountService'];

    function MyAccountController (MyAccountService) {
        var self = this;

        MyAccountService.buildTabData().then(function (tabs) {
            self.tabData = tabs;
        });
    }

    dependencies.push(MyAccountController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function OrdersControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'OrdersController',
        dependencies   = ['$injector', '$window'];

    function OrdersController ($injector, $window) {
        var self = this,

            OrdersService  = $injector.get('OrdersService'),
            BootBoxService = $injector.get('BootBoxService'),
            PubSub         = $injector.get('PublisherSubscriber'),

            EVENTS = module.constants.APP_EVENTS;

        OrdersService.fetch();
        OrdersService.fetchVouchers();

        self.get                          = OrdersService.get;
        self.getVouchers                  = OrdersService.getVouchers;
        self.shouldDisplayNoOrdersMessage = OrdersService.shouldDisplayNoOrdersMessage;
        self.shouldDisplayVouchers        = OrdersService.shouldDisplayVouchers;

        self.cancelOrder = function (url) {
            var callbacks = {
                confirm : function () {
                    $window.location.href = url;
                }
            };

            BootBoxService.cancelOrder(callbacks);
        };

        self.updateCard = function (url) {
            var callbacks = {
                confirm : function () {
                    $window.location.href = url;
                }
            };

            BootBoxService.updateCard(callbacks);
        };

        self.payFull = function (url) {
            var callbacks = {
                confirm : function () {
                    $window.location.href = url;
                }
            };

            BootBoxService.payFull(callbacks);
        };

        self.addExternalTicket = function () {
            PubSub.publish(EVENTS.MODAL.OPEN, {
                type : EVENTS.MODAL.TYPES.ADD_EXTERNAL_TICKET
            });
        };
    }

    dependencies.push(OrdersController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function RedeemCardControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'RedeemCardController',
        dependencies   = ['$scope', 'AuthService', 'PublisherSubscriber', 'NumberUtil'];

    function RedeemCardController ($scope, AuthService, PubSub, NumberUtil) {
        var self             = this,
            onGiftCardUpdate = null,
            EVENTS           = module.constants.APP_EVENTS;

        self.giftCardBalance = 0;

        function getGiftCardBalance () {
            AuthService.getUserData().then(function (response) {
                if (response.success) {
                    self.giftCardBalance = NumberUtil.getIfValid(response.data.giftBalance, 0);
                }
            });
        }

        // getGiftCardBalance();

        onGiftCardUpdate = PubSub.subscribe(EVENTS.GIFT_CARD.UPDATE, function () {
            getGiftCardBalance();
        });

        $scope.$on('$destroy', function () {
            onGiftCardUpdate.remove();
        });
    }

    dependencies.push(RedeemCardController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function RegisterControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'RegisterController',
        dependencies   = ['$log', '$timeout', '$injector'];

    function RegisterController ($log, $timeout, $injector) {
        var self    = this,
            $logger = $log.getInstance(controllerName),

            COUNTRY_NATIONALITY = $injector.get('COUNTRY_NATIONALITY'),

            AuthService = $injector.get('AuthService'),
            StateUtil   = $injector.get('StateUtil'),
            PubSub      = $injector.get('PublisherSubscriber'),

            TIME    = module.constants.TIME,
            SN      = module.constants.STATES,
            EVENTS  = module.constants.APP_EVENTS;

        self.model = {
            firstName            : '',
            lastName             : '',
            email                : '',
            phone                : '',
            nationality          : COUNTRY_NATIONALITY.NATIONALITY[0].name,
            city                 : '',
            street               : '',
            number               : '',
            block                : '',
            floorNumber          : '',
            apartment            : '',
            zipCode              : '',
            password             : '',
            passwordConfirmation : '',
            birthDate            : '',
            gender               : 'male',
            errorMessage         : '',
            country              : '',
            subscribeNewsletter  : false,

            countryList : COUNTRY_NATIONALITY.COUNTRY,
            cityList    : COUNTRY_NATIONALITY.CITY
        };

        self.flags = {
            showRegisterError  : false,
            showConfirmation   : false,
            datePickerOpened   : false,
            showCityTextBox    : false,
            countryHasCityList : false
        };

        self.openDatePicker = function () {
            self.flags.datePickerOpened = true;
        };

        function loginSuccess (response, $form) {
            $form.$setPristine();

            if (response.success) {
                StateUtil.go([SN.MY_ACCOUNT.ROOT, SN.MY_ACCOUNT.SETTINGS].join('.'));
            }

            PubSub.publish(EVENTS.LOGIN.SUCCESS);
        }

        function clearErrors () {
            self.flags.showRegisterError = false;
            self.model.errorMessage      = '';
        }

        function registerSuccess (response, $form) {
            if (response.success) {
                clearErrors();

                AuthService.login(response.data).then(function (res) {
                    loginSuccess(res, $form);
                });
            } else {
                $form.$setPristine();

                self.flags.showRegisterError = true;
                self.model.errorMessage      = response.error;

                $timeout(clearErrors, TIME.ERROR_TIMEOUT);
            }
        }

        self.register = function ($form) {
            if ($form.$valid) {
                $logger.debug('Form is valid');

                AuthService.register(self.model).then(function (response) {
                    registerSuccess(response, $form);
                }, function () {
                    $form.$setPristine();
                });
            } else {
                $logger.debug('Form is invalid');
            }
        };

        self.countryChanged = function () {
            if (self.model.country === COUNTRY_NATIONALITY.COUNTRY[0].name) {
                self.flags.showCityTextBox    = false;
                self.flags.countryHasCityList = true;

                if (!_.find(self.model.cityList, ['name', self.model.city])) {
                    self.model.cityList.unshift({name : self.model.city});
                }
            } else {
                self.flags.showCityTextBox    = true;
                self.flags.countryHasCityList = false;
            }
        };
    }

    dependencies.push(RegisterController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function SettingsControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'SettingsController',
        dependencies   = ['$injector', '$timeout', '$scope', 'COUNTRY_NATIONALITY'];

    function SettingsController ($injector, $timeout, $scope, COUNTRY_NATIONALITY) {
        var self          = this,
            ALERT_TIMEOUT = 5000,
            timeoutPromise,

            AuthService          = $injector.get('AuthService'),
            HeaderAccountService = $injector.get('HeaderAccountService'),
            TimeUtil             = $injector.get('TimeUtil');

        self.model = {
            firstName       : '',
            lastName        : '',
            email           : '',
            phone           : '',
            nationality     : '',
            city            : '',
            street          : '',
            number          : '',
            block           : '',
            floorNumber     : '',
            apartment       : '',
            zipCode         : '',
            birthDate       : '',
            gender          : 'female',
            errorMessage    : '',
            country         : '',
            countryList     : COUNTRY_NATIONALITY.COUNTRY,
            nationalityList : COUNTRY_NATIONALITY.NATIONALITY,
            cityList        : COUNTRY_NATIONALITY.CITY,
            genderList      : [{
                name  : 'Female',
                value : 'female'
            }, {
                name  : 'Male',
                value : 'male'
            }]
        };

        self.flags = {
            showError          : false,
            showConfirmation   : false,
            datePickerOpened   : false,
            showCityTextBox    : false,
            countryHasCityList : false,

            showConfirmAccountMessage : false
        };

        self.openDatePicker = function () {
            self.flags.datePickerOpened = true;
        };

        AuthService.getUserData().then(function (response) {
            if (response.success) {
                self.model.firstName   = response.data.firstname;
                self.model.lastName    = response.data.lastname;
                self.model.email       = response.data.email;
                self.model.phone       = response.data.phone;
                self.model.country     = response.data.country;
                self.model.nationality = response.data.nationality;
                self.model.city        = response.data.city;
                self.model.street      = response.data.street;
                self.model.number      = response.data.number;
                self.model.block       = response.data.block;
                self.model.floorNumber = response.data.floor;
                self.model.apartment   = response.data.apartment;
                self.model.zipCode     = response.data.zip;
                self.model.birthDate   = moment(response.data.dob, 'MM/DD/YYYY').format('DD/MM/YYYY');
                self.model.gender      = response.data.gender === '1' ? 'male' : 'female';

                self.countryChanged();
            }
        });

        self.update = function ($form) {
            var isBirthDayValid = TimeUtil.isDateValid(self.model.birthDate);

            if ($form.$valid && isBirthDayValid) {
                AuthService.updateUserData(self.model).then(function (response) {
                    $timeout.cancel(timeoutPromise);

                    self.flags.showConfirmation = false;
                    self.flags.showError        = false;

                    $form.$setPristine();

                    if (!response.success) {
                        self.flags.showError        = true;
                        self.model.errorMessage     = response.error;
                        self.flags.showConfirmation = false;

                        timeoutPromise = $timeout(function () {
                            self.flags.showError = false;
                        }, ALERT_TIMEOUT);
                    } else {
                        self.flags.showConfirmation = true;
                        self.flags.showError        = false;

                        HeaderAccountService.setHeaderName(self.model.firstName);

                        timeoutPromise = $timeout(function () {
                            self.flags.showConfirmation = false;
                        }, ALERT_TIMEOUT);
                    }
                });
            }
        };

        self.countryChanged = function () {
            if (self.model.country === COUNTRY_NATIONALITY.COUNTRY[0].name) {
                self.flags.showCityTextBox    = false;
                self.flags.countryHasCityList = true;

                if (!_.find(self.model.cityList, ['name', self.model.city])) {
                    self.model.cityList.unshift({name : self.model.city});
                }
            } else {
                self.flags.showCityTextBox    = true;
                self.flags.countryHasCityList = false;
            }
        };

        $scope.$on('$destroy', function () {
            $timeout.cancel(timeoutPromise);
        });
    }

    dependencies.push(SettingsController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function CompareToWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'compareTo',
        dependencies  = [];

    function CompareTo () {
        return {
            require : 'ngModel',
            scope   : {
                toBeComparedAgainst : '=compareTo'
            },
            link : function (scope, element, attrs, ngModel) {
                ngModel.$validators.compareTo = function (modelValue) {
                    return modelValue === scope.toBeComparedAgainst;
                };

                scope.$watch('toBeComparedAgainst', function () {
                    ngModel.$validate();
                });
            }
        };
    }

    dependencies.push(CompareTo);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function OrderProductWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'orderProduct',
        dependencies  = [];

    function OrderProduct () {
        var VIEWS_PATH = module.constants.PATH.VIEWS;

        return {
            restrict : 'E',
            scope    : {
                product : '=orderItem'
            },
            templateUrl : VIEWS_PATH + 'auth/order-product.tpl.html',
            controller  : 'OrderProductController as opc'
        };
    }

    dependencies.push(OrderProduct);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function OrderProductsControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'OrderProductController',
        dependencies   = ['$injector'];

    function OrderProductController ($injector) {
        var self   = this,
            STATES = module.constants.STATES,
            EVENTS = module.constants.APP_EVENTS,

            BasketService        = $injector.get('BasketService'),
            StateUtil            = $injector.get('StateUtil'),
            BootBoxService       = $injector.get('BootBoxService'),
            PubSub               = $injector.get('PublisherSubscriber'),
            HeaderAccountService = $injector.get('HeaderAccountService');

        self.upgradeTicket = function (upgrade, ticketId) {
            BasketService.addToBasketProductUpgrade(upgrade, ticketId).then(function (response) {
                var callbacks = {
                    default : ng.noop,
                    success : function () {
                        StateUtil.go(STATES.BASKET);
                    }
                };

                BootBoxService.addToBasket(upgrade, callbacks, response.success, response.error);

                HeaderAccountService.setHeaderCartQty(BasketService.getNumberOfProducts());
            });
        };

        self.editNameOnTicket = function (ticketId) {
            PubSub.publish(EVENTS.MODAL.OPEN, {
                type  : EVENTS.MODAL.TYPES.TICKET_NAME,
                model : ticketId
            });
        };
    }

    dependencies.push(OrderProductController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function AuthServiceWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'AuthService',
        dependencies = ['$log', '$rootScope', '$injector', '$location'];

    function AuthService ($log, $rootScope, $injector, $location) {
        var factory = {},
            $logger = $log.getInstance(factoryName),

            RestAngular = $injector.get('Restangular'),
            Cookie      = $injector.get('Cookie'),
            DataShare   = $injector.get('DataShare'),
            StateUtil   = $injector.get('StateUtil'),
            $http       = $injector.get('$http'),
            $q          = $injector.get('$q'),
            API         = $injector.get('API'),

            STATES     = module.constants.STATES,
            AUTH_CONST = module.constants.AUTH,

            locationParams = '';

        function retrieveExpirationDateForAuthToken (rememberMe) {
            return rememberMe ? 31 : 1;
        }

        function storeAuthToken (data, rememberMe) {
            var options = {
                expires : retrieveExpirationDateForAuthToken(rememberMe)
            };

            Cookie.set(AUTH_CONST.COOKIE.TOKEN, data.authorizationToken, options);
        }

        function stateChangeCallback (event, toState) {
            $rootScope.metadata = {
                title       : toState.data.pageTitle,
                description : toState.data.description,
                keywords    : toState.data.keywords,
                image       : toState.data.image
            };

            $rootScope.hasQueue = toState.data.hasQueue;

            if (toState.data.isPrivate && !DataShare.isLoggedIn()) {
                event.preventDefault();
                StateUtil.go(STATES.LOGIN);
            }

            $location.search(locationParams);
        }

        function stateChangeStartCallback (event, toState) {
            var isLoggedIn  = DataShare.isLoggedIn(),
                toStateName = toState.data.name;

            if (isLoggedIn && StateUtil.isNotValidForLoggedIn(toStateName)) {
                event.preventDefault();

                StateUtil.go([STATES.MY_ACCOUNT.ROOT, STATES.MY_ACCOUNT.ORDERS].join('.'));
            }

            locationParams = !StateUtil.hasQueryParam('day') && !StateUtil.hasQueryParam('source') ? $location.search() : '';
        }

        factory.login = function (userData) {
            var userBase  = RestAngular.all('customers[hasLoader][requestAccess]'),
                deferred  = $q.defer(),
                loginData = {
                    actionType   : 'login',
                    email        : userData.email,
                    passwordHash : userData.password
                };

            userBase.post(loginData).then(function success (data) {
                var isSuccess = !!data.success,
                    isFirstLogin;

                if (isSuccess) {
                    isFirstLogin = parseInt(data.data.firstLogin, 10) === 1;

                    storeAuthToken(data.data, userData.rememberMe);

                    DataShare.isLoggedIn(true);
                    DataShare.isFirstLogin(isFirstLogin);
                }

                $logger.debug(data);

                deferred.resolve({
                    success : isSuccess,
                    error   : isSuccess ? null : data.errorMessage
                });
            });

            return deferred.promise;
        };

        factory.hasAccess = function () {
            var deferred   = $q.defer(),
                url        = API.HAS_ACCESS,
                isLoggedIn = DataShare.isLoggedIn();

            if (isLoggedIn) {
                deferred.resolve({
                    success : true
                });
            } else {
                $http.get(url).then(function (response) {
                    var isSuccess = response.data.hasAccess === 1;

                    deferred.resolve({
                        success : isSuccess
                    });
                });
            }

            return deferred.promise;
        };

        factory.logout = function () {
            Cookie.remove(AUTH_CONST.COOKIE.TOKEN);
            Cookie.remove(AUTH_CONST.COOKIE.USER_DATA);
            DataShare.isLoggedIn(false);
        };

        factory.register = function (userData) {
            var userBase  = RestAngular.all('customers[hasLoader]'),
                registerData = {
                    firstname    : userData.firstName,
                    lastname     : userData.lastName,
                    email        : userData.email,
                    passwordHash : userData.password,
                    websiteId    : '1',
                    groupId      : '1',
                    phone        : userData.phone,
                    city         : userData.city,
                    street       : userData.street,
                    number       : userData.number,
                    block        : userData.block,
                    floor        : userData.floorNumber,
                    apartment    : userData.apartment,
                    zip          : userData.zipCode,
                    nationality  : userData.nationality,
                    dob          : moment(userData.birthDate, 'DD/MM/YYYY').format('MM/DD/YYYY'),
                    country      : userData.country,
                    newsletter   : userData.subscribeNewsletter,
                    gender       : userData.gender === 'female' ? 2 : 1
                };

            return userBase.post(registerData).then(function success (response) {
                var isSuccess = !!response.success;

                $logger.debug(response);

                return {
                    success : isSuccess,
                    data    : isSuccess ? {
                        email    : response.data.email,
                        password : response.data.password
                    } : null,
                    error : isSuccess ? null : response.errorMessage
                };
            });
        };

        factory.getUserData = function () {
            var authToken = Cookie.get(AUTH_CONST.COOKIE.TOKEN),
                userBase  = RestAngular.all('customers'),
                deferred  = $q.defer(),
                userData  = Cookie.get(AUTH_CONST.COOKIE.USER_DATA);

            userBase.one(authToken).get().then(function (response) {
                var isSuccess = !!response.success;

                if (isSuccess) {
                    if (!userData) {
                        Cookie.set(AUTH_CONST.COOKIE.USER_DATA, response.data);
                    }
                }

                deferred.resolve({
                    success : isSuccess,
                    data    : isSuccess ? response.data : null
                });
            });


            return deferred.promise;
        };

        factory.getHeaderUserData = function () {
            var authToken = Cookie.get(AUTH_CONST.COOKIE.TOKEN),
                userBase  = RestAngular.all('menu'),
                deferred  = $q.defer();

            userBase.one(authToken).get().then(function (response) {
                var isSuccess = !!response.success;

                deferred.resolve({
                    success : isSuccess,
                    data    : isSuccess ? response.data : null
                });
            });


            return deferred.promise;
        };

        factory.updateUserData = function (user) {
            var data = {
                    firstname   : user.firstName,
                    lastname    : user.lastName,
                    dob         : moment(user.birthDate, 'DD/MM/YYYY').format('MM/DD/YYYY'),
                    email       : user.email,
                    phone       : user.phone,
                    city        : user.city,
                    street      : user.street,
                    number      : user.number,
                    block       : user.block,
                    floor       : user.floorNumber,
                    apartment   : user.apartment,
                    zip         : user.zipCode,
                    country     : user.country,
                    nationality : user.nationality,
                    gender      : user.gender === 'female' ? 2 : 1
                },
                deferred = $q.defer(),
                url      = API.ENDPOINT + '/customers/[hasLoader]' + DataShare.getAuthToken();

            $http.put(url, data).then(function (response) {
                var isSuccess = !!response.data.success;

                deferred.resolve({
                    success : isSuccess,
                    /*eslint-disable */
                    error   : isSuccess ? null : response.data.error_message
                    /*eslint-enable */
                });
            });

            return deferred.promise;
        };

        factory.changePassword = function (model) {
            var data = {
                    /*eslint-disable */
                    password_hash : model.password
                    /*eslint-enable */
                },
                deferred = $q.defer(),
                url      = API.ENDPOINT + '/customers/' + DataShare.getAuthToken();

            $http.put(url, data).then(function (response) {
                var isSuccess = !!response.data.success;

                deferred.resolve({
                    success : isSuccess,
                    /*eslint-disable */
                    error   : isSuccess ? null : response.data.error_message
                    /*eslint-enable */
                });
            });

            return deferred.promise;
        };

        factory.forgotPassword = function (model) {
            var userBase = RestAngular.all('customers'),
                data     = {
                    actionType : 'forgot_password',
                    email      : model.email
                };

            return userBase.post(data).then(function (response) {
                var isSuccess = !!response.success;

                return {
                    success : isSuccess,
                    data    : isSuccess ? response.data : null,
                    error   : isSuccess ? null : response.errorMessage
                };
            });
        };

        factory.subscribeToNewsletter = function (model) {
            var newsletter = RestAngular.all('newsletters'),
                data = {
                    email : model.email
                };

            return newsletter.post(data).then(function (response) {
                var isSuccess = !!response.success;

                return {
                    success : isSuccess,
                    data    : isSuccess ? response.data : null,
                    error   : isSuccess ? null : response.errorMessge
                };
            });
        };

        factory.determineUserStatus = function () {
            if (Cookie.get(AUTH_CONST.COOKIE.TOKEN)) {
                DataShare.isLoggedIn(true);
            } else {
                DataShare.isLoggedIn(false);
            }
        };

        factory.subscribeToRouterEvents = function () {
            $rootScope.$on('$stateChangeStart', stateChangeStartCallback);
            $rootScope.$on('$stateChangeSuccess', stateChangeCallback);
        };

        return factory;
    }

    dependencies.push(AuthService);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'InvitationsService',
        dependencies = ['$q', '$timeout', 'Invitation'];

    function InvitationsService ($q, $timeout, Invitation) {
        var factory = {},

            invitations = {
                used      : [],
                available : []
            },

            callInPlace = true,
            apiErrors   = {
                has         : false,
                description : null
            },

            TIME = module.constants.TIME;

        function clearErrors () {
            apiErrors.has         = false;
            apiErrors.description = null;
        }

        /**
         * Function used to format the invitations. Because the API returns
         * an object of the following structure
         *
         * {
         *     'invitations' : {
         *         'available_0' : {
         *             name  : '',
         *             email : ''
         *         },
         *         ...
         *     }
         * },
         *
         * we need to convert it to an array. For that reason and also
         * because the keys of the invitations property values need
         * to be passed along on update, the key is also saved on the
         * new sucture that will look something like the following:
         *
         * [{
         *     name      : '',
         *     email     : '',
         *     isVisible : index === 0 ? true : false,
         *     key       : 'available_0' or something similar
         * }, {} ...]
         *
         * The isVisible flags controls how many of the total available
         * invitations are visible on the screen.
         *
         * @param rawInvitations - the invitations as received from
         *                         the API
         * @return {void}
         */
        function formatInvitations (rawInvitations) {
            invitations.used = _.filter(rawInvitations, function (invitation, key) {
                invitation.key       = key;
                invitation.editMode  = false;
                invitation.wasSent   = false;
                invitation.canBeSent = !!invitation.send;

                return invitation.email !== '' && invitation.name !== '';
            });

            invitations.available = _.chain(rawInvitations).filter(function (invitation, key) {
                invitation.key = key;

                return invitation.email === '' && invitation.name === '';
            }).map(function (invitation, index) {
                invitation.isVisible = index === 0;

                return invitation;
            }).value();
        }

        /**
         * Function that calls the invitations endpoint and then delegates
         * the formatting of the response.
         */
        factory.fetchInvitations = function () {
            callInPlace = true;

            Invitation.getAll().then(function (response) {
                var isSuccess = !!response.success && response.errorMessage === '';

                callInPlace = false;

                if (isSuccess) {
                    formatInvitations(response.data.invitations);
                }
            });
        };

        /**
         * Used to update the invitations, in other words to send invitations
         * to other users.
         */
        factory.sendInvitations = function () {
            var allInvitations = invitations.used.concat(invitations.available),
                data           = _.reduce(allInvitations, function (result, invitation) {
                    result[invitation.key] = {
                        name  : invitation.name,
                        email : invitation.email
                    };

                    return result;
                }, {}),
                deferred  = $q.defer();


            Invitation.update({
                invitations : data
            }).then(function (response) {
                var isSuccess = !!response.success && response.errorMessage === '';

                if (isSuccess) {
                    clearErrors();

                    formatInvitations(response.data.invitations);
                } else {
                    apiErrors.has         = true;
                    apiErrors.description = response.errorMessage;

                    $timeout(clearErrors, TIME.ERROR_TIMEOUT);
                }

                deferred.resolve({
                    success : isSuccess,
                    error   : isSuccess ? null : data.errorMessage
                });
            });

            return deferred.promise;
        };

        /**
         * Function used to display the next invitation. Because at first
         * only the first available invitation is visible to the user,
         * this function sets the isVisible flag to true for the next
         * invitation in the array.
         */
        factory.addNewInvitation = function () {
            _.forEach(invitations.available, function (invitation) {
                if (!invitation.isVisible) {
                    invitation.isVisible = true;

                    return false;
                }

                return true;
            });
        };

        /**
         * If there are invitations that are not visible on the screen,
         * the user will be presented with an 'Add new invitation' button.
         * This is the function that computes whether or not tht is the
         * case.
         *
         * @returns {boolean}
         */
        factory.shouldDisplayAddNewInvitation = function () {
            var visibleFlags = _.map(invitations.available, function (invitation) {
                return invitation.isVisible;
            });

            return !_.every(visibleFlags);
        };

        /**
         * Function used to hide an invitation from the screen. Is called
         * whenever the user clicks the remove button on the interface.
         *
         * @param $index - the index of the invitation
         */
        factory.makeInvisible = function ($index) {
            invitations.available = _.map(invitations.available, function (invitation, index) {
                if (index === $index) {
                    invitation.isVisible = false;
                }

                return invitation;
            });
        };

        factory.editClickHandler = function ($index, shouldSaveIfAlreadyInEditMode) {
            invitations.used = _.map(invitations.used, function (invitation, index) {
                if (index === $index) {
                    if (invitation.editMode && shouldSaveIfAlreadyInEditMode) {
                        factory.sendInvitations();
                    } else {
                        invitation.editMode = true;
                    }
                }

                return invitation;
            });
        };

        factory.sentSuccess = function ($index) {
            invitations.used = _.map(invitations.used, function (invitation, index) {
                if (index === $index) {
                    invitation.wasSent = true;
                }

                return invitation;
            });
        };

        /**
         * Remove button is displayed only if there are more than one
         * invitations displayed on the screen to the user.
         *
         * @returns {boolean}
         */
        factory.shouldDisplayRemoveButton = function () {
            var visibleFlags = _.reduce(invitations.available, function (result, invitation) {
                if (invitation.isVisible) {
                    result.push(true);
                }

                return result;
            }, []);

            return visibleFlags.length > 1;
        };

        factory.sendInvitationEmail = function (url) {
            var deferred  = $q.defer();

            Invitation.sendInvitationEmail(url).then(function (response) {
                var isSuccess = response.status === 200;

                deferred.resolve({
                    success : isSuccess,
                    error   : isSuccess ? null : response.status
                });
            });

            return deferred.promise;
        };

        factory.getNumberOfAvailableInvitations = function () {
            return invitations.available.length;
        };

        factory.get = function () {
            return invitations;
        };

        factory.getUsed = function () {
            return invitations.used;
        };

        factory.getAvailable = function () {
            return invitations.available;
        };

        factory.displayNoUsedInvitations = function () {
            return invitations.used.length === 0 && !callInPlace;
        };

        factory.displayNoAvailableInvitations = function () {
            return invitations.available.length === 0 && !callInPlace;
        };

        factory.hasErrors = function () {
            return apiErrors.has;
        };

        factory.getError = function () {
            return apiErrors.description;
        };

        return factory;
    }

    dependencies.push(InvitationsService);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function MyAccountServiceWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'MyAccountService',
        dependencies = ['$q', '$http', 'TabService', 'DataShare', 'API', 'Restangular'];

    function MyAccountService ($q, $http, TabService, DataShare, API, RestAngular) {
        var factory  = {},
            API_PATH = module.constants.API_PATH;

        factory.buildTabData = function () {
            return TabService.build('MY_ACCOUNT');
        };

        factory.redeemGiftCard = function (code) {
            var data = {
                    /*eslint-disable */
                    coupon_code : code
                    /*eslint-enable */
                },
                deferred = $q.defer(),
                url      = API.ENDPOINT + '/giftcard/' + DataShare.getAuthToken();

            $http.put(url, data).then(function (response) {
                var isSuccess = !!response.data.success;

                deferred.resolve({
                    success : isSuccess,
                    /*eslint-disable */
                    error   : isSuccess ? null : response.data.error_message
                    /*eslint-enable */
                });
            });

            return deferred.promise;
        };

        factory.redeemCoupon = function (code) {
            var data = {
                    couponCode         : code,
                    actionType         : 'update',
                    authorizationToken : DataShare.getAuthToken()
                },
                deferred = $q.defer(),
                url = [
                    API_PATH.BASKET
                ].join(''),

                urlBase = RestAngular.all(url);

            urlBase.post(data).then(function (response) {
                deferred.resolve(response);
            });

            return deferred.promise;
        };

        return factory;
    }

    dependencies.push(MyAccountService);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function OrdersServiceWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'OrdersService',
        dependencies = ['$injector', '$q', '$log', '$http'];

    function OrdersService ($injector, $q, $log, $http) {
        var factory = {},

            $logger = $log.getInstance(factoryName),

            DataShare  = $injector.get('DataShare'),
            Order      = $injector.get('Order'),
            Ticket     = $injector.get('Ticket'),
            StringUtil = $injector.get('StringUtil'),
            API        = $injector.get('API'),

            DATE_FORMAT   = module.constants.DATE_FORMAT,
            API_PATH      = module.constants.API_PATH,

            orders           = {},
            vouchers         = [],
            vouchersFetching = true,
            ordersFetching   = true;

        function formatOrders (rawOrders) {
            return _.map(rawOrders, function (rawOrder) {
                var order = _.pick(rawOrder, [
                    'orderIncrementId', 'orderStatus', 'productName', 'orderTotal',
                    'orderDate', 'qty', 'productType', 'giftcardCoupon', 'ticketId',
                    'orderItemId', 'wasUpgraded', 'ticketNumber', 'isInstallment', 'installmentFee',
                    'nextPayment', 'totalPaid', 'totalRemaining', 'installmentsRemaining',
                    'installmentStatus', 'orderId', 'customerEmail', 'ticketInfoId', 'ticketName'
                ]);

                if (rawOrder.downloadUrl) {
                    order.downloadUrl  = rawOrder.downloadUrl;
                }

                if (rawOrder.upgradeTo) {
                    order.upgradeTo = _.values(rawOrder.upgradeTo);
                }

                return order;
            });
        }

        function group (rawOrders) {
            var groupedOrders = _.chain(rawOrders).groupBy(function (item) {
                return item.orderIncrementId;
            }).toPairs().map(function (currentItem) {
                return _.fromPairs(_.zip(['id', 'products'], currentItem));
            }).map(function (item) {
                var product = _.findLast(item.products, function (prod) {
                    return prod.productType !== 'installment';
                });

                item.orderTotal     = product.orderTotal;
                item.totalPaid      = product.totalPaid;
                item.totalRemaining = parseFloat(product.orderTotal - product.totalPaid).toFixed(2);
                item.orderDate      = moment(product.orderDate, DATE_FORMAT.SERVER).format(DATE_FORMAT.APP);
                item.date           = moment(product.orderDate, DATE_FORMAT.SERVER);
                item.id             = product.orderIncrementId;
                item.status         = product.orderStatus === 'pending' ? 'payment not processed' : product.orderStatus;

                item.isInstallment         = product.totalPaid >= 0;
                item.nextPayment           = moment(product.nextPayment, DATE_FORMAT.SERVER).format(DATE_FORMAT.APP);
                item.installmentsRemaining = product.installmentsRemaining;
                item.ticketInfoId          = product.ticketInfoId;

                item.updateCardUrl  = API.ENDPOINT + StringUtil.supplant(API_PATH.UPDATE_CARD, {orderId : product.orderId, email : product.customerEmail});
                item.cancelOrderUrl = API.ENDPOINT + StringUtil.supplant(API_PATH.CANCEL_RECURRING, {orderId : product.orderId, email : product.customerEmail});
                item.payFullUrl     = API.ENDPOINT + StringUtil.supplant(API_PATH.PAY_FULL_RECURRING, {orderId : product.orderId, email : product.customerEmail});

                return item;
            }).value();

            groupedOrders = _.map(groupedOrders, function (order) {
                order.products = _.groupBy(order.products, function (product) {
                    return product.productType;
                });

                return order;
            });

            return _.sortBy(groupedOrders, function (order) {
                return -order.date;
            });
        }

        factory.fetch = function () {
            var authToken = DataShare.getAuthToken(),
                deferred  = $q.defer();

            ordersFetching = true;

            Order.retrieveUserOrders(authToken).then(function (response) {
                var isSuccess       = !!response.success,
                    formattedOrders = formatOrders(response.data.products);

                orders         = isSuccess ? group(formattedOrders) : [];
                ordersFetching = false;

                $logger.debug(orders);

                deferred.resolve({
                    success : isSuccess,
                    data    : orders,
                    error   : isSuccess ? null : response.errorMessage
                });
            });

            return deferred.promise;
        };

        factory.fetchVouchers = function () {
            var authToken = DataShare.getAuthToken(),
                deferred  = $q.defer();

            vouchersFetching = true;

            Order.retrieveUserVouchers(authToken).then(function (response) {
                var isSuccess = !!response.success;

                vouchers         = isSuccess ? _.values(response.data) : [];
                vouchersFetching = false;

                deferred.resolve({
                    success : isSuccess,
                    data    : vouchers,
                    error   : isSuccess ? null : response.errorMessage
                });
            });

            return deferred.promise;
        };

        factory.addExternalTicket = function (code) {
            var data = {
                    code : code
                },
                deferred = $q.defer(),

                url = [
                    API.ENDPOINT + API_PATH.EXTERNAL_TICKET,
                    DataShare.getAuthToken()
                ].join('/');

            $http.put(url, data).then(function (response) {
                deferred.resolve(response);
            });

            return deferred.promise;
        };

        factory.getTicketInfo = function (id) {
            var authToken = DataShare.getAuthToken(),
                deferred  = $q.defer();

            Ticket.getInfo(authToken, id).then(function (response) {
                var isSuccess = !!response.success;

                deferred.resolve({
                    success : isSuccess,
                    data    : response.data,
                    error   : isSuccess ? null : response.errorMessage
                });
            });

            return deferred.promise;
        };

        factory.updateTicketInfo = function (id, data) {
            var authToken = DataShare.getAuthToken(),
                deferred  = $q.defer();

            Ticket.updateInfo(authToken, id, data).then(function (response) {
                var isSuccess = !!response.success;

                deferred.resolve({
                    success : isSuccess,
                    data    : response.data,
                    error   : isSuccess ? null : response.errorMessage
                });
            });

            return deferred.promise;
        };

        factory.shouldDisplayNoOrdersMessage = function () {
            return !ordersFetching && _.keys(orders).length === 0;
        };

        factory.shouldDisplayVouchers = function () {
            return !vouchersFetching && vouchers.length !== 0;
        };

        factory.get = function () {
            return orders;
        };

        factory.getVouchers = function () {
            return vouchers;
        };

        return factory;
    }

    dependencies.push(OrdersService);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function HomeControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'HomeController',
        dependencies   = ['$injector', '$sce', '$timeout', 'video'];

    function HomeController ($injector, $sce, $timeout, video) {
        var self = this,

            HeaderAccountService = $injector.get('HeaderAccountService'),
            HomeService          = $injector.get('HomeService'),
            PubSub               = $injector.get('PublisherSubscriber'), //eslint-disable-line
            isMobile             = $.browser.mobile,

            EVENTS = module.constants.APP_EVENTS; //eslint-disable-line

        if (isMobile) {
            video.addSource('mp4', '');
        } else {
            video.addSource('mp4', '/assets/video/ThankYou.mp4');
        }

        function muteUnmute () {
            self.model.isVideoMuted = !self.model.isVideoMuted;
        }

        function playPause () {
            self.model.isVideoPlaying = !self.model.isVideoPlaying;
        }

        HomeService.fetchContentBoxes();

        self.model = {
            isVideoMuted   : true,
            isVideoPlaying : true
        };

        self.cb = {
            muteUnmute : muteUnmute,
            playPause  : playPause,
            isLoggedIn : HeaderAccountService.retrieveUserStatus,
            getBoxes   : HomeService.getContentBoxes
        };

        self.trustSrc = function (src) {
            return $sce.trustAsResourceUrl(src);
        };

        self.trustHtml = function (html) {
            return $sce.trustAsHtml(html);
        };

        /*
        $timeout(function () {
            PubSub.publish(EVENTS.MODAL.OPEN, {
                type : EVENTS.MODAL.TYPES.HOME_INFO
            });
        }, 200);
        */
    }

    dependencies.push(HomeController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function HomeServiceWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'HomeService',
        dependencies = ['ContentBox'];

    function HomeService (ContentBox) {
        var factory      = {},
            contentBoxes = [];

        factory.fetchContentBoxes = function () {
            ContentBox.getAll().then(function (data) {
                contentBoxes = _.sortBy(data, function (contentBox) {
                    return parseInt(contentBox.sortOrder, 10);
                });
            });
        };

        factory.getContentBoxes = function () {
            return contentBoxes;
        };

        return factory;
    }

    dependencies.push(HomeService);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function StatesManagerWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        dependencies = ['$stateProvider'];

    function StatesManager ($stateProvider) {
        var states = {},

            SN         = module.constants.STATES,
            VIEWS_PATH = module.constants.PATH.VIEWS,

            UI_VIEW_PUBLIC = module.constants.UI_VIEWS.PUBLIC,
            INFO_UI_VIEW   = '@' + [SN.APPLICATION.PUBLIC, SN.FAQ.ROOT].join('.'),

            faqTabs = [{
                url  : 'tickets',
                name : SN.FAQ.TICKETS
            }, {
                url  : 'festival-area',
                name : SN.FAQ.FESTIVAL_AREA
            }, {
                url  : 'accommodation-and-transport',
                name : SN.FAQ.ACCOMMODATION_AND_TRANSPORT
            }, {
                url  : 'vendors-volunteers-and-jobs',
                name : SN.FAQ.VENDORS_VOLUNTEERS_AND_JOBS
            }];

        states.faq = {
            url   : '/faq',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.FAQ.ROOT].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Info',
                description : 'ELECTRIC CASTLE is a Romanian music festival that takes place every year on the Transylvanian spectacular domain of Banffy Castle, near Cluj-Napoca.',
                keywords    : 'electric castle, festival info, festival rules, festival faq',
                image       : 'https://electriccastle.ro/assets/img/meta/11.jpg',
                hasQueue    : false
            }
        };

        states.about = {
            url   : '/about',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.ABOUT].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'About',
                description : 'ELECTRIC CASTLE is a Romanian music festival that takes place every year on the Transylvanian spectacular domain of Banffy Castle, near Cluj-Napoca.',
                keywords    : 'electric castle, festival info, festival rules, festival faq',
                image       : 'https://electriccastle.ro/assets/img/meta/12.jpg',
                hasQueue    : false
            }
        };

        states.premium = {
            url   : '/premium-access',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.PREMIUM].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Premium Access',
                description : 'ELECTRIC CASTLE is a Romanian music festival that takes place every year on the Transylvanian spectacular domain of Banffy Castle, near Cluj-Napoca.',
                keywords    : 'electric castle, festival info, festival rules, festival faq',
                image       : 'https://electriccastle.ro/assets/img/meta/15.jpg',
                hasQueue    : false
            }
        };

        states.accommodation = {
            url   : '/accommodation',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.ACCOMMODATION].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Accommodation',
                description : 'ELECTRIC CASTLE is a Romanian music festival that takes place every year on the Transylvanian spectacular domain of Banffy Castle, near Cluj-Napoca.',
                keywords    : 'electric castle, festival info, festival rules, festival faq',
                image       : 'https://electriccastle.ro/assets/img/meta/13.jpg',
                hasQueue    : false
            }
        };

        states.packages = {
            url   : '/travel-packages',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.PACKAGES].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Travel Packages',
                description : 'ELECTRIC CASTLE is a Romanian music festival that takes place every year on the Transylvanian spectacular domain of Banffy Castle, near Cluj-Napoca.',
                keywords    : 'electric castle, travel packages, hotels, tickets, festival rules, festival faq',
                image       : 'https://electriccastle.ro/assets/img/meta/14.jpg',
                hasQueue    : false
            }
        };

        states.travel = {
            url   : '/travel-destination',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.TRAVEL].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Travel Destination',
                description : 'Experience Electric Castle, discover an amazing country',
                keywords    : 'travel, discover, Romania, electric castle, festival Cluj, festival romania, music festival Romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/16.jpg',
                hasQueue    : false
            }
        };

        states.press = {
            url   : '/press',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.PRESS].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Press',
                description : 'ELECTRIC CASTLE is a Romanian music festival that takes place every year on the Transylvanian spectacular domain of Banffy Castle, near Cluj-Napoca.',
                keywords    : 'electric castle, festival info, festival rules, festival faq',
                image       : 'https://electriccastle.ro/assets/img/meta/11.jpg',
                hasQueue    : false
            }
        };

        states.history = {
            url   : '/history',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.HISTORY].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Festival History',
                description : 'ELECTRIC CASTLE is a Romanian music festival that takes place every year on the Transylvanian spectacular domain of Banffy Castle, near Cluj-Napoca.',
                keywords    : 'electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/12.jpg',
                hasQueue    : false
            }
        };

        states.map = {
            url   : '/map',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.MAP].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Map',
                description : 'The map of ELECTRIC CASTLE, a Romanian music festival that takes place every year on the Transylvanian spectacular domain of Banffy Castle, near Cluj-Napoca.',
                keywords    : 'map, electric castle map, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/12.jpg',
                hasQueue    : false
            }
        };

        states.gettingThere = {
            url   : '/getting-there',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.GETTING_THERE].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Getting There',
                description : 'How to get to ELECTRIC CASTLE by car, plane, bus or train.',
                keywords    : 'electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/12.jpg',
                hasQueue    : false
            }
        };

        states.castle = {
            url   : '/castle',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.THE_CASTLE].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Banffy Castle, the most amazing festival location.',
                description : 'ELECTRIC CASTLE is a Romanian music festival that takes place every year on the Transylvanian spectacular domain of Banffy Castle, near Cluj-Napoca.',
                keywords    : 'electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/12.jpg',
                hasQueue    : false
            }
        };

        states.faq.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'info/faq/faq.tpl.html',
            controller  : 'InfoController as ic'
        };

        states.about.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'info/about.tpl.html'
        };

        states.premium.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'info/premium.tpl.html'
        };

        states.accommodation.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'info/accommodation.tpl.html'
        };

        states.packages.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'info/packages.tpl.html',
            controller  : 'PackagesController as pc'
        };

        states.press.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'info/press.tpl.html'
        };

        states.history.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'info/history.tpl.html',
            controller  : 'InfoController as ic'
        };

        states.travel.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'info/travel.tpl.html'
        };

        states.map.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'festival/map.tpl.html'
        };

        states.castle.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'info/castle.tpl.html'
        };

        states.gettingThere.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'festival/getting-there.tpl.html'
        };

        _.forEach(faqTabs, function (faqTab) {
            var stateName = 'faq' + _.capitalize(faqTab.name);

            states[stateName] = {
                url   : '/' + faqTab.url,
                views : {},
                data  : {
                    name        : [SN.APPLICATION.PUBLIC, SN.FAQ.ROOT, faqTab.name].join('.'),
                    isDisabled  : false,
                    isPrivate   : false,
                    pageTitle   : faqTab.name,
                    description : 'ELECTRIC CASTLE is a Romanian music festival that takes place every year on the Transylvanian spectacular domain of Banffy Castle, near Cluj-Napoca.',
                    keywords    : 'electric castle, festival info, festival rules, festival faq',
                    image       : 'https://electriccastle.ro/assets/img/meta/11.jpg',
                    hasQueue    : false
                }
            };

            states[stateName].views[INFO_UI_VIEW] = {
                templateUrl : VIEWS_PATH + 'info/faq/' + faqTab.url + '.tpl.html'
            };
        });

        _.forEach(states, function (state) {
            if (!state.data.isDisabled) {
                $stateProvider.state(state.data.name, state);
            }
        });
    }

    dependencies.push(StatesManager);

    module.config(dependencies);
}(angular, MODULES));
;(function InfoControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'InfoController',
        dependencies   = ['$location', 'InfoService'];

    function InfoController ($location, InfoService) {
        var self = this;

        self.historyYear        = 0;
        self.shouldHideInfoMenu = !!$location.search().noInfoMenu;

        self.changeHistoryYear = function (newYear) {
            self.historyYear = newYear;
        };

        InfoService.buildTabData().then(function (tabs) {
            self.tabData = tabs;
        });
    }

    dependencies.push(InfoController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function PackagesControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'PackagesController',
        dependencies   = ['PackagesService', 'BasketService', 'HeaderAccountService', 'BootBoxService', 'StateUtil'];

    function PackagesController (PackagesService, BasketService, HeaderAccountService, BootBoxService, StateUtil) {
        var self   = this,
            STATES = module.constants.STATES;

        PackagesService.get();

        self.getProducts             = PackagesService.getProducts;
        self.shouldDisplayNoProducts = PackagesService.shouldDisplayNoProducts;

        self.addToBasket = function (product) {
            product.quantity = 1;

            BasketService.addToBasket([product]).then(function (response) {
                var callbacks = {
                    default : ng.noop,
                    success : function () {
                        StateUtil.go(STATES.BASKET);
                    }
                };

                BootBoxService.addToBasket(product, callbacks, response.success, response.error);

                HeaderAccountService.setHeaderCartQty(BasketService.getNumberOfProducts());
            });
        };
    }

    dependencies.push(PackagesController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function PackagesGalleryWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'packagesGallery',
        dependencies  = ['$timeout'];

    function PackagesGallery ($timeout) {
        return {
            restrict : 'EA',
            scope    : {
                packages : '=packagesGallery'
            },
            link : function (scope) {
                var sliders = [].slice.call(document.querySelectorAll('.slider')),
                    flkties = [];

                function initFlickity () {
                    sliders.forEach(function (slider) {
                        var flkty;

                        $(slider).removeClass('is-loading');

                        flkty = new Flickity(slider, {
                            prevNextButtons : true,
                            wrapAround      : true,
                            cellAlign       : 'left',
                            contain         : true,
                            resize          : false,
                            imagesLoaded    : true
                        });

                        flkties.push(flkty);
                    });
                }

                function recalcFlickities () {
                    var len,
                        i;

                    for (i = 0, len = flkties.length; i < len; ++i) {
                        flkties[i].resize();
                    }
                }

                function initEvents () {
                    sliders.forEach(function (slider) {
                        $(slider).on('staticClick.flickity', function () {
                            var $images = $(this).find('.high-resolution');

                            $(this).lightGallery({
                                thumbnail          : false,
                                animateThumb       : true,
                                showThumbByDefault : false,
                                download           : false,
                                dynamic            : true,
                                dynamicEl          : $images
                            });
                        });
                    });

                    window.addEventListener('resize', _.throttle(function () {
                        recalcFlickities();
                    }, 50));
                }

                function init () {
                    initFlickity();
                    initEvents();
                }

                scope.$watch('packages', function (newValue) {
                    if (newValue && newValue.length) {
                        $timeout(function () {
                            sliders     = [].slice.call($('.slider'));
                            flkties     = [];

                            init();
                        }, 0);
                    }
                });
            }
        };
    }

    dependencies.push(PackagesGallery);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function InfoServiceWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'InfoService',
        dependencies = ['TabService'];

    function InfoService (TabService) {
        var factory = {};

        factory.buildTabData = function () {
            return TabService.build('FAQ');
        };

        return factory;
    }

    dependencies.push(InfoService);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function PackagesServiceeWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'PackagesService',
        dependencies = ['Package'];

    function PackagesService (Package) {
        var factory     = {},
            products    = [],
            callInPlace = true;

        function formatProducts (rawProducts) {
            return _.map(rawProducts, function (rawProduct) {
                rawProduct.qty      = parseInt(rawProduct.qty, 10);
                rawProduct.price    = parseFloat(rawProduct.price);
                rawProduct.priceEur = parseFloat(rawProduct.priceEur);
                rawProduct.images   = _.sortBy(rawProduct.images, function (image) {
                    return parseInt(image.position, 10);
                });

                rawProduct.hasOptions = function () {
                    return !!rawProduct.options && !_.isEmpty(rawProduct.options);
                };

                if (rawProduct.hasOptions()) {
                    rawProduct.selectedOption = _.first(_.toArray(rawProduct.options)).optionId;
                }

                rawProduct.options = _.toArray(rawProduct.options);

                return rawProduct;
            });
        }

        factory.get = function () {
            callInPlace = true;
            products    = [];

            Package.get().then(function success (response) {
                products    = formatProducts(response);
                callInPlace = false;
            });
        };

        factory.getProducts = function () {
            return products;
        };

        factory.shouldDisplayNoProducts = function () {
            return !callInPlace && products.length === 0;
        };

        return factory;
    }

    dependencies.push(PackagesService);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function StatesManagerWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        dependencies = ['$stateProvider'];

    function StatesManager ($stateProvider) {
        var states = {},

            SN         = module.constants.STATES,
            VIEWS_PATH = module.constants.PATH.VIEWS,

            UI_VIEW_PUBLIC  = module.constants.UI_VIEWS.PUBLIC,
            LINE_UP_UI_VIEW = 'line-up-content@' + [SN.APPLICATION.PUBLIC, SN.LINE_UP.ROOT].join('.'),

            lineUpTabs = [{
                url  : 'list',
                name : SN.LINE_UP.LIST
            }];

        states.lineUpList = {
            url      : '/line-up',
            views    : {},
            abstract : true,
            data     : {
                name        : [SN.APPLICATION.PUBLIC, SN.LINE_UP.ROOT].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Line Up',
                description : 'The lineup for ELECTRIC CASTLE, the first Romanian festival that took electronic dance music and live concerts sounds to a castle’s domain.',
                keywords    : 'lineup, ec lineup, electric castle festival, festival artists, ec artists, festival bands, festival schedule',
                image       : 'https://electriccastle.ro/assets/img/meta/2.jpg',
                hasQueue    : false
            }
        };

        states.lineUpList.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'line-up/line-up.tpl.html',
            controller  : 'LineUpController as luc'
        };

        function getStateUrl (infoTab) {
            return infoTab.name === SN.LINE_UP.LIST ? '' : '/' + infoTab.url;
        }

        _.forEach(lineUpTabs, function (infoTab) {
            var stateName = 'info' + _.capitalize(infoTab.name);

            states[stateName] = {
                url            : getStateUrl(infoTab),
                reloadOnSearch : false,
                views          : {},
                data           : {
                    name        : [SN.APPLICATION.PUBLIC, SN.LINE_UP.ROOT, infoTab.name].join('.'),
                    isDisabled  : false,
                    isPrivate   : false,
                    pageTitle   : 'Line Up',
                    description : 'The lineup for ELECTRIC CASTLE, a Romanian music festival that takes place every year on the Transylvanian spectacular domain of Banffy Castle, near Cluj-Napoca.',
                    keywords    : 'lineup, ec lineup, electric castle festival, festival artists, ec artists, festival bands, festival schedule',
                    image       : 'https://electriccastle.ro/assets/img/meta/2.jpg',
                    hasQueue    : false
                }
            };

            states[stateName].views[LINE_UP_UI_VIEW] = {
                templateUrl : VIEWS_PATH + 'line-up/' + infoTab.url + '.tpl.html',
                controller  : infoTab.name + 'Controller as ' + infoTab.name.charAt(0).toLowerCase() + 'c'
            };
        });

        _.forEach(states, function (state) {
            if (!state.data.isDisabled) {
                $stateProvider.state(state.data.name, state);
            }
        });
    }

    dependencies.push(StatesManager);

    module.config(dependencies);
}(angular, MODULES));
;(function LineUpControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'LineUpController',
        dependencies   = ['LineUpService'];

    function LineUpController (LineUpService) {
        var self = this;

        LineUpService.buildTabData().then(function (tabs) {
            self.tabData = tabs;
        });

        LineUpService.fetchArtists();
    }

    dependencies.push(LineUpController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function ListControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'ListController',
        dependencies   = ['LineUpService'];

    function ListController (LineUpService) {
        var self = this;

        self.get = LineUpService.get;
    }

    dependencies.push(ListController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function ArtistGridWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'artistGrid',
        dependencies  = ['$timeout', 'PublisherSubscriber', 'DataShare'];

    function ArtistGrid ($timeout, PubSub, DataShare) {
        return {
            restrict : 'EA',
            scope    : {
                artists : '=artistGrid'
            },
            link : function (scope) {
                var grid   = document.querySelector('.grid'),
                    EVENTS = module.constants.APP_EVENTS,
                    subscription,
                    iso;

                function initIsotope () {
                    var config = {
                            isResizeBound   : false,
                            itemSelector    : '.grid__item',
                            percentPosition : true,
                            masonry         : {
                                columnWidth : '.grid__sizer'
                            },
                            transitionDuration : '0.6s',
                            getSortData        : {
                                name    : '[data-name]',
                                ranking : '[data-sort] parseInt'
                            }
                        },
                        sortBy = DataShare.lineUpSortBy();

                    if (sortBy) {
                        config.sortBy = sortBy;
                    }

                    iso = new Isotope(grid, config);
                }

                function onSortRequested (sortBy) {
                    iso.arrange({
                        sortBy : sortBy
                    });

                    iso.layout();
                }

                function initEvents () {
                    window.addEventListener('resize', _.throttle(function () {
                        iso.layout();
                    }, 50));
                }

                function init () {
                    imagesLoaded(grid, function () {
                        initIsotope();
                        initEvents();
                    });
                }

                scope.$watch('artists', function (newValue) {
                    if (newValue && newValue.length) {
                        $timeout(function () {
                            grid = document.querySelector('.grid');

                            init();
                        }, 0);
                    }
                });

                scope.$on('$destroy', function () {
                    subscription.remove();
                });

                subscription = PubSub.subscribe(EVENTS.LINE_UP.SORT_ARTISTS, onSortRequested);
            }
        };
    }

    dependencies.push(ArtistGrid);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function SortControllerWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'sortController',
        dependencies  = ['PublisherSubscriber', 'DataShare'];

    function SortController (PubSub, DataShare) {
        return {
            restrict : 'EA',
            link     : function () {
                var sortControl = [].slice.call(document.querySelectorAll('.filter > a')),
                    EVENTS      = module.constants.APP_EVENTS;

                sortControl.forEach(function (filterCtrl) {
                    filterCtrl.addEventListener('click', function () {
                        var key    = filterCtrl.getAttribute('data-sort'),
                            sortBy = {
                                ranking      : 'ranking',
                                alphabetical : 'name'
                            };

                        DataShare.lineUpSortBy(sortBy[key]);

                        classie.remove(filterCtrl.parentNode.querySelector('.filter__item--selected'), 'filter__item--selected');
                        classie.add(filterCtrl, 'filter__item--selected');

                        PubSub.publish(EVENTS.LINE_UP.SORT_ARTISTS, sortBy[key]);
                    });
                });
            }
        };
    }

    dependencies.push(SortController);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function LineUpServiceWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'LineUpService',
        dependencies = ['TabService', 'Artist'];

    function LineUpService (TabService, Artist) {
        var factory = {},
            artists = [],

            STATES = module.constants.STATES;

        factory.buildTabData = function () {
            return TabService.build('LINE_UP');
        };

        factory.fetchArtists = function () {
            Artist.getAll().then(function (data) {
                artists = _.sortBy(data, function (artist) {
                    return parseInt(artist.ranking, 10);
                });
            });
        };

        factory.retrieveArtistList = function (tab) {
            return _.sortBy(artists, function (artist) {
                if (tab === STATES.LINE_UP.ALPHABETICAL) {
                    return artist.name;
                }

                return parseInt(artist.ranking, 10);
            });
        };

        factory.get = function () {
            return artists;
        };

        return factory;
    }

    dependencies.push(LineUpService);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function NewsroomStatesWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        dependencies = ['$stateProvider'];

    function NewsroomStates ($stateProvider) {
        var states = {},

            STATES     = module.constants.STATES,
            VIEWS_PATH = module.constants.PATH.VIEWS,
            MAGIC_ID   = module.constants.MAGIC_NUMBERS.FEATURED_NEWS_ID,

            UI_VIEW_PUBLIC = module.constants.UI_VIEWS.PUBLIC;

        states.newsroom = {
            url     : '/newsroom',
            views   : {},
            resolve : {
                NewsItem : ['$q', 'NewsroomService', function ($q, NewsroomService) {
                    var deferred = $q.defer();

                    NewsroomService.fetchItem(MAGIC_ID).then(function (item) {
                        states.newsroom.data.image       = item.headerImage;
                        states.newsroom.data.pageTitle   = 'Electric Newsroom: ' + item.title;
                        states.newsroom.data.description = item.subtitle;

                        deferred.resolve({
                            data : item
                        });
                    });

                    return deferred.promise;
                }]
            },
            data : {
                name        : [STATES.APPLICATION.PUBLIC, STATES.NEWSROOM.ROOT].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Electric Story',
                description : 'Booming sounds, happy people, wonderful surroundings.',
                keywords    : 'electric castle, stories, electric story',
                image       : 'https://electriccastle.ro/assets/img/meta/newsroom.jpg',
                hasQueue    : false
            }
        };

        states.newsroomArticle = {
            url     : '/newsroom/:articleId/:articleTitle',
            views   : {},
            resolve : {
                NewsItem : ['$q', '$stateParams', 'NewsroomService', function ($q, $stateParams, NewsroomService) {
                    var deferred  = $q.defer(),
                        articleId = $stateParams.articleId;

                    NewsroomService.fetchItem(articleId).then(function (item) {
                        states.newsroomArticle.data.image       = item.headerImage;
                        states.newsroomArticle.data.pageTitle   = item.title;
                        states.newsroomArticle.data.description = item.subtitle;

                        deferred.resolve({
                            data : item
                        });
                    });

                    return deferred.promise;
                }]
            },
            data : {
                name        : [STATES.APPLICATION.PUBLIC, STATES.NEWSROOM.ARTICLE].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                description : 'Booming sounds, happy people, wonderful surroundings.',
                keywords    : 'electric castle, stories, electric story',
                image       : 'https://electriccastle.ro/assets/img/meta/newsroom.jpg',
                hasQueue    : false
            }
        };

        states.newsroom.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'newsroom/newsroom.tpl.html',
            controller  : 'NewsroomController as nrc'
        };

        states.newsroomArticle.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'newsroom/newsroom-article.tpl.html',
            controller  : 'NewsroomArticleController as nrac'
        };

        _.forEach(states, function (state) {
            if (!state.data.isDisabled) {
                $stateProvider.state(state.data.name, state);
            }
        });
    }

    dependencies.push(NewsroomStates);

    module.config(dependencies);
}(angular, MODULES));
;(function NewsroomArticleControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'NewsroomArticleController',
        dependencies   = ['$sce', '$location', 'NewsroomService', 'NewsItem'];

    function NewsroomArticleController ($sce, $location, NewsroomService, NewsItem) {
        var self      = this;

        self.newsItem = NewsItem.data;

        self.shouldDisplayNoRelatedNews = NewsroomService.shouldDisplayNoRelatedNews;
        self.shouldDisplayNoNewsItem    = NewsroomService.shouldDisplayNoNewsItem;

        self.shareUrl = $location.absUrl();

        self.trustHtml = function (html) {
            return $sce.trustAsHtml(html);
        };
    }

    dependencies.push(NewsroomArticleController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function NewsroomControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'NewsroomController',
        dependencies   = ['NewsroomService', 'NewsItem'];

    function NewsroomController (NewsroomService, NewsItem) {
        var self     = this;

        self.getNews  = NewsroomService.getAll;
        self.featured = NewsItem.data;

        NewsroomService.fetchAll();
    }

    dependencies.push(NewsroomController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function NewsroomServiceeWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'NewsroomService',
        dependencies = ['$q', 'News'];

    function NewsroomService ($q, News) {
        var factory  = {},
            news     = [],
            newsItem = {},

            callInPlace = true;

        factory.fetchAll = function () {
            var deferred  = $q.defer();

            callInPlace = true;

            News.getAll().then(function success (response) {
                news = _.map(response.data.news, function (item) {
                    return _.extend({}, item, {
                        formattedTitle : factory.formatTitleForUrl(item.title)
                    });
                });

                callInPlace = false;

                deferred.resolve(response.data);
            });

            return deferred.promise;
        };

        factory.fetchItem = function (id) {
            var deferred = $q.defer();

            callInPlace = true;

            News.get(id).then(function success (response) {
                if (response.data.title) {
                    response.data.formattedTitle = factory.formatTitleForUrl(response.data.title);

                    newsItem = response.data;

                    newsItem.related =  _.map(response.data.related, function (item) {
                        return _.extend({}, item, {
                            formattedTitle : factory.formatTitleForUrl(item.title)
                        });
                    });
                }

                callInPlace = false;

                deferred.resolve(response.data);
            });

            return deferred.promise;
        };

        factory.getAll = function () {
            return news;
        };

        factory.getItem = function () {
            return newsItem;
        };

        factory.shouldDisplayNoNews = function () {
            return !callInPlace && news.length === 0;
        };

        factory.shouldDisplayNoNewsItem = function () {
            return !callInPlace && Object.keys(newsItem).length === 0;
        };

        factory.shouldDisplayNoRelatedNews = function () {
            return !callInPlace && !newsItem.related.length;
        };

        factory.formatTitleForUrl = function (title) {
            return _.escapeRegExp(_.lowerCase(title).replace(/ /g, '-'));
        };

        return factory;
    }

    dependencies.push(NewsroomService);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function ContestRulesControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'ContestRulesController',
        dependencies   = [];

    function ContestRulesController () {
        window.location = '/assets/docs/contest-rules.pdf';
    }

    dependencies.push(ContestRulesController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function RulesControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'RulesController',
        dependencies   = [];

    function RulesController () {
        window.location = '/assets/docs/rules.pdf';
    }

    dependencies.push(RulesController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function NewScheduleControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'NewScheduleController',
        dependencies   = ['$stateParams', 'NewScheduleService'];

    function NewScheduleController ($stateParams, NewScheduleService) {
        var self = this,
            day  = $stateParams.day || NewScheduleService.isWithinFestivalDays();

        NewScheduleService.reset();
        NewScheduleService.fetch(day);

        self.cb = {
            getAllFestivalDays : NewScheduleService.allFestivalDays,
            getEntireSchedule  : NewScheduleService.getEntireSchedule,
            getTopOffset       : function (dayMinimum, myStart, myEnd) {
                var oneMinuteInPixels = 0.6,
                    heightInMinutes   = (myEnd.hours - myStart.hours) * 60 + (myEnd.minutes - myStart.minutes),
                    heightInPixels    = heightInMinutes * oneMinuteInPixels,
                    topOffset         = ((myStart.hours - dayMinimum) * 60 + myStart.minutes) * oneMinuteInPixels;

                return {
                    top    : topOffset + 'px',
                    height : heightInPixels + 'px'
                };
            }
        };
    }

    dependencies.push(NewScheduleController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function ScheduleControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'ScheduleController',
        dependencies   = ['ScheduleService'];

    function ScheduleController (ScheduleService) {
        var self = this;

        ScheduleService.fetchSchedule();

        self.flags = {
            displaySimpleVersion : true
        };

        self.get               = ScheduleService.get;
        self.getMatrix         = ScheduleService.getMatrix;
        self.getSimpleSchedule = ScheduleService.getSimpleSchedule;

        self.changeLayout = function () {
            self.flags.displaySimpleVersion = !self.flags.displaySimpleVersion;
        };
    }

    dependencies.push(ScheduleController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function CurrentTimeWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'currentTime',
        dependencies  = ['$compile', '$templateCache', '$interval'];

    function CurrentTime ($compile, $templateCache, $interval) {
        var currentTimeTpl    = $templateCache.get('assets/views/schedule/current-time.tpl.html'),
            oneMinuteInPixels = 0.75,

            FESTIVAL_DATES = {
                YEAR      : 2017,
                MONTH     : 6,
                START_DAY : 12,
                END_DAY   : 16
            };

        return {
            restrict : 'EA',
            replace  : true,
            scope    : {
                model : '='
            },
            link : function (scope, element) {
                scope.currentTime = moment().format('HH:mm:ss');
                scope.style       = {top : '0px'};

                function isTheSameYear (year) {
                    return year === FESTIVAL_DATES.YEAR;
                }

                function isTheSameMonth (month) {
                    return month === FESTIVAL_DATES.MONTH;
                }

                function isTheRightDay (day) {
                    return day >= FESTIVAL_DATES.START_DAY && day <= FESTIVAL_DATES.END_DAY;
                }

                function determineVisibility () {
                    var now        = moment(),
                        todayYear  = now.year(),
                        todayMonth = now.month(),
                        todayDay   = now.date();

                    return isTheSameYear(todayYear) && isTheSameMonth(todayMonth) && isTheRightDay(todayDay);
                }

                scope.showCurrentTime = determineVisibility();

                function determinePosition (day) {
                    var dayMinHour  = day.minimumStartHour.usedToCompute,
                        now         = moment(),
                        hours       = now.hours(),
                        minutes     = now.minutes(),
                        topOffset   = (((hours < 10 ? hours + 24 : hours) - dayMinHour) * 60 + minutes) * oneMinuteInPixels,
                        compareHour = hours < 10 ? hours + 24 : hours;

                    if (!_.inRange(compareHour, day.minimumStartHour.usedToCompute, day.maximumEndHour.usedToCompute)) {
                        scope.showCurrentTime = false;
                    }

                    return {
                        top : topOffset + 'px'
                    };
                }

                $interval(function () {
                    scope.currentTime = moment().format('HH:mm:ss');
                }, 1000);

                element.html(currentTimeTpl).show();
                $compile(element.contents())(scope);

                scope.$watch('model', function (newValue) {
                    if (newValue) {
                        scope.style = determinePosition(newValue.flags);

                        $interval(function () {
                            scope.style = determinePosition(newValue.flags);
                        }, 60 * 1000);
                    }
                });
            }
        };
    }

    dependencies.push(CurrentTime);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function DayGridWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'dayGrid',
        dependencies  = ['$compile', 'StringUtil'];

    function DayGrid ($compile, StringUtil) {
        var oneMinuteInPixels = 0.75;

        return {
            restrict : 'EA',
            replace  : true,
            scope    : {
                model : '='
            },
            link : function (scope, element) {
                function getDayHours (day) {
                    var startHour   = day.flags.minimumStartHour.usedToCompute,
                        endHour     = day.flags.maximumEndHour.usedToCompute,
                        diffInHours = endHour - startHour,

                        hours = _.times(diffInHours + 2, function (hour) {
                            return startHour + hour;
                        });

                    return hours;
                }

                function generateGrid (day) {
                    var dayHours         = getDayHours(day),
                        hourLineTemplate = [
                            '<span class="hour-wrap" style="{style}">',
                            '<span class="hour">',
                            '{hour}',
                            '</span>',
                            '</span>'
                        ].join('');

                    return _.reduce(dayHours, function (acc, hour) {
                        acc.push(StringUtil.supplant(hourLineTemplate, {
                            style : 'top:' + Math.abs(day.flags.minimumStartHour.usedToCompute - hour) * 60 * oneMinuteInPixels + 'px',
                            hour  : _.padStart(hour >= 24 ? hour - 24 : hour, 2, '0')
                        }));

                        return acc;
                    }, []).join('');
                }

                scope.$watch('model', function (newValue) {
                    var template;

                    if (newValue) {
                        template = generateGrid(newValue);

                        element.html(template).show();
                        $compile(element.contents())(scope);
                    }
                });
            }
        };
    }

    dependencies.push(DayGrid);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function SchedulePerStageWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'schedulePerStage',
        dependencies  = ['$compile', '$templateCache', 'StringUtil'];

    function SchedulePerStage ($compile, $templateCache, StringUtil) {
        var artistBoxTemplate = $templateCache.get('assets/views/schedule/artist-box.tpl.html'),
            stageTemplate     = $templateCache.get('assets/views/schedule/stage-box.tpl.html'),
            oneMinuteInPixels = 0.75;

        return {
            restrict : 'EA',
            replace  : true,
            scope    : {
                model : '='
            },
            link : function (scope, element) {
                function determinePosition (dayMinimum, start, end) {
                    var heightInMinutes = (end.hours - start.hours) * 60 + (end.minutes - start.minutes),
                        heightInPixels  = heightInMinutes * oneMinuteInPixels,
                        topOffset       = ((start.hours - dayMinimum) * 60 + start.minutes) * oneMinuteInPixels;

                    return 'top:' + topOffset + 'px;height:' + heightInPixels + 'px;';
                }

                function buildStageSchedule (stage, day) {
                    return _.reduce(stage.artists, function (acc, artist) {
                        var templateData = {
                            artistName   : artist.name,
                            startHour    : artist.startHour.hDisplayed,
                            startMinutes : artist.startHour.mDisplayed,
                            endHour      : artist.endHour.hDisplayed,
                            endMinutes   : artist.endHour.mDisplayed,
                            style        : determinePosition(day.flags.minimumStartHour.usedToCompute, artist.startHour, artist.endHour)
                        };

                        acc.push(StringUtil.supplant(artistBoxTemplate, templateData));

                        return acc;
                    }, []).join('');
                }

                function getStageStyle (day) {
                    var hoursDiff   = day.flags.maximumEndHour.usedToCompute - day.flags.minimumStartHour.usedToCompute,
                        minutesDiff = day.flags.maximumEndMinutes - day.flags.minimumStartMinutes,

                        heightInMinutes = hoursDiff * 60 + minutesDiff,
                        heightInPixels  = heightInMinutes * oneMinuteInPixels;

                    return 'height:' + heightInPixels + 'px;';
                }

                function buildDay (day) {
                    var style = getStageStyle(day);

                    return _.reduce(day.stages, function (acc, stage, index) {
                        var stageArtists = buildStageSchedule(stage, day),
                            stageData    = {
                                stageArtists : stageArtists,
                                style        : style,
                                index        : index
                            };

                        acc.push(StringUtil.supplant(stageTemplate, stageData));

                        return acc;
                    }, []).join('');
                }

                scope.$watch('model', function (newValue) {
                    var stagesHtml;

                    if (newValue) {
                        stagesHtml = buildDay(newValue);

                        element.html(stagesHtml).show();
                        $compile(element.contents())(scope);
                    }
                });
            }
        };
    }

    dependencies.push(SchedulePerStage);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function NewScheduleServiceWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'NewScheduleService',
        dependencies = ['Artist'];

    function NewScheduleService (Artist) {
        var factory = {},

            allFestivalDays    = [],
            normalizedSchedule = [],
            dayStagesSchedule  = {};

        function defineStagesPerDay (festivalDays, schedule, selectedDay) {
            var isMobile = $.browser.mobile;

            return _.reduce(festivalDays, function (acc, day) {
                var stageIndex = 0;

                if (('' + day).toLowerCase() !== 'tba') {
                    acc[day] = {
                        stages   : {},
                        isActive : day === parseInt(selectedDay, 10),
                        name     : day,
                        cb       : {
                            activate : function () {
                                _.forEach(acc, function (festivalDay) {
                                    festivalDay.isActive = festivalDay.name === day;
                                });
                            }
                        },
                        flags : {
                            minimumStartHour : {
                                usedToDisplay : 32,
                                usedToCompute : 32
                            },
                            minimumStartMinutes : 0,
                            maximumEndMinutes   : 0,
                            maximumEndHour      : {
                                usedToDisplay : 8,
                                usedToCompute : 8
                            }
                        }
                    };

                    _.map(schedule, function (artist) {
                        var stageKey             = _.snakeCase(artist.stage).toUpperCase(),
                            isStageDefinedForDay = !_.isUndefined(acc[day].stages[stageKey]);

                        if (!isStageDefinedForDay) {
                            acc[day].stages[stageKey] = {
                                key            : stageKey,
                                name           : artist.stage,
                                isActive       : isMobile ? stageIndex === 0 : true,
                                headerExpanded : isMobile ? stageIndex === 0 : false,
                                artists        : [],
                                cb             : {
                                    toggleTheRest : function (clickedStage) {
                                        if (!isMobile) {
                                            clickedStage.headerExpanded = !clickedStage.headerExpanded;

                                            _.forEach(acc[day].stages, function (stage) {
                                                stage.isActive = clickedStage.headerExpanded ? stage.key === clickedStage.key : true;

                                                if (stage.key !== clickedStage.key) {
                                                    stage.headerExpanded = false;
                                                }
                                            });
                                        } else {
                                            _.forEach(acc[day].stages, function (stage) {
                                                stage.isActive       = stage.key === clickedStage.key;
                                                stage.headerExpanded = stage.key === clickedStage.key;
                                            });
                                        }
                                    }
                                }
                            };

                            stageIndex += 1;
                        }
                    });
                }

                return acc;
            }, {});
        }

        function doesArtistOverlap (artist, stageArtists) {
            return _.filter(stageArtists, function (stageArtist) {
                return stageArtist.startHour.hours === artist.startHour.hours &&
                       stageArtist.startHour.minutes === artist.startHour.minutes &&
                       stageArtist.endHour.hours === artist.endHour.hours &&
                       stageArtist.endHour.minutes === artist.endHour.minutes;
            });
        }

        function areThoseTwoOneOnTopOfEachOther (who, onTopOfWhom) {
            return who.name === onTopOfWhom.name &&
                   who.startHour.hours === onTopOfWhom.startHour.hours &&
                   who.endHour.hours === onTopOfWhom.endHour.hours;
        }

        function extractEachDayStageSchedule (festivalDays, schedule, day) {
            var stagesPerDay = defineStagesPerDay(festivalDays, schedule, day);

            _.forEach(schedule, function (artist) {
                var stageKey   = _.snakeCase(artist.stage).toUpperCase(),
                    artistData = _.pick(artist, [
                        'name', 'rank', 'media', 'startHour', 'endHour'
                    ]),
                    index = _.sortedIndexBy(stagesPerDay[artist.day].stages[stageKey].artists, artistData, function (entry) {
                        return parseInt(entry.startHour.hours + entry.startHour.mDisplayed, 10);
                    }),
                    overlap;

                if (artist.startHour.hours < stagesPerDay[artist.day].flags.minimumStartHour.usedToCompute) {
                    stagesPerDay[artist.day].flags.minimumStartHour.usedToCompute = artist.startHour.hours;
                    stagesPerDay[artist.day].flags.minimumStartHour.usedToDisplay = artist.startHour.origHours;
                    stagesPerDay[artist.day].flags.minimumStartMinutes            = artist.startHour.minutes;
                }

                if (artist.endHour.hours > stagesPerDay[artist.day].flags.maximumEndHour.usedToCompute) {
                    stagesPerDay[artist.day].flags.maximumEndHour.usedToCompute = artist.endHour.hours;
                    stagesPerDay[artist.day].flags.maximumEndHour.usedToDisplay = artist.endHour.origHours;
                    stagesPerDay[artist.day].flags.maximumEndMinutes            = artist.endHour.minutes;
                }

                overlap = doesArtistOverlap(artistData, stagesPerDay[artist.day].stages[stageKey].artists);

                if (overlap.length) {
                    _.forEach(stagesPerDay[artist.day].stages[stageKey].artists, function (art) {
                        if (areThoseTwoOneOnTopOfEachOther(art, _.first(overlap))) {
                            art.name += ', ' + artistData.name;
                        }
                    });
                } else {
                    stagesPerDay[artist.day].stages[stageKey].artists.splice(index, 0, artistData);
                }
            });

            return stagesPerDay;
        }

        function getHourAndMinutes (hourAndMinutes) {
            var parts     = hourAndMinutes.split(/\:/),
                origHours = parseInt(parts[0], 10),
                hours     = origHours + (origHours < 10 ? 24 : 0),
                minutes   = parseInt(parts[1], 10);

            return {
                origHours  : origHours,
                hours      : hours,
                minutes    : minutes,
                hDisplayed : _.padStart(origHours, 2, '0'),
                mDisplayed : _.padStart(minutes, 2, '0')
            };
        }

        function normalizeSchedule (backendSchedule) {
            return _.reduce(backendSchedule, function (acc, artist) {
                _.map(artist.schedule, function (performance) {
                    if (performance.stage.toLowerCase() !== 'tba' &&
                        !_.isNaN(parseInt(performance.hour, 10)) &&
                        !_.isNaN(parseInt(performance.hourEnd, 10))) {
                        acc.push({
                            name  : artist.name,
                            rank  : artist.ranking,
                            media : {
                                facebook  : artist.facebookUrl,
                                twitter   : artist.twitterUrl,
                                instagram : artist.instagramUrl,
                                website   : artist.websiteUrl,
                                youtube   : artist.youtubeUrl,
                                image     : artist.taglineImage
                            },
                            day       : parseInt(performance.day, 10),
                            startHour : getHourAndMinutes(performance.hour),
                            endHour   : getHourAndMinutes(performance.hourEnd),
                            stage     : performance.stage
                        });
                    }
                });

                return acc;
            }, []);
        }

        /**
         * Function used to extract all the festival days
         * out of the schedule received from backend
         */
        function extractAllDays (schedule) {
            return _.chain(schedule).map(function (artist) {
                return artist.day;
            }, []).uniq().sort().value();
        }

        function successCallback (day, response) {
            normalizedSchedule = normalizeSchedule(response);
            allFestivalDays    = extractAllDays(normalizedSchedule);
            dayStagesSchedule  = extractEachDayStageSchedule(allFestivalDays, normalizedSchedule, day);
        }

        factory.fetch = function (day) {
            Artist.getAll().then(_.partial(successCallback, day));
        };

        factory.allFestivalDays = function () {
            return allFestivalDays;
        };

        factory.getEntireSchedule = function () {
            return dayStagesSchedule;
        };

        factory.isWithinFestivalDays = function () {
            var now          = moment(),
                todayDay     = now.date(),
                todayHour    = now.hour(),
                currentMonth = now.month(),

                FESTIVAL_DATES = {
                    YEAR       : 2017,
                    MONTH      : 6,
                    START_DAY  : 12,
                    END_DAY    : 16,
                    START_HOUR : 10,
                    END_HOUR   : 24 + 10
                };

            if (todayHour < 10) {
                todayHour += 24;
            }

            if (currentMonth === FESTIVAL_DATES.MONTH && todayDay >= FESTIVAL_DATES.START_DAY && todayDay <= FESTIVAL_DATES.END_DAY) {
                if (todayHour > 24 && todayHour < FESTIVAL_DATES.END_HOUR) {
                    return todayDay - 1 - FESTIVAL_DATES.START_DAY;
                }

                return todayDay - FESTIVAL_DATES.START_DAY;
            }

            return 0;
        };

        factory.reset = function () {
            allFestivalDays    = [];
            normalizedSchedule = [];
            dayStagesSchedule  = {};
        };

        return factory;
    }

    dependencies.push(NewScheduleService);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function ScheduleServiceWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'ScheduleService',
        dependencies = ['Artist'];

    function ScheduleService (Artist) {
        var factory        = {},
            schedule       = [],
            daysHours      = {},
            matrix         = null,
            simpleSchedule = null;

        /**
         * Return the index at which the artist should be placed in the
         * entire day schedule, considering the hour he/she performs
         *
         * @param acc           - reduce function accumulator
         * @param scheduleEntry - the current entry
         */
        function retrieveArtistIndex (acc, scheduleEntry) {
            return _.sortedIndexBy(acc[scheduleEntry.day][scheduleEntry.stage], scheduleEntry, function (item) {
                var hour = parseInt(item.hour.replace(/:/, ''), 10);

                if (hour < 1200) {
                    hour += 2400;
                }

                return hour;
            });
        }

        /**
         * Retrieve the index of the hour in the current day, so that
         * hours are not duplicated
         *
         * @param scheduleEntry - the current entry
         */
        function retrieveDayHourIndex (scheduleEntry) {
            return _.sortedIndexBy(daysHours[scheduleEntry.day], scheduleEntry.hour.replace(/:/, ''), function (item) {
                var hour = parseInt(item.replace(/:/, ''), 10);

                if (hour < 1200) {
                    hour += 2400;
                }

                return hour;
            });
        }

        /**
         * Determine if the hour already exists in the hours array for a day,
         * so that a set is maintainer
         *
         * @param scheduleEntry
         */
        function hourDoesNotExist (scheduleEntry) {
            return _.indexOf(daysHours[scheduleEntry.day], scheduleEntry.hour) === -1;
        }

        /**
         * Helper function. If the value is already defined, just return
         * it, otherwise return the default value
         *
         * @param item
         * @param defaultValue
         */
        function defineOrLeaveAsItIs (item, defaultValue) {
            return item ? item : defaultValue;
        }

        function completeEntry (hours, dayName, hourIndex) {
            _.forEach(hours, function (entry, entryIndex) {
                var match = factory.retrieveArtistBy(dayName, entry.stageName, entry.hour);

                if (match) {
                    matrix[dayName][hourIndex][entryIndex].artist = match;
                }
            });
        }

        factory.completeMatrix = function () {
            _.forEach(matrix, function (day, dayName) {
                _.forEach(day, function (hours, hourIndex) {
                    completeEntry(hours, dayName, hourIndex);
                });
            });
        };

        /**
         * Function used to build the simple schedule, that is an object
         * of the following form:
         *
         * {
         *     1 : [<array of artists sorted ascending by ranking],
         *     2 : [ -||- ],
         *     .
         *     .
         *     .
         * }
         *
         * where the keys in the object are the days of the festival.
         * The function does the following:
         *
         *     - extract the days from all the artists's schedules
         *     - sort the days ascending
         *     - for each day, create an entry in the object with
         *       an empty array as value
         *
         *     - iterate over all the artists
         *     - for each schedule in the artist schedule do
         *         1. clone the array corresponding to the current day
         *         2. compute the value that needs to be inserted
         *         3. determine the index where the artist should be
         *            inserted, regarding his/her ranking
         *         4. determine if the artists is already added to the
         *            current day
         *         5. if the artists does not exists go to 6. otherwise
         *            go to 7
         *         6. add the artist at the right position in the current
         *            day
         *         7. reassign the current day
         *
         * *NOTE* Items 1 and 7 are required due to some misplaced references
         *
         * @param artists - artists list received from backend
         */
        factory.buildSimpleSchedule = function (artists) {
            var days = _.chain(artists).reduce(function (acc, artist) {
                var temp = _.union(acc, _.map(artist.schedule, 'day'));

                return _.flatten(temp);
            }, []).sortBy(function (item) {
                return parseInt(item, 10);
            }).zipObject(_.times(6, _.constant([]))).value();

            simpleSchedule = _.reduce(artists, function (acc, artist) {
                _.map(artist.schedule, function (scheduleEntry) {
                    var temp         = _.cloneDeep(acc[scheduleEntry.day]),
                        toBeInserted = {
                            name : artist.name,
                            rank : artist.ranking
                        },
                        index  = _.sortedIndexBy(acc[scheduleEntry.day], toBeInserted, 'rank'),
                        exists = _.intersectionBy(acc[scheduleEntry.day], [toBeInserted], 'name').length;

                    if (!exists) {
                        temp.splice(index, 0, toBeInserted);
                    }

                    acc[scheduleEntry.day] = temp;
                });

                return acc;
            }, days);
        };

        /**
         * For more complex table layout. This function builds a matrix
         * that look like the following example:
         *
         * +----------------------------------------------------------+
         * |          |                    DAY 1                      |
         * +----------------------------------------------------------+
         * |          | STAGE 1 | STAGE 2 |       ...       | STAGE N |
         * +----------------------------------------------------------+
         * |   HH:mm  |  entry  |  entry  |       ...       |  entry  |
         * +----------------------------------------------------------+
         * |    ...   |   ...   |   ...   |       ...       |   ...   |
         * +----------------------------------------------------------+
         */
        factory.buildMatrix = function () {
            matrix =  _.reduce(_.keys(daysHours), function (acc, day) {
                var dayStages = [],
                    dayHours  = [];

                acc[day] = [];

                _.forEach(daysHours[day], function (dayHour) {
                    var stageSchedulePerHour = [];

                    _.forEach(_.keys(schedule[day]), function (stageName) {
                        dayStages = _.union(dayStages, [stageName]);
                        dayHours  = _.union(dayHours, [dayHour]);

                        stageSchedulePerHour.push({
                            stageName : stageName,
                            hour      : dayHour,
                            artist    : null
                        });
                    });

                    acc[day].push(stageSchedulePerHour);
                });

                acc[day].name   = day;
                acc[day].stages = dayStages;
                acc[day].hours  = dayHours;

                return acc;
            }, {});
        };

        function successCallback (data) {
            schedule = _.reduce(data, function (acc, artist) {
                _.forEach(artist.schedule, function (scheduleEntry) {
                    var index,
                        dayHourIndex;

                    acc[scheduleEntry.day]                      = defineOrLeaveAsItIs(acc[scheduleEntry.day], {});
                    acc[scheduleEntry.day][scheduleEntry.stage] = defineOrLeaveAsItIs(acc[scheduleEntry.day][scheduleEntry.stage], []);
                    daysHours[scheduleEntry.day]                = defineOrLeaveAsItIs(daysHours[scheduleEntry.day], []);

                    index        = retrieveArtistIndex(acc, scheduleEntry);
                    dayHourIndex = retrieveDayHourIndex(scheduleEntry);

                    if (hourDoesNotExist(scheduleEntry)) {
                        daysHours[scheduleEntry.day].splice(dayHourIndex, 0, scheduleEntry.hour);
                    }

                    acc[scheduleEntry.day][scheduleEntry.stage].splice(index, 0, {
                        name  : artist.name,
                        hour  : scheduleEntry.hour,
                        index : parseInt(scheduleEntry.hour.replace(/:/, ''), 10)
                    });
                });

                return acc;
            }, {});

            factory.buildSimpleSchedule(data);
            factory.buildMatrix();
            factory.completeMatrix();
        }

        factory.fetchSchedule = function () {
            Artist.getAll().then(successCallback);
        };

        factory.retrieveArtistBy = function (day, stage, hour) {
            var result = null;

            _.forEach(schedule[day][stage], function (artist) {
                if (artist.hour === hour) {
                    result = artist.name;

                    return false;
                }

                return true;
            });

            return result;
        };

        factory.getMatrix = function () {
            return matrix;
        };

        factory.get = function () {
            return schedule;
        };

        factory.getSimpleSchedule = function () {
            return simpleSchedule;
        };

        return factory;
    }

    dependencies.push(ScheduleService);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function ShopStatesWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        dependencies = ['$stateProvider'];

    function ShopStates ($stateProvider) {
        var states = {},

            STATES     = module.constants.STATES,
            VIEWS_PATH = module.constants.PATH.VIEWS,

            UI_VIEW_PUBLIC = module.constants.UI_VIEWS.PUBLIC;

        states.shop = {
            url   : '/shop',
            views : {},
            data  : {
                name        : [STATES.APPLICATION.PUBLIC, STATES.SHOP.ROOT].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Shop',
                description : 'Awesome stuff from Electric Castle Festival',
                keywords    : 'shop, festival t-shirts, festival accessories, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/5.jpg',
                hasQueue    : false
            }
        };

        states.merchandise = {
            url   : '/merchandise',
            views : {},
            data  : {
                name        : [STATES.APPLICATION.PUBLIC, STATES.MERCHANDISE.ROOT].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Shop',
                description : 'Awesome stuff from Electric Castle Festival',
                keywords    : 'shop, merchandise, festival t-shirts, festival accessories, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/5.jpg',
                hasQueue    : false
            }
        };

        states.orderSuccess = {
            url   : '/order-success',
            views : {},
            data  : {
                name        : [STATES.APPLICATION.PUBLIC, STATES.ORDER_SUCCESS].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Order Success',
                description : 'Your order was successfully placed. Check you email and your account to see your products.',
                keywords    : 'tickets, products, offers, basket, festival access, camping, vip, packages, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/5.jpg',
                hasQueue    : false
            }
        };

        states.orderFailed = {
            url   : '/order-failed',
            views : {},
            data  : {
                name        : [STATES.APPLICATION.PUBLIC, STATES.ORDER_FAILED].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Order Failed',
                description : 'Your order failed to be placed. Please check your details and try again.',
                keywords    : 'tickets, products, offers, basket, festival access, camping, vip, packages, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/5.jpg',
                hasQueue    : false
            }
        };

        states.orderSuccess.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'shop/order-success.tpl.html',
            controller  : 'OrderResponseController as orc'
        };

        states.orderFailed.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'shop/order-failed.tpl.html',
            controller  : 'OrderResponseController as orc'
        };

        states.shop.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'shop/shop.tpl.html',
            controller  : 'ShopController as sc'
        };

        states.merchandise.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'shop/shop.tpl.html',
            controller  : 'ShopController as sc'
        };

        _.forEach(states, function (state) {
            if (!state.data.isDisabled) {
                $stateProvider.state(state.data.name, state);
            }
        });
    }

    dependencies.push(ShopStates);

    module.config(dependencies);
}(angular, MODULES));
;(function OrderResponseControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'OrderResponseController',
        dependencies   = ['$window', 'OrdersService', 'DataShare'];

    function OrderResponseController ($window, OrdersService, DataShare) {
        var self = this;

        self.latestOrder = {
            id         : 0,
            orderTotal : 0,
            currency   : 'RON'
        };

        if (DataShare.isLoggedIn()) {
            OrdersService.fetch().then(function (response) {
                if (response.success) {
                    self.latestOrder = _.first(response.data);

                    if ($window.gaplugins) {
                        $window.ga('ecommerce:addTransaction', {
                            id      : self.latestOrder.id,
                            revenue : self.latestOrder.orderTotal
                        });

                        $window.ga('ecommerce:send');
                    }

                    /*eslint-disable*/
                    if ($window._fbq) {
                        $window.fbq('track', 'Purchase', {
                            value    : self.latestOrder.orderTotal,
                            currency : 'RON'
                        });
                    }
                    /*eslint-enable*/
                }
            });
        }
    }

    dependencies.push(OrderResponseController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function ShopControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'ShopController',
        dependencies   = ['ShopService', 'BasketService', 'HeaderAccountService', 'BootBoxService', 'StateUtil'];

    function ShopController (ShopService, BasketService, HeaderAccountService, BootBoxService, StateUtil) {
        var self   = this,
            STATES = module.constants.STATES;

        ShopService.get();

        self.getProducts             = ShopService.getProducts;
        self.getCategories           = ShopService.getCategories;
        self.shouldDisplayCategories = ShopService.shouldDisplayCategories;
        self.shouldDisplayNoProducts = ShopService.shouldDisplayNoProducts;

        self.addToBasket = function (product) {
            product.quantity = 1;

            BasketService.addToBasket([product]).then(function (response) {
                var callbacks = {
                    default : ng.noop,
                    success : function () {
                        StateUtil.go(STATES.BASKET);
                    }
                };

                BootBoxService.addToBasket(product, callbacks, response.success, response.error);

                HeaderAccountService.setHeaderCartQty(BasketService.getNumberOfProducts());
            });
        };
    }

    dependencies.push(ShopController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function ShopGridWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'shopGrid',
        dependencies  = ['$timeout'];

    function ShopGrid ($timeout) {
        return {
            restrict : 'EA',
            scope    : {
                products : '=shopGrid'
            },
            link : function (scope) {
                var sliders     = [].slice.call(document.querySelectorAll('.slider')),
                    flkties     = [],
                    filterCtrls = [].slice.call(document.querySelectorAll('.filter > button')),
                    iso;

                function initFlickity () {
                    sliders.forEach(function (slider) {
                        var flkty;

                        $(slider).removeClass('is-loading');

                        flkty = new Flickity(slider, {
                            prevNextButtons : true,
                            wrapAround      : true,
                            cellAlign       : 'left',
                            contain         : true,
                            resize          : false,
                            imagesLoaded    : true
                        });

                        flkties.push(flkty);
                    });
                }

                function initIsotope () {
                    iso = $('.grid').isotope({
                        isResizeBound   : false,
                        itemSelector    : '.grid__item',
                        percentPosition : true,
                        masonry         : {
                            columnWidth : '.grid__sizer'
                        },
                        transitionDuration : '0.35s'
                    });
                }

                function recalcFlickities () {
                    var len,
                        i;

                    for (i = 0, len = flkties.length; i < len; ++i) {
                        flkties[i].resize();
                    }
                }

                function initEvents () {
                    filterCtrls.forEach(function (filterCtrl) {
                        filterCtrl.addEventListener('click', function () {
                            $(filterCtrl).parent().find('.filter__item--selected').removeClass('filter__item--selected');
                            $(filterCtrl).addClass('filter__item--selected');

                            iso.isotope({
                                filter : filterCtrl.getAttribute('data-filter')
                            });

                            recalcFlickities();
                            iso.isotope('layout');
                        });
                    });

                    sliders.forEach(function (slider) {
                        $(slider).on('staticClick.flickity', function () {
                            var $images = $(this).find('.high-resolution');

                            $(this).lightGallery({
                                thumbnail          : false,
                                animateThumb       : true,
                                showThumbByDefault : false,
                                download           : false,
                                dynamic            : true,
                                dynamicEl          : $images
                            });
                        });
                    });

                    window.addEventListener('resize', _.throttle(function () {
                        recalcFlickities();
                        iso.isotope('layout');
                    }, 50));
                }

                function init () {
                    initIsotope();

                    iso.imagesLoaded().progress(function () {
                        iso.isotope('layout');
                        initFlickity();
                    });

                    iso.imagesLoaded(function () {
                        initEvents();
                    });
                }

                scope.$watch('products', function (newValue) {
                    if (newValue && newValue.length) {
                        $timeout(function () {
                            sliders     = [].slice.call($('.slider'));
                            flkties     = [];
                            filterCtrls = [].slice.call(document.querySelectorAll('.filter > button'));

                            init();
                        }, 0);
                    }
                });
            }
        };
    }

    dependencies.push(ShopGrid);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-flexbox-cssanimations-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.flexbox=function(){return F("flexWrap")},q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.cssanimations=function(){return F("animationName")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;(function ShopServiceeWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'ShopService',
        dependencies = [];

    function ShopService () {
        var factory = {},

            products   = [],
            categories = [],

            callInPlace = true;

        /*
        function formatProducts (rawProducts) {
            return _.map(rawProducts, function (rawProduct) {
                rawProduct.qty      = parseInt(rawProduct.qty, 10);
                rawProduct.price    = parseInt(rawProduct.price, 10);
                rawProduct.priceEur = parseInt(rawProduct.priceEur, 10);
                rawProduct.isFree   = rawProduct.price === 0;
                rawProduct.category = _.reduce(_.toArray(rawProduct.subCategories), function (result, category) {
                    result.push(_.kebabCase(category.subcategoryName.toLowerCase()));

                    return result;
                }, []);
                rawProduct.images = _.sortBy(rawProduct.images, function (image) {
                    return parseInt(image.position, 10);
                });

                rawProduct.hasOptions = function () {
                    return !!rawProduct.options && !_.isEmpty(rawProduct.options);
                };

                if (rawProduct.hasOptions()) {
                    rawProduct.selectedOption = _.first(_.toArray(rawProduct.options)).optionId;
                }

                rawProduct.options = _.toArray(rawProduct.options);

                rawProduct.categorySelector = rawProduct.category.join(' ');

                return rawProduct;
            });
        }
        */

        function retrieveProductsCategories () {
            if (products.length && !categories.length) {
                categories = _.reduce(products, function (result, product) {
                    result.push(product.category);

                    return result;
                }, []);

                categories = _.uniq(_.flatten(categories));
                categories = _.map(categories, function (category) {
                    return {
                        name   : _.capitalize(category),
                        filter : '.' + _.kebabCase(category)
                    };
                });

                categories.unshift({
                    name   : 'All',
                    filter : '*'
                });

                return categories;
            } else if (products.length && categories.length) {
                return categories;
            }

            return [];
        }

        factory.get = function () {
            callInPlace = true;
            products    = [];
            categories  = [];

            /*
            Product.get().then(function success (response) {
                products    = formatProducts(response);
                categories  = retrieveProductsCategories();
                callInPlace = false;
            });
            */

            callInPlace = false;
        };

        factory.getProducts = function () {
            return products;
        };

        factory.getCategories = function () {
            return categories;
        };

        factory.shouldDisplayCategories = function () {
            return retrieveProductsCategories().length > 0;
        };

        factory.shouldDisplayNoProducts = function () {
            return !callInPlace && products.length === 0;
        };

        return factory;
    }

    dependencies.push(ShopService);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function StoriesStatesWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        dependencies = ['$stateProvider'];

    function StoriesStates ($stateProvider) {
        var states = {},

            STATES     = module.constants.STATES,
            VIEWS_PATH = module.constants.PATH.VIEWS,

            UI_VIEW_PUBLIC = module.constants.UI_VIEWS.PUBLIC;

        states.stories = {
            url   : '/journal',
            views : {},
            data  : {
                name        : [STATES.APPLICATION.PUBLIC, STATES.STORIES.ROOT].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Electric Journal',
                description : 'Booming sounds, happy people, wonderful surroundings.',
                keywords    : 'electric castle, stories, electric story',
                image       : 'https://electriccastle.ro/assets/img/meta/newsroom.jpg',
                hasQueue    : false
            }
        };

        states.storiesArticle = {
            url     : '/journal/:articleId/:articleTitle',
            views   : {},
            resolve : {
                StoriesItem : ['$q', '$stateParams', 'StoriesService', function ($q, $stateParams, StoriesService) {
                    var deferred  = $q.defer(),
                        articleId = $stateParams.articleId;

                    StoriesService.fetchItem(articleId).then(function (item) {
                        states.storiesArticle.data.image       = item.headerImage;
                        states.storiesArticle.data.pageTitle   = 'EC Journal: ' + item.title;
                        states.storiesArticle.data.description = item.subtitle;

                        deferred.resolve({
                            data : item
                        });
                    });

                    return deferred.promise;
                }]
            },
            data : {
                name        : [STATES.APPLICATION.PUBLIC, STATES.STORIES.ARTICLE].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                description : 'Booming sounds, happy people, wonderful surroundings.',
                keywords    : 'electric castle, stories, electric story',
                image       : 'https://electriccastle.ro/assets/img/meta/newsroom.jpg',
                hasQueue    : false
            }
        };

        states.stories.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'stories/stories.tpl.html',
            controller  : 'StoriesController as stc'
        };

        states.storiesArticle.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'stories/stories-article.tpl.html',
            controller  : 'StoriesArticleController as stac'
        };

        _.forEach(states, function (state) {
            if (!state.data.isDisabled) {
                $stateProvider.state(state.data.name, state);
            }
        });
    }

    dependencies.push(StoriesStates);

    module.config(dependencies);
}(angular, MODULES));
;(function StoriesArticleControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'StoriesArticleController',
        dependencies   = ['$sce', '$location', 'StoriesService', 'StoriesItem'];

    function StoriesArticleController ($sce, $location, StoriesService, StoriesItem) {
        var self      = this;

        self.newsItem = StoriesItem.data;

        self.shouldDisplayNoRelatedNews = StoriesService.shouldDisplayNoRelatedNews;
        self.shouldDisplayNoNewsItem    = StoriesService.shouldDisplayNoNewsItem;

        self.shareUrl = $location.absUrl();

        self.trustHtml = function (html) {
            return $sce.trustAsHtml(html);
        };
    }

    dependencies.push(StoriesArticleController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function StoriesControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'StoriesController',
        dependencies   = ['StoriesService'];

    function StoriesController (StoriesService) {
        var self = this;

        StoriesService.fetchAll();

        self.getNews = StoriesService.getAll;
    }

    dependencies.push(StoriesController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function JournalGridWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'journalGrid',
        dependencies  = ['$timeout'];

    function JournalGrid ($timeout) {
        return {
            restrict : 'EA',
            scope    : {
                articles : '=journalGrid'
            },
            link : function (scope) {
                var filterCtrls = document.querySelectorAll('.filter > button'),
                    iso;

                function initIsotope () {
                    var config = {
                        isResizeBound   : false,
                        itemSelector    : '.grid__item',
                        percentPosition : true,
                        masonry         : {
                            columnWidth : '.grid__sizer'
                        },
                        transitionDuration : '0.6s'
                    };

                    iso = $('.grid').isotope(config);
                }

                function initEvents () {
                    filterCtrls.forEach(function (filterCtrl) {
                        filterCtrl.addEventListener('click', function () {
                            $(filterCtrl).parent().find('.filter__item--selected').removeClass('filter__item--selected');
                            $(filterCtrl).addClass('filter__item--selected');

                            iso.isotope({
                                filter : filterCtrl.getAttribute('data-filter')
                            });

                            iso.isotope('layout');
                        });
                    });

                    window.addEventListener('resize', _.throttle(function () {
                        if ($('.grid').data('isotope')) {
                            iso.isotope('layout');
                        }
                    }, 50));
                }

                function init () {
                    initIsotope();

                    iso.imagesLoaded().progress(function () {
                        iso.isotope('layout');
                    });

                    iso.imagesLoaded(function () {
                        initEvents();
                    });
                }

                scope.$watch('articles', function (newValue) {
                    if (newValue && newValue.length) {
                        $timeout(function () {
                            filterCtrls = document.querySelectorAll('.filter > button');

                            init();
                        }, 0);
                    }
                });
            }
        };
    }

    dependencies.push(JournalGrid);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function StoriesServiceWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'StoriesService',
        dependencies = ['$q', 'Story'];

    function StoriesService ($q, News) {
        var factory  = {},
            news     = [],
            newsItem = {},

            callInPlace = true;

        factory.fetchAll = function () {
            var deferred  = $q.defer();

            callInPlace = true;
            news        = [];

            News.getAll().then(function success (response) {
                news = _.map(response.data.news, function (item) {
                    return _.extend({}, item, {
                        formattedTitle : factory.formatTitleForUrl(item.title)
                    });
                });

                callInPlace = false;

                deferred.resolve(response.data);
            });

            return deferred.promise;
        };

        factory.fetchItem = function (id) {
            var deferred = $q.defer();

            callInPlace = true;

            News.get(id).then(function success (response) {
                if (response.data.title) {
                    response.data.formattedTitle = factory.formatTitleForUrl(response.data.title);

                    newsItem = response.data;

                    newsItem.related =  _.map(response.data.related, function (item) {
                        return _.extend({}, item, {
                            formattedTitle : factory.formatTitleForUrl(item.title)
                        });
                    });
                }

                callInPlace = false;

                deferred.resolve(response.data);
            });

            return deferred.promise;
        };

        factory.getAll = function () {
            return news;
        };

        factory.getItem = function () {
            return newsItem;
        };

        factory.shouldDisplayNoNews = function () {
            return !callInPlace && news.length === 0;
        };

        factory.shouldDisplayNoNewsItem = function () {
            return !callInPlace && Object.keys(newsItem).length === 0;
        };

        factory.shouldDisplayNoRelatedNews = function () {
            return !callInPlace && !newsItem.related.length;
        };

        factory.formatTitleForUrl = function (title) {
            return _.escapeRegExp(_.lowerCase(title).replace(/ /g, '-'));
        };

        return factory;
    }

    dependencies.push(StoriesService);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function AuthConstantWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        constantName = 'TICKET_CONST',
        TICKET_CONST = {};

    TICKET_CONST.COOKIE = {
        BASKET : 'BASKET'
    };

    TICKET_CONST.INFO_BAR = {
        MESSAGES : {
            NOTHING_SELECTED    : 'NOTHING_SELECTED',
            TICKET_SELECTED     : 'TICKET_SELECTED',
            SELECT_CAMPING      : 'SELECT_CAMPING',
            FINALIZE            : 'FINALIZE',
            NO_TICKET_SELECTED  : 'NO_TICKET_SELECTED',
            NO_CAMPING_SELECTED : 'NO_CAMPING_SELECTED',
            ERROR               : 'ERROR'
        }
    };

    TICKET_CONST.PATHS = {
        BEGINNING : {
            NAME : 'BEGINNING',
            NO   : 1
        },
        TICKETS : {
            NAME : 'TICKETS',
            NO   : 2
        },
        CAMPING : {
            NAME : 'CAMPING',
            NO   : 3
        },
        CAMPING_OPTIONS : {
            NAME : 'CAMPING_OPTIONS',
            NO   : 4
        }
    };

    TICKET_CONST.ANIMATION = {
        DURATION : 350,
        SCROLL   : 500
    };

    TICKET_CONST.RATES = {
        EUR : 4.5
    };

    _.assign(module.constants, {
        TICKET : TICKET_CONST
    });

    module.constant(constantName, TICKET_CONST);
}(angular, MODULES));
;(function StatesManagerWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        dependencies = ['$stateProvider'];

    function StatesManager ($stateProvider) {
        var states = {},

            SN         = module.constants.STATES,
            VIEWS_PATH = module.constants.PATH.VIEWS,

            UI_VIEW_PUBLIC = module.constants.UI_VIEWS.PUBLIC;

        states.tickets = {
            url   : '/tickets',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.TICKETS_REDESIGN.BUY].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Buy tickets & accommodation',
                description : 'Tickets, accommodation, camping and special offers from Electric Castle Festival.',
                keywords    : 'tickets, festival access, camping, vip, packages, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/6.jpg',
                hasQueue    : true
            }
        };

        states.noSiteTickets = {
            url   : '/tickets',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.TICKETS].join('.'),
                isDisabled  : true,
                isPrivate   : false,
                pageTitle   : 'Buy tickets & accommodation',
                description : 'Tickets, accommodation, camping and special offers from Electric Castle Festival.',
                keywords    : 'tickets, festival access, camping, vip, packages, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/6.jpg',
                hasQueue    : false
            }
        };

        states.fromAbroad = {
            url   : '/from-abroad',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.FROM_ABROAD].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'From Abroad',
                description : 'Electric Castle has partnered with Festicket to offer you a wide range of Tickets & Accommodation Packages tailored specifically for our 2016 edition.',
                keywords    : 'tickets, festival access, camping, vip, packages, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/1.jpg',
                hasQueue    : false
            }
        };

        states.ticketsInfo = {
            url   : '/tickets-info',
            views : {},
            data  : {
                name        : [SN.APPLICATION.PUBLIC, SN.TICKETS_INFO].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'How to buy tickets',
                description : 'Electric Castle has partnered with Festicket to offer you a wide range of Tickets & Accommodation Packages tailored specifically for our 2016 edition.',
                keywords    : 'tickets, festival access, camping, vip, packages, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/1.jpg',
                hasQueue    : false
            }
        };

        states.basket = {
            url     : '/basket',
            views   : {},
            resolve : {
                BasketData : ['BasketService', function (BasketService) {
                    return BasketService.get();
                }]
            },
            data : {
                name        : [SN.APPLICATION.PUBLIC, SN.BASKET].join('.'),
                isDisabled  : false,
                isPrivate   : false,
                pageTitle   : 'Basket',
                description : 'Your tickets and products from Electric Castle Festival.',
                keywords    : 'tickets, products, offers, basket, festival access, camping, vip, packages, electric castle, festival cluj, festival romania, music festival romania, festival 2017',
                image       : 'https://electriccastle.ro/assets/img/meta/6.jpg',
                hasQueue    : false
            }
        };

        if (location.hostname.indexOf('uk') === -1) {
            states.tickets.views[UI_VIEW_PUBLIC] = {
                templateUrl : VIEWS_PATH + 'tickets/tickets-redesign.tpl.html',
                controller  : 'TicketsRedesignController as trc'
            };

            states.ticketsInfo.views[UI_VIEW_PUBLIC] = {
                templateUrl : VIEWS_PATH + 'tickets/tickets-info.tpl.html',
                controller  : 'TicketsInfoController as tic'
            };
        } else {
            states.tickets.views[UI_VIEW_PUBLIC] = {
                templateUrl : VIEWS_PATH + 'tickets/from-abroad.tpl.html'
            };

            states.ticketsInfo.views[UI_VIEW_PUBLIC] = {
                templateUrl : VIEWS_PATH + 'tickets/from-abroad.tpl.html'
            };
        }

        states.noSiteTickets.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'tickets/no-more-tickets-on-site.tpl.html'
        };

        states.fromAbroad.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'tickets/from-abroad.tpl.html'
        };

        states.basket.views[UI_VIEW_PUBLIC] = {
            templateUrl : VIEWS_PATH + 'tickets/basket.tpl.html',
            controller  : 'BasketController as bc'
        };

        _.forEach(states, function (state) {
            if (!state.data.isDisabled) {
                $stateProvider.state(state.data.name, state);
            }
        });
    }

    dependencies.push(StatesManager);

    module.config(dependencies);
}(angular, MODULES));
;(function BasketControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'BasketController',
        dependencies   = ['$injector', '$scope', 'BasketData'];

    function BasketController ($injector, $scope, BasketData) {
        var self = this,

            BasketService        = $injector.get('BasketService'),
            BootBoxService       = $injector.get('BootBoxService'),
            DataShare            = $injector.get('DataShare'),
            TranslationFactory   = $injector.get('TranslationFactory'),
            PubSub               = $injector.get('PublisherSubscriber'),
            StateUtil            = $injector.get('StateUtil'),
            HeaderAccountService = $injector.get('HeaderAccountService'),
            MyAccountService     = $injector.get('MyAccountService'),
            $log                 = $injector.get('$log'),
            $timeout             = $injector.get('$timeout'),

            $logger = $log.getInstance(controllerName),

            previousError   = DataShare.addToCartError(),
            errorTimeout    = null,
            onErrorsSubs    = null,
            onAddFromCookie = null,
            finalMessage    = '',
            salelinkCode    = StateUtil.retrieveQueryParam('discount'),

            TIMEOUT_INTERVAL = module.constants.TIME.ERROR_TIMEOUT,
            EVENTS           = module.constants.APP_EVENTS,
            STATES           = module.constants.STATES;

        $logger.debug(BasketData);

        self.model = [];

        self.flags = {
            termsPaymentAccepted     : false,
            termsInstallmentAccepted : false
        };

        self.shouldDisplayNoProducts       = BasketService.shouldDisplayNoProducts;
        self.shouldDisplaySubTotals        = BasketService.shouldDisplaySubTotals;
        self.shouldDisplayTotalsMessage    = BasketService.shouldDisplayTotalsMessage;
        self.shouldDisplayTotalItem        = BasketService.shouldDisplayTotalItem;
        self.shouldDisplayDiscountItem     = BasketService.shouldDisplayDiscountItem;
        self.shouldDisplayCouponOptionItem = BasketService.shouldDisplayCouponOptionItem;
        self.isRecurring                   = BasketService.isRecurring;
        self.retrieveBasketTotals          = BasketService.retrieveBasketTotals;
        self.products                      = BasketService.getProducts();

        DataShare.addToCartError({
            isVisible : false,
            message   : ''
        });

        self.flags = {
            showError : false,
            error     : '',

            isCheckoutButtonDisabled : false
        };

        function onError () {
            $timeout.cancel(errorTimeout);

            errorTimeout = $timeout(function () {
                self.flags.showError = false;
                self.flags.error     = '';
            }, TIMEOUT_INTERVAL);
        }

        function highlightItems (items) {
            _.mapValues(self.products, function (value, key) {
                value.error = false;

                if (items.indexOf(key) >= 0) {
                    value.error = true;
                }

                return value;
            });
        }

        if (previousError.isVisible) {
            finalMessage = previousError.message;

            if (previousError.appendExtra) {
                finalMessage += ' ' + TranslationFactory.get('BASKET.ERROR.QUANTITY_EXCEEDED');
            }

            self.flags.showError = true;
            self.flags.error     = finalMessage;

            onError();
        }

        self.onQuantityChanged = function () {
            self.flags.showError = false;
            self.flags.error     = '';

            BasketService.retrieveBasketTotals(self.model);
            BasketService.updateBasket(self.products).then(function (response) {
                if (!response.success) {
                    self.flags.showError = true;
                    self.flags.error     = response.error + ' ' + TranslationFactory.get('BASKET.ERROR.QUANTITY_EXCEEDED');

                    onError();
                } else {
                    HeaderAccountService.setHeaderCartQty(BasketService.getNumberOfProducts());

                    self.products = BasketService.getProducts();
                }
            });
        };

        self.removeProduct = function (itemId) {
            var callbacks = {
                confirm : function () {
                    BasketService.removeFromBasket(itemId).then(function (response) {
                        if (response.success) {
                            self.model    = response.data.products;
                            self.products = BasketService.getProducts();

                            HeaderAccountService.setHeaderCartQty(BasketService.getNumberOfProducts());
                        }
                    });
                }
            };

            BootBoxService.removeFromBasket(callbacks);
        };

        self.setRecurring = function (isRecurring) {
            BasketService.setRecurring(isRecurring).then(function (response) {
                if (response.success) {
                    self.model    = response.data.products;
                    self.products = BasketService.getProducts();
                } else {
                    self.flags.showError = true;
                    self.flags.error     = response.error;

                    onError();
                }
            });
        };

        self.checkout = function (isRecurring) {
            var isLoggedIn = DataShare.isLoggedIn(),
                params     = {
                    type : EVENTS.MODAL.TYPES.LOGIN
                };

            if (!isLoggedIn) {
                PubSub.publish(EVENTS.MODAL.OPEN, params);
            } else {
                self.flags.isCheckoutButtonDisabled = true;

                BasketService.addToBasket({entityId : 1}).then(function (response) {
                    if (response.success) {
                        BasketService.checkout(isRecurring, salelinkCode).then(function (resp) {
                            if (!resp.success) {
                                self.flags.isCheckoutButtonDisabled = false;

                                self.flags.showError = true;
                                self.flags.error     = resp.error;

                                onError();

                                if (_.values(resp.data.notAllowed).length) {
                                    highlightItems(_.values(resp.data.notAllowed));
                                }
                            }

                            if (resp.redirectToOrders) {
                                StateUtil.go([STATES.MY_ACCOUNT.ROOT, STATES.MY_ACCOUNT.ORDERS].join('.'));
                                HeaderAccountService.setHeaderCartQty(BasketService.getNumberOfProducts());
                            }
                        });
                    } else {
                        self.flags.showError = true;
                        self.flags.error     = response.error;

                        onError();
                    }
                });
            }
        };

        self.openRedeemCard = function () {
            PubSub.publish(EVENTS.MODAL.OPEN, {
                type : EVENTS.MODAL.TYPES.REDEEM_CARD
            });
        };

        self.removeCoupon = function () {
            MyAccountService.redeemCoupon('=delete').then(function (data) {
                if (data.success) {
                    BasketService.get();
                }
            });
        };

        self.getNumberOfProducts = function () {
            return BasketService.getNumberOfProducts();
        };

        onErrorsSubs = PubSub.subscribe(EVENTS.BASKET.ERROR, function () {
            self.flags.showError = true;
            self.flags.error     = DataShare.addToCartError().message + ' ' + TranslationFactory.get('BASKET.ERROR.QUANTITY_EXCEEDED');

            DataShare.addToCartError({
                isVisible : false,
                message   : ''
            });

            onError();
        });

        onAddFromCookie = PubSub.subscribe(EVENTS.BASKET.ADD_FROM_COOKIE, function () {
            self.products = BasketService.getProducts();
        });

        $scope.$on('$destroy', function () {
            onErrorsSubs.remove();
            onAddFromCookie.remove();
        });
    }

    dependencies.push(BasketController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function TicketsControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'TicketsController',
        dependencies   = ['$log', '$injector', '$location'];

    function TicketsController ($log, $injector, $location) {
        var self    = this,
            $logger = $log.getInstance(controllerName),

            EVENTS = module.constants.APP_EVENTS,
            STATES = module.constants.STATES,

            PubSub               = $injector.get('PublisherSubscriber'),
            DataShare            = $injector.get('DataShare'),
            BasketService        = $injector.get('BasketService'),
            StateUtil            = $injector.get('StateUtil'),
            HeaderAccountService = $injector.get('HeaderAccountService'),
            TicketsService       = $injector.get('TicketsService');

        self.info    = {
            getProducts   : TicketsService.getProducts,
            getTotalPrice : TicketsService.getTotalPrice,
            hasTickets    : TicketsService.hasSelectedATicket
        };

        self.flags = {
            noCamping           : false,
            hasSelectedCamping  : TicketsService.hasSelectedCamping(),
            hasConcurrencyError : false
        };

        TicketsService.getAllTickets().then(function (response) {
            self.tickets = TicketsService.buildTicketGroupContent(response);
            self.flags.hasConcurrencyError = response.concurrencyError;
        });

        self.noHeader = !!$location.search().noHeader;

        $logger.debug(self.tickets);

        self.onProductAdded = function (item) {
            $logger.debug(item);

            TicketsService.onProductAdded(item);

            self.flags.hasSelectedCamping = TicketsService.hasSelectedCamping();
        };

        self.toggleCollapse = function (ticket) {
            if (!ticket.isComingSoon) {
                ticket.isCollapsed = !ticket.isCollapsed;
            }
        };

        self.shouldNestHardCopyMessage = function ($index) {
            return $index === 0;
        };

        self.openPartnerLocations = function () {
            PubSub.publish(EVENTS.MODAL.OPEN, {
                type : EVENTS.MODAL.TYPES.PARTNER_LOCATIONS
            });
        };

        self.finalizeShopping = function () {
            var hasTicketSelected  = TicketsService.hasSelectedATicket(),
                hasAddOnSelected   = TicketsService.hasSelectedCampingAddOn();

            if (!hasTicketSelected && !hasAddOnSelected) {
                PubSub.publish(EVENTS.TICKETS.NO_TICKET_SELECTED);
            } else {
                BasketService.addToBasket(TicketsService.retrieveProducts()).then(function (response) {
                    $logger.debug(response);

                    TicketsService.resetProducts();
                    StateUtil.go(STATES.BASKET);

                    if (response.error) {
                        DataShare.addToCartError({
                            isVisible   : true,
                            message     : response.error,
                            appendExtra : response.appendExtra
                        });
                    } else {
                        HeaderAccountService.setHeaderCartQty(BasketService.getNumberOfProducts());
                    }
                });
            }
        };
    }

    dependencies.push(TicketsController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function TicketsInfoControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'TicketsInfoController',
        dependencies   = ['$injector'];

    function TicketsInfoController ($injector) {
        var self   = this,
            EVENTS = module.constants.APP_EVENTS,
            PubSub = $injector.get('PublisherSubscriber');

        self.openPartnerLocations = function () {
            PubSub.publish(EVENTS.MODAL.OPEN, {
                type : EVENTS.MODAL.TYPES.PARTNER_LOCATIONS
            });
        };
    }

    dependencies.push(TicketsInfoController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function TicketsRedesignControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'TicketsRedesignController',
        dependencies   = ['$injector', '$log', '$location'];

    function TicketsRedesignController ($injector) {
        var self   = this,
            EVENTS = module.constants.APP_EVENTS,

            PubSub                 = $injector.get('PublisherSubscriber'),
            BasketService          = $injector.get('BasketService'),
            TicketsRedesignService = $injector.get('TicketsRedesignService');

        TicketsRedesignService.fetch();
        BasketService.get();

        self.cb = {
            get : TicketsRedesignService.get,

            onProductAdded : TicketsRedesignService.onProductAdded,
            getTotalPrice  : BasketService.retrieveBasketTotals,
            getProducts    : TicketsRedesignService.getProducts,
            finalize       : TicketsRedesignService.finalize,
            noTickets      : TicketsRedesignService.noTickets,

            canFinalize : function () {
                return parseFloat(BasketService.retrieveBasketTotals().total);
            },

            openPartnerLocations : function () {
                PubSub.publish(EVENTS.MODAL.OPEN, {
                    type : EVENTS.MODAL.TYPES.PARTNER_LOCATIONS
                });
            }
        };
    }

    dependencies.push(TicketsRedesignController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function TicketsV2ControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'TicketsV2Controller',
        dependencies   = ['$injector', '$scope', 'Tickets'];

    function TicketsV2Controller ($injector, $scope, Tickets) {
        var self             = this,
            shortTitleLength = 10,

            TicketsService       = $injector.get('TicketsService'),
            PubSub               = $injector.get('PublisherSubscriber'),
            StringUtil           = $injector.get('StringUtil'),
            StateUtil            = $injector.get('StateUtil'),
            DataShare            = $injector.get('DataShare'),
            HeaderAccountService = $injector.get('HeaderAccountService'),
            BasketService        = $injector.get('BasketService'),

            STATES = module.constants.STATES,
            EVENTS = module.constants.APP_EVENTS,
            PATHS  = module.constants.TICKET.PATHS,

            onValidateAndAddToCartRequestedSubscription,
            onAddToCartRequestedSubscription;

        TicketsService.buildTicketGroupContent(Tickets.data);
        TicketsService.startOver();
        TicketsService.resetProducts();

        function openPartnerLocations () {
            PubSub.publish(EVENTS.MODAL.OPEN, {
                type : EVENTS.MODAL.TYPES.PARTNER_LOCATIONS
            });
        }

        function isShortTitle (ticketTitle) {
            return StringUtil.isShorterThan(ticketTitle, shortTitleLength);
        }

        function addToCart () {
            BasketService.addToBasket(TicketsService.retrieveProducts()).then(function (response) {
                TicketsService.resetProducts();
                StateUtil.go(STATES.BASKET);

                if (response.error) {
                    DataShare.addToCartError({
                        isVisible   : true,
                        message     : response.error,
                        appendExtra : response.appendExtra
                    });
                } else {
                    HeaderAccountService.setHeaderCartQty(BasketService.getNumberOfProducts());
                }
            });
        }

        function goToCampingOptions () {
            PubSub.publish(EVENTS.TICKETS.PATH_CHOSEN, PATHS.CAMPING_OPTIONS.NAME);
        }

        function validateAndAddToCart () {
            if (TicketsService.canFinalize()) {
                addToCart();
            }
        }

        self.PATH           = module.constants.TICKET.PATHS;
        self.tickets        = TicketsService.retrieveTickets();
        self.camping        = TicketsService.retrieveCamping();
        self.campingOptions = TicketsService.retrieveCampingOptions();
        self.productStates  = module.constants.PRODUCT_STATES;

        self.cb = {
            onProductAdded     : TicketsService.onProductAdded,
            addToCart          : validateAndAddToCart,
            goToCampingOptions : goToCampingOptions,

            openPartnerLocations : openPartnerLocations,
            isShortTitle         : isShortTitle,

            revealItems      : TicketsService.revealItems,
            getVisibility    : TicketsService.getVisibility,
            thereAreProducts : TicketsService.thereAreProducts
        };

        onAddToCartRequestedSubscription            = PubSub.subscribe(EVENTS.TICKETS.ADD_TO_CART, addToCart);
        onValidateAndAddToCartRequestedSubscription = PubSub.subscribe(EVENTS.TICKETS.VALIDATE_AND_ADD_TO_CART, validateAndAddToCart);

        $scope.$on('$destroy', function () {
            onAddToCartRequestedSubscription.remove();
            onValidateAndAddToCartRequestedSubscription.remove();
        });
    }

    dependencies.push(TicketsV2Controller);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function CampingConfirmationWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'campingConfirmation',
        dependencies  = ['PublisherSubscriber', 'TicketsService'];

    function CampingConfirmation (PubSub, TicketsService) {
        var VIEWS_PATH = module.constants.PATH.VIEWS,
            EVENTS     = module.constants.APP_EVENTS;

        return {
            restrict         : 'EA',
            replace          : true,
            templateUrl      : VIEWS_PATH + 'tickets/camping-confirmation.tpl.html',
            controller       : 'CampingConfirmationController',
            controllerAs     : 'ccc',
            bindToController : true,
            link             : function (scope, element) {
                var VISIBILITY_CSS_CLASS = 'is-visible',

                    openConfirmationSubscription,
                    closeConfirmationSubscription;

                function onCloseConfirmationRequested () {
                    $(element).removeClass(VISIBILITY_CSS_CLASS);
                }

                function onOpenConfirmationRequested () {
                    $(element).addClass(VISIBILITY_CSS_CLASS);

                    scope.campingOptions = TicketsService.retrieveCampingOptions();
                }

                closeConfirmationSubscription = PubSub.subscribe(EVENTS.TICKETS.CLOSE_CONFIRMATION, onCloseConfirmationRequested);
                openConfirmationSubscription  = PubSub.subscribe(EVENTS.TICKETS.OPEN_CONFIRMATION, onOpenConfirmationRequested);

                scope.$on('$destroy', function () {
                    closeConfirmationSubscription.remove();
                    openConfirmationSubscription.remove();
                });
            }
        };
    }

    dependencies.push(CampingConfirmation);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function CampingConfirmationControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'CampingConfirmationController',
        dependencies   = ['$timeout', 'PublisherSubscriber'];

    function CampingConfirmationController ($timeout, PubSub) {
        var self = this,

            EVENTS    = module.constants.APP_EVENTS,
            ANIMATION = module.constants.TICKET.ANIMATION;

        function goToCamping () {
            PubSub.publish(EVENTS.TICKETS.CLOSE_CONFIRMATION);
            PubSub.publish(EVENTS.TICKETS.CLOSE_TICKETS_CART);

            $timeout(function () {
                PubSub.publish(EVENTS.TICKETS.GO_TO_CAMPING);
            }, ANIMATION.DURATION);
        }

        function finalize () {
            PubSub.publish(EVENTS.TICKETS.CLOSE_CONFIRMATION);

            $timeout(function () {
                PubSub.publish(EVENTS.TICKETS.ADD_TO_CART);
            }, ANIMATION.DURATION);
        }

        self.cb = {
            goToCamping : goToCamping,
            finalize    : finalize
        };
    }

    dependencies.push(CampingConfirmationController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function ComingSoonWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'comingSoon',
        dependencies  = ['StringUtil'];

    function ComingSoon (StringUtil) {
        return {
            restrict : 'EA',
            replace  : true,
            scope    : {
                description : '=comingSoon'
            },
            link : function (scope, element) {
                var template = '{comingSoonTranslation} - {comingSoonDate}',
                    html     = StringUtil.supplant(template, {
                        comingSoonTranslation : module.TRANSLATIONS.en.TICKETS.COMING_SOON,
                        comingSoonDate        : $(scope.description).find('[data-js="coming-soon-date"]').text()
                    });

                $(element).html(html);
            }
        };
    }

    dependencies.push(ComingSoon);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function NoCampingWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'noCamping',
        dependencies  = ['$timeout', 'PublisherSubscriber'];

    function NoCamping ($timeout, PubSub) {
        var VIEWS_PATH = module.constants.PATH.VIEWS,
            EVENTS     = module.constants.APP_EVENTS;

        return {
            restrict         : 'EA',
            replace          : true,
            templateUrl      : VIEWS_PATH + 'tickets/no-camping.tpl.html',
            controller       : 'NoCampingController',
            controllerAs     : 'ncc',
            bindToController : true,
            link             : function (scope, element) {
                var VISIBILITY_CSS_CLASS = 'is-visible',

                    openConfirmationSubscription,
                    closeConfirmationSubscription;

                function onCloseConfirmationRequested () {
                    $(element).removeClass(VISIBILITY_CSS_CLASS);
                }

                function onOpenConfirmationRequested () {
                    $(element).addClass(VISIBILITY_CSS_CLASS);
                }

                closeConfirmationSubscription = PubSub.subscribe(EVENTS.TICKETS.CLOSE_NO_CAMPING, onCloseConfirmationRequested);
                openConfirmationSubscription  = PubSub.subscribe(EVENTS.TICKETS.OPEN_NO_CAMPING, onOpenConfirmationRequested);

                scope.$on('$destroy', function () {
                    closeConfirmationSubscription.remove();
                    openConfirmationSubscription.remove();
                });
            }
        };
    }

    dependencies.push(NoCamping);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function NoCampingControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'NoCampingController',
        dependencies   = ['$timeout', 'PublisherSubscriber'];

    function NoCampingController ($timeout, PubSub) {
        var self = this,

            EVENTS    = module.constants.APP_EVENTS,
            ANIMATION = module.constants.TICKET.ANIMATION;

        function goToCamping () {
            PubSub.publish(EVENTS.TICKETS.CLOSE_NO_CAMPING);
            PubSub.publish(EVENTS.TICKETS.CLOSE_TICKETS_CART);

            $timeout(function () {
                PubSub.publish(EVENTS.TICKETS.GO_TO_CAMPING);
            }, ANIMATION.DURATION);
        }

        function finalize () {
            PubSub.publish(EVENTS.TICKETS.CLOSE_NO_CAMPING);

            $timeout(function () {
                PubSub.publish(EVENTS.TICKETS.ADD_TO_CART);
            }, ANIMATION.DURATION);
        }

        self.cb = {
            goToCamping : goToCamping,
            finalize    : finalize
        };
    }

    dependencies.push(NoCampingController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function TicketsCartWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'ticketsCart',
        dependencies  = ['$timeout', 'TicketsService', 'PublisherSubscriber'];

    function TicketsCart ($timeout, TicketsService, PubSub) {
        var VIEWS_PATH = module.constants.PATH.VIEWS,
            EVENTS     = module.constants.APP_EVENTS;

        return {
            restrict         : 'EA',
            replace          : true,
            templateUrl      : VIEWS_PATH + 'tickets/tickets-cart.tpl.html',
            controller       : 'TicketsCartController',
            controllerAs     : 'tcc',
            bindToController : true,
            link             : function (scope) {
                var isMobile = $.browser.mobile;

                scope.requestToOpen            = false;
                scope.isUserCartTriggerVisible = false;
                scope.pulsating                = false;

                scope.shouldBeVisible = function () {
                    return scope.requestToOpen && TicketsService.thereAreProducts();
                };

                scope.isCartVisible = isMobile ? scope.shouldBeVisible : TicketsService.thereAreProducts;

                scope.closeModal = function () {
                    scope.requestToOpen = false;
                };

                scope.openTicketsCart = function () {
                    scope.requestToOpen = true;
                };

                PubSub.subscribe(EVENTS.TICKETS.CLOSE_TICKETS_CART, scope.closeModal);
            }
        };
    }

    dependencies.push(TicketsCart);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function TicketsCartControllerWrap (ng, MODULES) {
    'use strict';

    var module         = ng.module(MODULES.APPLICATION.NAME),
        controllerName = 'TicketsCartController',
        dependencies   = ['$injector', '$timeout'];

    function TicketsCartController ($injector, $timeout) {
        var self = this,

            TicketsService = $injector.get('TicketsService'),
            PubSub         = $injector.get('PublisherSubscriber'),

            PATHS     = module.constants.TICKET.PATHS,
            ANIMATION = module.constants.TICKET.ANIMATION,
            EVENTS    = module.constants.APP_EVENTS;

        function addToCart () {
            PubSub.publish(EVENTS.TICKETS.VALIDATE_AND_ADD_TO_CART);
        }

        function startOver () {
            PubSub.publish(EVENTS.TICKETS.PATH_CHOSEN, PATHS.BEGINNING.NAME);

            $timeout(function () {
                TicketsService.startOver();
                TicketsService.resetProducts();
            }, ANIMATION.SCROLL);
        }

        self.cb = {
            getTotal         : TicketsService.getTotalPrice,
            getItems         : TicketsService.getCartProducts,
            thereAreProducts : TicketsService.thereAreProducts,

            addToCart : addToCart,
            startOver : startOver
        };
    }

    dependencies.push(TicketsCartController);

    module.controller(controllerName, dependencies);
}(angular, MODULES));
;(function TriggerSelectWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'triggerSelect',
        dependencies  = ['$timeout'];

    function TriggerSelect ($timeout) {
        return {
            restrict : 'EA',
            scope    : {
                target : '@triggerSelect'
            },
            link : function (scope, element) {
                $(element).click(function () {
                    $timeout(function () {
                        $('[data-js="' + scope.target + '"]').next().find('button.dropdown-toggle').click();
                    });
                });
            }
        };
    }

    dependencies.push(TriggerSelect);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
;(function BasketServiceWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'BasketService',
        dependencies = ['$q', '$log', '$injector'];

    function BasketService ($q, $log, $injector) {
        var factory = {},
            $logger = $log.getInstance(factoryName),

            DataShare          = $injector.get('DataShare'),
            TranslationFactory = $injector.get('TranslationFactory'),
            NumberUtil         = $injector.get('NumberUtil'),
            PubSub             = $injector.get('PublisherSubscriber'),
            Cookie             = $injector.get('Cookie'),
            Basket             = $injector.get('Basket'),
            Order              = $injector.get('Order'),

            PRIVATE_API = {},

            CONST  = module.constants.TICKET,
            EVENTS = module.constants.APP_EVENTS,
            COOKIE = CONST.COOKIE,

            basketDataBeingFetched = true,
            basketData             = null,
            basketFlags            = {
                isRecurring : false
            },
            basketTotals           = {
                subtotal    : 0,
                shipping    : 0,
                shippingEur : 0,
                discount    : 0,
                discountEur : 0,
                balance     : 0,
                total       : 0,
                totalEur    : 0,

                installmentNumber     : 0,
                installmentFullAmount : 0,
                installmentPayNow     : 0
            };

        /**
         * Returns the number of products in the basket.
         * Used to display the products in the header menu.
         *
         * @param products - the basket data received from backend
         */
        function retrieveNumberOfProducts (products) {
            return products ? _.reduce(products, function (result, product) {
                return result + parseInt(product.qty, 10);
            }, 0) : 0;
        }

        function retrieveBasket () {
            var existingBasket = Cookie.get(COOKIE.BASKET) || {
                products : {}
            };

            _.forEach(existingBasket.products, function (product) {
                product.qty      = parseInt(product.qty, 10);
                product.priceEur = Math.ceil(product.price / CONST.RATES.EUR);
            });

            return existingBasket;
        }

        function retrieveProductId (product) {
            return product.selectedOption ? product.selectedOption : product.entityId;
        }

        factory.addToBasketFromCookie = function () {
            var params = {
                    authorisationToken : DataShare.getAuthToken(),
                    products           : []
                },
                existingBasket = retrieveBasket(),
                deferred       = $q.defer();

            if (_.keys(existingBasket.products).length) {
                $logger.debug(existingBasket);

                _.forEach(existingBasket.products, function (item, itemKey) {
                    params.products.push({
                        id       : itemKey,
                        quantity : parseInt(item.qty, 10)
                    });
                });

                Basket.add(params).then(function (response) {
                    var isSuccess = response.success && response.errorMessage === '';

                    basketData = response.data.products;

                    basketFlags.isRecurring = response.data.isRecurring;

                    basketTotals = {
                        subtotal : parseFloat(response.data.subtotal).toFixed(2),
                        shipping : parseInt(response.data.shipping, 10),
                        discount : parseFloat(response.data.discount).toFixed(2),
                        balance  : NumberUtil.getIfValid(response.data.giftBalance, 0),
                        total    : parseFloat(response.data.total).toFixed(2),
                        totalEur : parseFloat(response.data.totalEur).toFixed(2),

                        installmentNumber     : parseInt(response.data.installmentNumber, 10),
                        installmentFullAmount : parseFloat(response.data.installmentFullAmount).toFixed(2),
                        installmentPayNow     : parseFloat(response.data.installmentPayNow).toFixed(2)
                    };

                    if (!isSuccess) {
                        DataShare.addToCartError({
                            isVisible   : true,
                            message     : response.errorMessage,
                            appendExtra : true
                        });

                        PubSub.publish(EVENTS.BASKET.ERROR);
                    }

                    Cookie.set(COOKIE.BASKET, {
                        products : {}
                    });

                    deferred.resolve({
                        success : isSuccess,
                        error   : isSuccess ? null : response.errorMessage
                    });
                });
            } else {
                deferred.resolve({
                    isSuccess : true
                });
            }

            return deferred.promise;
        };

        /**
         * Function used to add a ticket to the basket. This is for
         * the case when the user is logged in, so a call to the
         * backend is made to update the basket.
         *
         * @param products - the ticket to be added to the basket
         */
        PRIVATE_API.addToBasketLoggedInUser = function (products) {
            var params = {
                authorisationToken : DataShare.getAuthToken(),
                products           : []
            };

            _.forEach(products, function (product) {
                params.products.push({
                    id       : parseInt(retrieveProductId(product), 10),
                    quantity : product.quantity
                });
            });

            return Basket.add(params).then(function (response) {
                var isSuccess = response.success && response.errorMessage === '';

                if (isSuccess) {
                    basketData = response.data.products;

                    basketFlags.isRecurring = response.data.isRecurring;

                    basketTotals = {
                        subtotal : parseFloat(response.data.subtotal).toFixed(2),
                        shipping : parseInt(response.data.shipping, 10),
                        discount : parseFloat(response.data.discount).toFixed(2),
                        balance  : NumberUtil.getIfValid(response.data.giftBalance, 0),
                        total    : parseFloat(response.data.total).toFixed(2),
                        totalEur : parseFloat(response.data.totalEur).toFixed(2),

                        installmentNumber     : parseInt(response.data.installmentNumber, 10),
                        installmentFullAmount : parseFloat(response.data.installmentFullAmount).toFixed(2),
                        installmentPayNow     : parseFloat(response.data.installmentPayNow).toFixed(2)
                    };
                }

                return {
                    success     : isSuccess,
                    error       : isSuccess ? null : response.errorMessage,
                    appendExtra : true
                };
            });
        };

        /**
         * Function that adds a ticket to the basket. This is for the
         * case when the user is not logged in. For this situation, the
         * tickets are kept in the cookies. The cookies should be of
         * session type. After the user logs in, this information will
         * be sent to the server.
         *
         * @param products - the ticket to be added to the basket
         */
        PRIVATE_API.addToBasketNotLoggedInUser = function (products) {
            var existingBasket = retrieveBasket(),
                deferred       = $q.defer(),
                success        = true,
                error          = null;

            _.forEach(products, function (product) {
                var productId = parseInt(retrieveProductId(product), 10),
                    existingQuantity,
                    allQty;

                if (existingBasket.products[productId]) {
                    existingQuantity = parseInt(existingBasket.products[productId].qty, 10);
                    allQty           = existingQuantity + parseInt(product.quantity, 10);

                    if (allQty > 6) {
                        success = false;
                        error   = TranslationFactory.get('BASKET.ERROR.ONLY_SIX_TICKETS');

                        existingBasket.products[productId].qty = 6;
                    } else {
                        existingBasket.products[productId].qty = existingQuantity + parseInt(product.quantity, 10);
                    }
                } else {
                    existingBasket.products[productId] = {
                        name  : product.name,
                        price : product.price,
                        qty   : parseInt(product.quantity, 10),
                        type  : product.typeId
                    };
                }
            });

            basketData = existingBasket.products;

            Cookie.set(COOKIE.BASKET, existingBasket);

            deferred.resolve({
                success     : success,
                error       : error,
                appendExtra : false
            });

            return deferred.promise;
        };

        /**
         * Function used to retrieve the number of products in the basket
         * for the non logged in user. This value is computed based on the
         * tickets held in the cookies.
         */
        PRIVATE_API.retrieveProductsNotLoggedIn = function () {
            var existingBasket = retrieveBasket(),
                deferred       = $q.defer(),
                totalQty       = retrieveNumberOfProducts(existingBasket.products);

            deferred.resolve({
                success : true,
                data    : totalQty,
                error   : null
            });

            return deferred.promise;
        };

        /**
         * If the user is logged in, then the number of products
         * is received after getting the user basket data from
         * backend.
         */
        PRIVATE_API.retrieveProductsLoggedIn = function () {
            var deferred  = $q.defer(),
                authToken = DataShare.getAuthToken();

            basketDataBeingFetched = true;

            Basket.getDetails(authToken).then(function (response) {
                basketData             = response.data.products;
                basketDataBeingFetched = false;

                deferred.resolve({
                    success : response.success,
                    data    : retrieveNumberOfProducts(response.data.products),
                    error   : response.error
                });
            });

            return deferred.promise;
        };

        /**
         * Function used to update the basket for a user that is logged in.
         */
        PRIVATE_API.updateBasketLoggedInUser = function () {
            var deferred = $q.defer(),
                params   = {
                    authToken : DataShare.getAuthToken(),
                    products  : basketData
                };

            Basket.update(params).then(function (response) {
                var isSuccess = response.success && response.errorMessage === '';

                if (isSuccess) {
                    basketData = response.data.products;

                    basketFlags.isRecurring = response.data.isRecurring;

                    basketTotals = {
                        subtotal : parseFloat(response.data.subtotal).toFixed(2),
                        shipping : parseInt(response.data.shipping, 10),
                        discount : parseFloat(response.data.discount).toFixed(2),
                        balance  : NumberUtil.getIfValid(response.data.giftBalance, 0),
                        total    : parseFloat(response.data.total).toFixed(2),
                        totalEur : parseFloat(response.data.totalEur).toFixed(2),

                        installmentNumber     : parseInt(response.data.installmentNumber, 10),
                        installmentFullAmount : parseFloat(response.data.installmentFullAmount).toFixed(2),
                        installmentPayNow     : parseFloat(response.data.installmentPayNow).toFixed(2)
                    };
                }

                deferred.resolve({
                    success     : isSuccess,
                    data        : isSuccess ? response.data : null,
                    error       : isSuccess ? null : response.errorMessage,
                    appendExtra : true
                });
            });

            return deferred.promise;
        };

        /**
         * Update the basket for the anonymous user. Handles the case when
         * the user is not logged in.
         *
         * @param products - ticket to be added
         */
        PRIVATE_API.updateBasketNotLoggedInUser = function (products) {
            var existingBasket = retrieveBasket(),
                deferred       = $q.defer();

            _.forEach(existingBasket.products, function (product, entityId) {
                _.forEach(products, function (updatedProduct, updatedEntityId) {
                    if (parseInt(entityId, 10) === parseInt(updatedEntityId, 10)) {
                        product.qty = updatedProduct.qty;
                    }
                });
            });

            Cookie.set(COOKIE.BASKET, existingBasket);

            deferred.resolve({
                success : true,
                data    : existingBasket,
                error   : null
            });

            return deferred.promise;
        };

        /**
         * Removes an item from the basket. Treats the case when the
         * user is logged in.
         *
         * @param itemId = the entity id of the product to be removed
         */
        PRIVATE_API.removeFromBasketLoggedInUser = function (itemId) {
            var deferred = $q.defer(),
                params   = {
                    authToken : DataShare.getAuthToken(),
                    itemId    : itemId
                };

            Basket.remove(params).then(function (response) {
                var isSuccess = response.success && response.errorMessage === '';

                if (isSuccess) {
                    basketData = response.data.products;

                    basketFlags.isRecurring = response.data.isRecurring;

                    basketTotals = {
                        subtotal : parseFloat(response.data.subtotal).toFixed(2),
                        shipping : parseInt(response.data.shipping, 10),
                        discount : parseFloat(response.data.discount).toFixed(2),
                        balance  : NumberUtil.getIfValid(response.data.giftBalance, 0),
                        total    : parseFloat(response.data.total).toFixed(2),
                        totalEur : parseFloat(response.data.totalEur).toFixed(2),

                        installmentNumber     : parseInt(response.data.installmentNumber, 10),
                        installmentFullAmount : parseFloat(response.data.installmentFullAmount).toFixed(2),
                        installmentPayNow     : parseFloat(response.data.installmentPayNow).toFixed(2)
                    };
                }

                deferred.resolve({
                    success : isSuccess,
                    data    : isSuccess ? response.data : null,
                    error   : isSuccess ? null : response.errorMessage
                });
            });

            return deferred.promise;
        };

        /**
         * Removes an item from the basket. Treats the case when the
         * user is not logged in.
         *
         * @param itemId = the entity id of the product to be removed
         */
        PRIVATE_API.removeFromBasketNotLoggedInUser = function (itemId) {
            var deferred       = $q.defer(),
                existingBasket = retrieveBasket();

            _.forEach(existingBasket.products, function (item, itemKey) {
                if (parseInt(itemKey, 10) === parseInt(itemId, 10)) {
                    delete existingBasket.products[itemKey];
                }
            });

            basketData = existingBasket.products;

            Cookie.set(COOKIE.BASKET, existingBasket);

            deferred.resolve({
                success : true,
                data    : existingBasket,
                error   : null
            });

            return deferred.promise;
        };

        /**
         * Returns the content of the basket for the logged in user.
         * This happens by making a call to the backend
         */
        PRIVATE_API.getBasketLoggedInUser = function () {
            var deferred  = $q.defer(),
                authToken = DataShare.getAuthToken();

            basketDataBeingFetched = true;

            Basket.getDetails(authToken).then(function (response) {
                var isSuccess = response.success;

                if (isSuccess) {
                    basketData = response.data.products;

                    basketFlags.isRecurring = response.data.isRecurring;

                    basketTotals = {
                        subtotal : parseFloat(response.data.subtotal).toFixed(2),
                        shipping : parseInt(response.data.shipping, 10),
                        discount : parseFloat(response.data.discount).toFixed(2),
                        balance  : NumberUtil.getIfValid(response.data.giftBalance, 0),
                        total    : parseFloat(response.data.total).toFixed(2),
                        totalEur : parseFloat(response.data.totalEur).toFixed(2),

                        installmentNumber     : parseInt(response.data.installmentNumber, 10),
                        installmentFullAmount : parseFloat(response.data.installmentFullAmount).toFixed(2),
                        installmentPayNow     : parseFloat(response.data.installmentPayNow).toFixed(2)
                    };
                }

                deferred.resolve(basketData);

                basketDataBeingFetched = false;
            });

            return deferred.promise;
        };

        /**
         * Returns the content of the basket for the not logged in user.
         * The data is retrieved from cookies.
         */
        PRIVATE_API.getBasketNotLoggedInUser = function () {
            var existingBasket = retrieveBasket(),
                deferred       = $q.defer();

            basketDataBeingFetched = false;

            basketData = existingBasket.products;

            deferred.resolve({
                success : true,
                data    : existingBasket,
                error   : null
            });

            return deferred.promise;
        };

        /**
         * Returns the basket data
         */
        factory.get = function () {
            var isLoggedIn = DataShare.isLoggedIn();

            return PRIVATE_API[isLoggedIn ? 'getBasketLoggedInUser' : 'getBasketNotLoggedInUser']();
        };

        /**
         * Function used to add a new ticket to the basket
         *
         * @param products - the ticket to be added to the basket
         */
        factory.addToBasket = function (products) {
            var isLoggedIn = DataShare.isLoggedIn();

            $logger.debug(products);

            return PRIVATE_API[isLoggedIn ? 'addToBasketLoggedInUser' : 'addToBasketNotLoggedInUser'](products);
        };

        /**
         * Function used to add a new ticket to the basket
         *
         * @param ticketList - the ticket to be added to the basket
         */
        factory.updateBasket = function (ticketList) {
            var isLoggedIn = DataShare.isLoggedIn();

            return PRIVATE_API[isLoggedIn ? 'updateBasketLoggedInUser' : 'updateBasketNotLoggedInUser'](ticketList);
        };

        /**
         * Function used to add a new ticket to the basket
         *
         * @param item - the item to be removed from the basket
         */
        factory.removeFromBasket = function (item) {
            var isLoggedIn = DataShare.isLoggedIn();

            return PRIVATE_API[isLoggedIn ? 'removeFromBasketLoggedInUser' : 'removeFromBasketNotLoggedInUser'](item);
        };

        factory.setRecurring = function (isRecurring) {
            var deferred = $q.defer(),
                params   = {
                    actionType         : 'update',
                    authorizationToken : DataShare.getAuthToken(),
                    isRecurring        : isRecurring
                };

            Basket.setRecurring(params).then(function (response) {
                var isSuccess = response.success && response.errorMessage === '';

                if (isSuccess) {
                    basketData = response.data.products;

                    basketFlags.isRecurring = response.data.isRecurring;

                    basketTotals = {
                        subtotal : parseFloat(response.data.subtotal).toFixed(2),
                        shipping : parseInt(response.data.shipping, 10),
                        discount : parseFloat(response.data.discount).toFixed(2),
                        balance  : NumberUtil.getIfValid(response.data.giftBalance, 0),
                        total    : parseFloat(response.data.total).toFixed(2),
                        totalEur : parseFloat(response.data.totalEur).toFixed(2),

                        installmentNumber     : parseInt(response.data.installmentNumber, 10),
                        installmentFullAmount : parseFloat(response.data.installmentFullAmount).toFixed(2),
                        installmentPayNow     : parseFloat(response.data.installmentPayNow).toFixed(2)
                    };
                }

                deferred.resolve({
                    success     : isSuccess,
                    data        : isSuccess ? response.data : null,
                    error       : isSuccess ? null : response.errorMessage,
                    appendExtra : true
                });
            });

            return deferred.promise;
        };

        /**
         * Function that makes the checkout call for the basket
         * products. If the response contains in the data field
         * a form sent by libra, append the form to the html
         * (otherwise firefox won't submit the form) and then
         * submit the form so that the use is redirected to
         * libra pay for further payment processing.
         */
        factory.checkout = function (isRecurring, salelinkCode) {
            var authToken        = DataShare.getAuthToken(),
                deferred         = $q.defer(),
                redirectToOrders = false;

            Order.checkout(authToken, isRecurring, salelinkCode).then(function (response) {
                var isSuccess = response.success && response.errorMessage === '';

                $logger.debug(response);

                if (isSuccess && !!response.data) {
                    $($(response.data)[1]).appendTo('body').submit();
                }

                if (isSuccess && !response.data) {
                    redirectToOrders = true;
                }

                deferred.resolve({
                    success          : isSuccess,
                    error            : isSuccess ? null : response.errorMessage,
                    redirectToOrders : redirectToOrders,
                    data             : response.data
                });
            });

            return deferred.promise;
        };

        /**
         * If the use is not logged in we need to compute the total
         * amount of the basket by adding all the results received
         * after multiplying the quantity by the price for each product
         * in the basket.
         */
        PRIVATE_API.retrieveBasketTotalsNotLoggedIn = function () {
            var totalBase = _.reduce(basketData, function (result, product) {
                return +(result + product.price * product.qty).toFixed(2);
            }, 0);

            basketTotals = {
                subtotal    : 0,
                shipping    : 0,
                shippingEur : 0,
                discount    : 0,
                discountEur : 0,
                balance     : 0,
                total       : totalBase,
                totalEur    : Math.ceil(totalBase / CONST.RATES.EUR)
            };

            return basketTotals;
        };

        /**
         * If the user is logged in we have the total amount in basket
         * being sent from the backend
         */
        PRIVATE_API.retrieveBasketTotalsLoggedIn = function () {
            basketTotals.discountEur = Math.ceil(basketTotals.discount / CONST.RATES.EUR);
            basketTotals.shippingEur = Math.ceil(basketTotals.shipping / CONST.RATES.EUR);

            return basketTotals;
        };

        /**
         * Function used to compute the total sum of the basket.
         * It is necessary because the user can update the quantity
         * for each product.
         */
        factory.retrieveBasketTotals = function () {
            var isLoggedIn = DataShare.isLoggedIn();

            return PRIVATE_API[isLoggedIn ? 'retrieveBasketTotalsLoggedIn' : 'retrieveBasketTotalsNotLoggedIn']();
        };

        /**
         * Returns the number of products in the basket. Used in the header
         * directive.
         */
        factory.retrieveNumberOfProducts = function () {
            var isLoggedIn = DataShare.isLoggedIn();

            return PRIVATE_API[isLoggedIn ? 'retrieveProductsLoggedIn' : 'retrieveProductsNotLoggedIn']();
        };

        /**
         * Function used to determine if the basket is empty and a
         * correspondent message should be displayed.
         */
        factory.shouldDisplayNoProducts = function () {
            return !basketDataBeingFetched && _.keys(basketData).length === 0;
        };

        /**
         * Function used to determine if the totals message
         * should be displayed below the cart - only for logged out users.
         */
        factory.shouldDisplayTotalsMessage = function () {
            return !DataShare.isLoggedIn() && _.keys(basketData).length > 0;
        };

        /**
         * Function used to determine if all subtotals (subtotal, discount, delivery)
         * should be displayed
         */
        factory.shouldDisplaySubTotals = function () {
            return DataShare.isLoggedIn() && !basketDataBeingFetched && _.keys(basketData).length > 0;
        };

        /**
         * Function used to determine if the subtotals that can be 0 (discount, delivery)
         * should be displayed
         */
        factory.shouldDisplayTotalItem = function (item) {
            return item > 0;
        };

        factory.shouldDisplayDiscountItem = function () {
            return DataShare.isLoggedIn() && _.keys(basketData).length > 0;
        };

        factory.shouldDisplayCouponOptionItem = function (item) {
            return item > 0;
        };

        factory.isRecurring = function () {
            return basketFlags.isRecurring;
        };

        /**
         * Getter used by the controller
         */
        factory.getProducts = function () {
            return basketData;
        };

        /**
         * Function used to reset the basket if the user
         * logs out.
         */
        factory.resetBasket = function () {
            basketData   = {};
            basketTotals = {
                subtotal : 0,
                shipping : 0,
                discount : 0,
                balance  : 0,
                total    : 0,

                installmentNumber     : 0,
                installmentFullAmount : 0,
                installmentPayNow     : 0
            };

            basketFlags.isRecurring = false;
        };

        /**
         * Function used to reset the basket if the user
         * logs out.
         */
        factory.clearCookieBasket = function () {
            Cookie.remove(COOKIE.BASKET);
        };

        /**
         * Getter used by the header in order to display
         * the number of products added in the basket.
         */
        factory.getNumberOfProducts = function () {
            return retrieveNumberOfProducts(basketData);
        };

        factory.addToBasketProductUpgrade = function (upgrade, ticketId) {
            var authToken   = DataShare.getAuthToken(),
                upgradeId   = upgrade.to,
                deferred    = $q.defer(),
                products    = {},
                upgradeInfo = {
                    ticketId     : parseInt(ticketId, 10),
                    upgradePrice : upgrade.price
                };

            products[upgradeId] = 1;

            Basket.addUpgrade(authToken, products, upgradeInfo).then(function (response) {
                var isSuccess = response.success && response.errorMessage === '';

                basketData = response.data.products;

                basketFlags.isRecurring = response.data.isRecurring;

                basketTotals = {
                    subtotal : parseFloat(response.data.subtotal).toFixed(2),
                    shipping : parseInt(response.data.shipping, 10),
                    discount : parseFloat(response.data.discount).toFixed(2),
                    balance  : NumberUtil.getIfValid(response.data.giftBalance, 0),
                    total    : parseFloat(response.data.total).toFixed(2),

                    installmentNumber     : parseInt(response.data.installmentNumber, 10),
                    installmentFullAmount : parseFloat(response.data.installmentFullAmount).toFixed(2),
                    installmentPayNow     : parseFloat(response.data.installmentPayNow).toFixed(2)
                };

                if (!isSuccess) {
                    DataShare.addToCartError({
                        isVisible   : true,
                        message     : response.errorMessage,
                        appendExtra : true
                    });

                    PubSub.publish(EVENTS.BASKET.ERROR);
                }

                Cookie.set(COOKIE.BASKET, {
                    products : {}
                });

                deferred.resolve({
                    success : isSuccess,
                    error   : isSuccess ? null : response.errorMessage
                });
            });

            return deferred.promise;
        };

        return factory;
    }

    dependencies.push(BasketService);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function TicketsRedesignServiceWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'TicketsRedesignService',
        dependencies = ['$injector', '$location', '$anchorScroll', '$timeout'];

    function TicketsRedesignService ($injector, $location, $anchorScroll, $timeout) {
        var factory = {},

            Ticket               = $injector.get('Ticket'),
            StateUtil            = $injector.get('StateUtil'),
            DataShare            = $injector.get('DataShare'),
            BasketService        = $injector.get('BasketService'),
            BootBoxService       = $injector.get('BootBoxService'),
            HeaderAccountService = $injector.get('HeaderAccountService'),

            STATES = module.constants.STATES,

            tickets = {
                loaded   : false,
                fetching : false,
                data     : []
            },

            info = {
                products     : [],
                totalPrice   : 0,
                leaveConsent : false
            },

            CSS_CLASSES = {
                TICKET : {
                    HALF_WIDTH : 'tickets__item--half-width',
                    FULL_WIDTH : 'tickets__item--full-width',
                    A_QUARTER  : 'tickets__item--a-quarter',
                    SPECIAL    : 'tickets__item--is-special',
                    XMAS       : 'tickets__item--is-xmas',
                    VIP        : 'tickets__item--is-vip',
                    CAMPING    : 'tickets__item--is-camping',
                    ONE_DAY    : 'tickets__item--is-one-day'
                }
            },

            PRODUCT_TYPES = {
                PASS          : 'PASS',
                ACCOMMODATION : 'ACCOMMODATION',
                GOODIES       : 'GOODIES',
                DEALS         : 'DEALS'
            };

        /*eslint-disable*/
        function preFormatTicket (backendTicket) {
            var isSpecial = false,
                isXmas    = false,
                isVip     = false,
                isCamping = false,
                cssClass  = [],
                images    = [];

            if (backendTicket.subtype === '4_DAY') {
                cssClass = [CSS_CLASSES.TICKET.HALF_WIDTH];

                if (backendTicket.subsubtype === 'VIP') {
                    cssClass.push(CSS_CLASSES.TICKET.VIP);

                    isVip = true;
                }
            }

            if (backendTicket.subtype === '1_DAY') {
                cssClass = [CSS_CLASSES.TICKET.A_QUARTER, CSS_CLASSES.TICKET.ONE_DAY];

                if (backendTicket.name.toLowerCase().indexOf('premium') > -1) {
                    cssClass.push(CSS_CLASSES.TICKET.VIP);

                    isVip = true;
                }
            }

            if (backendTicket.subtype === 'SPECIAL') {
                cssClass.push(CSS_CLASSES.TICKET.SPECIAL);
                cssClass.push(CSS_CLASSES.TICKET.FULL_WIDTH);

                isSpecial = true;
            }

            if (backendTicket.subtype === 'XMAS') {
                cssClass.push(CSS_CLASSES.TICKET.XMAS);
                cssClass.push(CSS_CLASSES.TICKET.FULL_WIDTH);

                isXmas = true;
            }

            if (backendTicket.name.toLowerCase().indexOf('camping') > -1) {
                cssClass.push(CSS_CLASSES.TICKET.CAMPING);

                isCamping = true;
            }

            backendTicket.data = {
                cssClass  : cssClass.join(' '),
                isSpecial : isSpecial,
                isXmas    : isXmas,
                isVip     : isVip,
                isCamping : isCamping
            };

            images = _.sortBy(_.toArray(backendTicket.images), 'position');

            backendTicket.title         = backendTicket.name;
            backendTicket.description   = backendTicket.shortDescription;
            backendTicket.price         = parseFloat(backendTicket.price);
            backendTicket.priceEur      = parseFloat(backendTicket.priceEur);
            backendTicket.quantity      = 1;
            backendTicket.image         = _.keys(backendTicket.images).length > 0 ? _.first(images).url : 'http://placehold.it/300x350';
            backendTicket.options       = _.values(backendTicket.options);
            backendTicket.hasPriceFinal = parseFloat(backendTicket.priceFinal) > 0;
            backendTicket.priceFinal    = parseFloat(backendTicket.priceFinal);
            backendTicket.priceFinalEur = parseFloat(backendTicket.priceFinalEur);
            backendTicket.isComingSoon  = parseInt(backendTicket.isComingsoon);

            if (backendTicket.options.length) {
                backendTicket.selectedOption = _.first(_.toArray(backendTicket.options)).optionId;
            }

            return backendTicket;
        }
        /*eslint-enable*/

        function preFormat (backendTickets) {
            return _.map(backendTickets, preFormatTicket);
        }

        function nest (collection, keys) {
            if (!keys.length) {
                return collection;
            }

            return _(collection).groupBy(_.first(keys)).mapValues(function (values) {
                return nest(values, keys.slice(1));
            }).value();
        }

        function group (backendTickets) {
            var criterias = [
                    function byPassType (ticket) {
                        return ticket.type;
                    },
                    function byPassSubType (ticket) {
                        return ticket.subtype;
                    },
                    function byPassSubSubType (ticket) {
                        return ticket.subsubtype;
                    }
                ],
                onlyTickets = _.filter(backendTickets, function (ticket) {
                    return ticket.type === PRODUCT_TYPES.PASS;
                }),
                onlyAccommodation  = _.filter(backendTickets, function (ticket) {
                    return ticket.type === PRODUCT_TYPES.ACCOMMODATION;
                }),
                onlyGoodies  = _.filter(backendTickets, function (ticket) {
                    return ticket.type === PRODUCT_TYPES.GOODIES;
                }),
                onlyDeals  = _.filter(backendTickets, function (ticket) {
                    return ticket.type === PRODUCT_TYPES.DEALS;
                }),
                shouldFormatDifferently = false,
                multiLevelGrouped       = nest(onlyTickets, criterias, shouldFormatDifferently);

            multiLevelGrouped[PRODUCT_TYPES.DEALS] = {
                data : {
                    isDeal : true
                },
                items : onlyDeals
            };

            multiLevelGrouped[PRODUCT_TYPES.ACCOMMODATION] = {
                data : {
                    isAccommodation : true
                },
                items : onlyAccommodation
            };

            multiLevelGrouped[PRODUCT_TYPES.GOODIES] = {
                data : {
                    isGoodie : true
                },
                items : onlyGoodies
            };

            return multiLevelGrouped;
        }

        function postFormat (groupedTickets) {
            var clone = _.cloneDeep(groupedTickets);

            clone[PRODUCT_TYPES.PASS] = {
                data : {
                    isPass : true
                },
                items : _.reduce(clone[PRODUCT_TYPES.PASS], function (acc, subType, subTypeName) {
                    acc[subTypeName] = {
                        data : {
                            type : subTypeName
                        },
                        items : _.reduce(subType, function (innerAcc, subSubType, subSubTypeName) {
                            var subSubTypeItem = _.first(subSubType);

                            innerAcc[subSubTypeName] = {
                                data : {
                                    cssClass  : subSubTypeItem.data.cssClass,
                                    isSpecial : subSubTypeItem.data.isSpecial,
                                    isVip     : subSubTypeItem.data.isVip
                                },
                                items : subSubType
                            };

                            return innerAcc;
                        }, {})
                    };

                    return acc;
                }, {})
            };

            return clone;
        }

        factory.fetch = function () {
            Ticket.retrieveAllTickets().then(function (rawTickets) {
                var preformattedTickets  = preFormat(rawTickets),
                    groupedTickets       = group(preformattedTickets),
                    postFormattedTickets = postFormat(groupedTickets);

                tickets.data = postFormattedTickets;

                if ($location.hash()) {
                    $timeout(function () {
                        $anchorScroll();
                    }, 10);
                }
            });
        };

        factory.finalize = function () {
            StateUtil.go(STATES.BASKET);
        };

        /**
         * Update the internal variable info when the user modifies
         * in any sort a quantity of a product.
         */
        factory.onProductAdded = function (item) {
            var quantity        = parseInt(item.quantity, 10),
                isValidQuantity = _.isNumber(quantity);

            if (isValidQuantity) {
                BasketService.addToBasket([item]).then(function (response) {
                    if (response.error) {
                        DataShare.addToCartError({
                            isVisible   : true,
                            message     : response.error,
                            appendExtra : response.appendExtra
                        });

                        StateUtil.go(STATES.BASKET);
                    } else {
                        HeaderAccountService.setHeaderCartQty(BasketService.getNumberOfProducts());
                    }
                });
            }
        };

        /**
         * Determines if the user has selected at least one ticket
         * (camping is considered not a ticket)
         */
        factory.hasSelectedATicket = function () {
            return info.products.length > 0;
        };

        /**
         * Determines if the user has selected a camping
         */
        factory.hasSelectedCamping = function () {
            return _.filter(info.products, function (product) {
                return parseInt(product.ticketType, 10) === 5;
            }).length > 0;
        };

        /**
         * Determines if the user has selected a camping add on
         */
        factory.hasSelectedCampingAddOn = function () {
            return _.filter(info.products, function (product) {
                return parseInt(product.ticketType, 10) === 10;
            }).length > 0;
        };

        /**
         * Determines if the user has selected regular camping
         */
        factory.hasSelectedRegularCamping = function () {
            return _.filter(info.products, function (product) {
                return product.sku === 'regular-camping';
            }).length > 0;
        };

        /**
         * Determines if the user has selected premium camping
         */
        factory.hasSelectedPremiumCamping = function () {
            return _.filter(info.products, function (product) {
                return product.sku === 'premium-camping';
            }).length > 0;
        };

        factory.get = function () {
            return tickets.data;
        };

        factory.userIsAboutToLeave = function (event, toState) {
            var callbacks = {
                confirm : function () {
                    info.leaveConsent = true;

                    StateUtil.goFullName(toState.name);
                }
            };

            event.preventDefault();

            BootBoxService.confirmNotFinalizedOrder(callbacks);
        };

        factory.noTickets = function () {
            return true;

            // return _.isEmpty(tickets.data);
        };

        return factory;
    }

    dependencies.push(TicketsRedesignService);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function TicketsServiceWrap (ng, MODULES) {
    'use strict';

    var module       = ng.module(MODULES.APPLICATION.NAME),
        factoryName  = 'TicketsService',
        dependencies = ['Ticket', 'StringUtil', 'PublisherSubscriber'];

    function TicketsService (Ticket, StringUtil, PubSub) {
        var factory = {},

            TYPES = {
                TICKETS         : 'Pass',
                CAMPING         : 'Accommodation',
                CAMPING_OPTIONS : 'Accommodation Options'
            },

            PRODUCT_STATES = module.constants.PRODUCT_STATES,
            EVENTS         = module.constants.APP_EVENTS,

            ticketData = null,

            info = {
                products   : [],
                totalPrice : 0
            },

            visibility = {
                firstStep : true,
                theRest   : false
            };

        /**
         * Function used to update the quantity for a product.
         * If the product is not stored here internally, it will
         * be added, otherwise the quantity will be updated to
         * the new one.
         *
         * @param newItem - item that has been added or has the
         *                  quantity changed
         */
        function updateProducts (newItem) {
            var productExists = false;

            _.forEach(info.products, function (product) {
                if (product.sku === newItem.sku) {
                    productExists = true;

                    if (newItem.quantity > 0) {
                        product.quantity = newItem.quantity;
                    } else {
                        info.products = _.without(info.products, product);
                    }

                    return false;
                }

                return true;
            });

            if (!productExists && newItem.quantity > 0) {
                info.products.push(newItem);
            }

            info.totalPrice = _.reduce(info.products, function (result, item) {
                return result + item.price * item.quantity;
            }, 0);
        }

        factory.ticketData = function (newValue) {
            if (!_.isUndefined(newValue)) {
                ticketData = newValue;
            }

            return ticketData;
        };

        /**
         * After a user finalizes an order, the state of the selected
         * products, that is stored in the info object should be reset
         */
        factory.resetProducts = function () {
            _.forEach(ticketData, function (productsGroup) {
                _.forEach(productsGroup.tickets, function (item) {
                    item.quantity = 0;
                });
            });

            info = {
                products   : [],
                totalPrice : 0
            };
        };

        function isVisible (item) {
            return item.isSpecialOffer || item.canBeSold || !item.isSoldOut || item.isSoldOutNoQuantity;
        }

        function retrieveProductStatus (item) {
            var status = PRODUCT_STATES.AVAILABLE,

                conditions = [{
                    applies : item.canBeSold,
                    status  : PRODUCT_STATES.AVAILABLE
                }, {
                    applies : item.isSpecialOffer,
                    status  : PRODUCT_STATES.ONLY_FOR_REGISTERED
                }, {
                    applies : item.isSoldOut,
                    status  : PRODUCT_STATES.SOLD_OUT
                }, {
                    applies : item.isComingSoon,
                    status  : PRODUCT_STATES.COMING_SOON
                }];

            _.forEach(conditions, function (condition) {
                if (condition.applies) {
                    status = condition.status;
                }
            });

            return status;
        }

        function shouldDisplayBadge (item) {
            var status        = retrieveProductStatus(item),
                validStatuses = [
                    PRODUCT_STATES.COMING_SOON,
                    PRODUCT_STATES.SOLD_OUT,
                    PRODUCT_STATES.ONLY_FOR_REGISTERED
                ];

            return _.indexOf(validStatuses, status) > -1;
        }

        function retrieveImages (item) {
            return _.map(_.toArray(item.images), function (image) {
                return image.url;
            });
        }

        /**
         * Function used to build the content for each ticket group.
         * Because tickets are grouped by type, this function
         * builds an object which properties that are equivalent
         * to each tab name and values that correspond to tickets
         * belonging the the correspondent tab.
         *
         * @param rawTickets - the tickets received from backend
         */
        factory.buildTicketGroupContent = function (rawTickets) {
            ticketData = _.chain(rawTickets).groupBy(function (item) {
                item.quantity            = 0;
                item.price               = parseFloat(item.price).toFixed(2);
                item.canBeSold           = parseInt(item.isSalable, 10) === 1;
                item.isSoldOut           = parseInt(item.isSoldout, 10) === 1;
                item.isComingSoon        = parseInt(item.isComingsoon, 10) === 1;

                // item.isSpecialOffer      = parseInt(item.isSpecialOffer, 10) === 1;
                item.isSpecialOffer      = false;
                item.isSoldOutNoQuantity = !item.canBeSold && item.isSoldOut;
                item.isVisible           = isVisible(item);
                item.status              = retrieveProductStatus(item);
                item.showPriceTBA        = item.price === 0;
                item.shouldDisplayBadge  = shouldDisplayBadge(item);
                item.shouldDisplayQty    = item.status === PRODUCT_STATES.AVAILABLE;
                item.thumbnails          = retrieveImages(item);
                item.showDetailsButton   = !item.isComingSoon && !item.isSoldOut;

                return item.ticketTypeText;
            }).toPairs().map(function (currentItem) {
                return _.fromPairs(_.zip(['ticketTypeText', 'tickets'], currentItem));
            }).value();

            return ticketData;
        };

        function retrieveBy (type) {
            var groupOfItems = _.filter(ticketData, function (group) {
                return group.ticketTypeText === type;
            });

            if (groupOfItems.length) {
                return _.first(groupOfItems).tickets;
            }

            return {};
        }

        factory.retrieveTickets = function () {
            return retrieveBy(TYPES.TICKETS);
        };

        factory.retrieveCamping = function () {
            return retrieveBy(TYPES.CAMPING);
        };

        factory.retrieveCampingOptions = function () {
            return retrieveBy(TYPES.CAMPING_OPTIONS);
        };

        factory.startOver = function () {
            visibility.firstStep = true;
            visibility.theRest   = false;
        };

        factory.revealItems = function (path) {
            visibility.firstStep = false;
            visibility.theRest   = true;

            PubSub.publish(EVENTS.TICKETS.PATH_CHOSEN, path.NAME);
        };

        factory.getVisibility = function () {
            return visibility;
        };

        factory.hasSelectedRegularButNotPremium = function () {
            var hasSelectedAtLeastOneCamping = factory.hasSelectedCamping(),
                hasSelectedRegularCamping    = factory.hasSelectedRegularCamping(),
                hasSelectedPremiumCamping    = factory.hasSelectedPremiumCamping();

            return hasSelectedAtLeastOneCamping && hasSelectedRegularCamping && !hasSelectedPremiumCamping;
        };

        factory.hasNoCampingSelected = function () {
            return !factory.hasSelectedCamping();
        };

        /**
         * When the user selects a path, that means he wants
         * to navigate to another step, this function is called.
         * The @param path parameter tells us to which step he
         * wants to go.
         */
        factory.canFinalize = function () {
            var

                /**
                 * Below are listed all the possible conditions. The third step
                 * is the one where camping options sit. When the user wants to
                 * go from the camping (step 3) to the camping options (step 4)
                 * one of the following can happen:
                 *
                 *     - user has no camping selected => a popup with confirmation
                 *       that he/she do not want any camping is presented
                 *     - user has selected regular camping => a popup with conformation
                 *       that he/she wants to stick with regular or choose premium is
                 *       presented
                 *     - user has selected premium camping => he is able to navigate
                 *       directly to camping options (step 4)
                 */
                conditions = [{
                    rank    : 1,
                    applies : factory.hasSelectedRegularButNotPremium,
                    then    : function () {
                        PubSub.publish(EVENTS.TICKETS.OPEN_CONFIRMATION);
                    }
                }, {
                    rank    : 2,
                    applies : factory.hasNoCampingSelected,
                    then    : function () {
                        PubSub.publish(EVENTS.TICKETS.OPEN_NO_CAMPING);
                    }
                }],

                canFinalize = true;

            /**
             * The order of the conditions in the conditions array is important.
             * First sort conditions after rank, then iterate through all of them
             * and stop at the first one that applies.
             */
            _.forEach(_.sortBy(conditions, function (condition) {
                return condition.rank;
            }), function (condition) {
                if (condition.applies()) {
                    condition.then();

                    canFinalize = false;

                    return false;
                }

                return true;
            });

            return canFinalize;
        };

        /**
         * Retrieve all tickets, group them by tab and by ticket type
         */
        factory.getAllTickets = function () {
            return Ticket.retrieveAllTickets().then(function (rawTickets) {
                return rawTickets;
            });
        };

        /**
         * Function used to retrieve a list of products. These products
         * are the one that user has selected a quantity. For now it is
         * used to display the products in the fixed yellow top-bar
         * (below the application navigation)
         */
        factory.getProducts = function () {
            var template = '<strong>{content}</strong>';

            return _.reduce(info.products, function (result, item) {
                var selectedItem = StringUtil.supplant(template, {
                    content : item.quantity + 'x' + item.name
                });

                result.push(selectedItem);

                return result;
            }, []).join(' and ');
        };

        factory.getCartProducts = function () {
            return info.products;
        };

        factory.thereAreProducts = function () {
            return info.products.length > 0;
        };

        /**
         * Function used to compute the total price of all selected
         * products. Used also to display the total amount in the
         * fixed yellow top-bar (below the application navigation)
         */
        factory.getTotalPrice = function () {
            return _.reduce(info.products, function (result, item) {
                return parseFloat(parseFloat(result) + item.price * item.quantity).toFixed(2);
            }, 0);
        };

        /**
         * Determines if the user has selected at least one ticket
         * (camping is considered not a ticket)
         */
        factory.hasSelectedATicket = function () {
            return _.filter(info.products, function (product) {
                return parseInt(product.ticketType, 10) === 6;
            }).length > 0;
        };

        /**
         * Determines if the user has selected a camping
         */
        factory.hasSelectedCamping = function () {
            return _.filter(info.products, function (product) {
                return parseInt(product.ticketType, 10) === 5;
            }).length > 0;
        };

        /**
         * Determines if the user has selected a camping add on
         */
        factory.hasSelectedCampingAddOn = function () {
            return _.filter(info.products, function (product) {
                return parseInt(product.ticketType, 10) === 10;
            }).length > 0;
        };

        /**
         * Determines if the user has selected regular camping
         */
        factory.hasSelectedRegularCamping = function () {
            return _.filter(info.products, function (product) {
                return product.sku === 'regular-camping';
            }).length > 0;
        };

        /**
         * Determines if the user has selected premium camping
         */
        factory.hasSelectedPremiumCamping = function () {
            return _.filter(info.products, function (product) {
                return product.sku === 'premium-camping';
            }).length > 0;
        };

        /**
         * Update the internal variable info when the user modifies
         * in any sort a quantity of a product.
         */
        factory.onProductAdded = function (item) {
            var quantity        = parseInt(item.quantity, 10),
                isValidQuantity = _.isNumber(quantity);

            if (isValidQuantity) {
                updateProducts(item);

                PubSub.publish(EVENTS.TICKETS.ON_PRODUCT_QTY_CHANGE);
            }
        };

        /**
         * Returns all the selected products. Used when the user
         * finalizes the order.
         */
        factory.retrieveProducts = function () {
            return info.products;
        };

        /**
         * Returns all the selected products. Used when the user
         * finalizes the order.
         */
        factory.getInfo = function () {
            return info;
        };

        return factory;
    }

    dependencies.push(TicketsService);

    module.factory(factoryName, dependencies);
}(angular, MODULES));
;(function TravelGridWrap (ng, MODULES) {
    'use strict';

    var module        = ng.module(MODULES.APPLICATION.NAME),
        directiveName = 'travelGrid',
        dependencies  = ['$timeout', '$location', '$anchorScroll'];

    function TravelGrid ($timeout, $location, $anchorScroll) {
        return {
            restrict : 'EA',
            link     : function () {
                var grid1 = document.querySelector('.grid-first'),
                    grid2 = document.querySelector('.grid-second'),
                    grid3 = document.querySelector('.grid-third'),
                    grid4 = document.querySelector('.grid-forth'),
                    grid5 = document.querySelector('.grid-fifth'),
                    iso1,
                    iso2,
                    iso3,
                    iso4,
                    iso5;

                function initIsotope () {
                    var config = {
                        isResizeBound   : false,
                        itemSelector    : '.grid__item',
                        percentPosition : true,
                        masonry         : {
                            columnWidth : '.grid__sizer'
                        },
                        transitionDuration : '0.6s'
                    };

                    iso1 = new Isotope(grid1, config);
                    iso2 = new Isotope(grid2, config);
                    iso3 = new Isotope(grid3, config);
                    iso4 = new Isotope(grid4, config);
                    iso5 = new Isotope(grid5, config);
                }

                function initEvents () {
                    window.addEventListener('resize', _.throttle(function () {
                        iso1.layout();
                        iso2.layout();
                        iso3.layout();
                        iso4.layout();
                        iso5.layout();
                    }, 50));

                    /* eslint-disable */
                    window.sr = ScrollReveal().reveal('.grid__item', {duration : 1000, distance : '100px'});
                    /* eslint-enable */
                }

                function init () {
                    imagesLoaded(grid5, function () {
                        initIsotope();
                        initEvents();

                        if ($location.hash()) {
                            $anchorScroll();
                        }
                    });
                }

                $timeout(function () {
                    grid1 = document.querySelector('.grid-first');
                    grid2 = document.querySelector('.grid-second');
                    grid3 = document.querySelector('.grid-third');
                    grid4 = document.querySelector('.grid-forth');
                    grid5 = document.querySelector('.grid-fifth');

                    init();
                }, 100);
            }
        };
    }

    dependencies.push(TravelGrid);

    module.directive(directiveName, dependencies);
}(angular, MODULES));
