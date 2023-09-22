(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{506:function(n,s,a){"use strict";a.r(s);var e=a(13),t=Object(e.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"модель-прецедентів"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#модель-прецедентів"}},[n._v("#")]),n._v(" Модель прецедентів")]),n._v(" "),s("p",[n._v("В цьому файлі необхідно перелічити всі документи, розроблені в проекті та дати посилання на них.")]),n._v(" "),s("p",[s("em",[n._v("Модель прецедентів повинна містити загальні оглядові діаграми та специфікації прецедентів.")])]),n._v(" "),s("p",[n._v("Вбудовування зображень діаграм здійснюється з використанням сервісу "),s("a",{attrs:{href:"https://plantuml.com/",target:"_blank",rel:"noopener noreferrer"}},[n._v("plantuml.com"),s("OutboundLink")],1),n._v(".")]),n._v(" "),s("p",[n._v("В markdown-файлі використовується опис діаграми")]),n._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[n._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("<")]),n._v("center")]),n._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[n._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[n._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v('"')]),n._v("\n    border-radius:4px;\n    border: 1px solid #cfd7e6;\n    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);\n    padding: 1em;"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v('"')])])]),n._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(">")])]),n._v("\n\n@startuml\n\n"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[n._v("    right header\n        <font size=24 color=black>Package: <b>UCD_3.0\n    end header")]),n._v("\n\n"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[n._v("    title\n        <font size=18 color=black>UC_8. Редагувати конфігурацію порталу\n        <font size=16 color=black>Діаграма прецедентів\n    end title")]),n._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[n._v('    actor "Користувач" as User #eeeeaa')]),n._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[n._v('    package UCD_1{\n        usecase "<b>UC_1</b>\\nПереглянути список \\nзвітів" as UC_1 #aaeeaa\n    }')]),n._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[n._v('    usecase "<b>UC_1.1</b>\\nЗастосувати фільтр" as UC_1.1\n    usecase "<b>UC_1.2</b>\\nПереглянути метадані \\nзвіту" as UC_1.2  \n    usecase "<b>UC_1.2.1</b>\\nДати оцінку звіту" as UC_1.2.1  \n    usecase "<b>UC_1.2.2</b>\\nПереглянути інформацію \\nпро авторів звіту" as UC_1.2.2')]),n._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[n._v('    package UCD_1 {\n        usecase "<b>UC_4</b>\\nВикликати звіт" as UC_4 #aaeeaa\n    }')]),n._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[n._v('    usecase "<b>UC_1.1.1</b>\\n Використати \\nпошукові теги" as UC_1.1.1  \n    usecase "<b>UC_1.1.2</b>\\n Використати \\nрядок пошуку" as UC_1.1.2\n    usecase "<b>UC_1.1.3</b>\\n Використати \\nавторів" as UC_1.1.3  ')]),n._v("\n    \n    \n    \n"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[n._v("    User -> UC_1\n    UC_1.1 .u.> UC_1 :extends\n    UC_1.2 .u.> UC_1 :extends\n    UC_4 .d.> UC_1.2 :extends\n    UC_1.2 .> UC_1.2 :extends\n    UC_1.2.1 .u.> UC_1.2 :extends\n    UC_1.2.2 .u.> UC_1.2 :extends\n    UC_1 ..> UC_1.2.2 :extends")]),n._v("\n    \n    \n"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[n._v("    UC_1.1.1 -u-|> UC_1.1\n    UC_1.1.2 -u-|> UC_1.1\n    UC_1.1.3 -u-|> UC_1.1")]),n._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[n._v("    right footer\n        Аналітичний портал. Модель прецедентів.\n        НТУУ КПІ ім.І.Сікорського\n        Киів-2020\n    end footer")]),n._v("\n\n@enduml\n\n"),s("span",{pre:!0,attrs:{class:"token bold"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("**")]),s("span",{pre:!0,attrs:{class:"token content"}},[n._v("Діаграма прецедентів")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("**")])]),n._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("</")]),n._v("center")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(">")])]),n._v("\n")])])]),s("p",[n._v("яка буде відображена наступним чином")]),n._v(" "),s("center",{staticStyle:{"border-radius":"4px",border:"1px solid #cfd7e6","box-shadow":"0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025)",padding:"1em"}},[s("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/ZLNTQXf15BxFKnpCjTliAYK48u7q0NhZNK5MtIHIwvRT5Kf_G6CmlGXDAS50Q4dRl81efTQ_liAPD-etixzQrtOlXfqvPxxlEpypS-HwfkErNZHsTWYVKpyzy-ZCCckMenRaLpYncnwvzTVMeP6dgjsmdSDAmwm-Bpx5O9vQ1rIe54l7JyevRK_jifgr44JDlRhNi3RXwVihUANZyhv6_9N7_8C7F19T7l90dFE4UCfBNeWBqPVBeetbdkYB3yI_UIdQy1dmJ7GtaZnU8U4RO4XmOF2S1q30xrZq5EiO9ETm64Q1-EBzGCogPpkKuJl9oHFHWQ-lyJ93faibrt9ery9dccg36bxwQIAP8lrD9B7bMbNJjIYZibVM2uygnMTDleSMwE4Huhc6cgwANtGGA0YHXId1woSF4RvIwZC3W7PDCs9-5_El4saXrIs48mG4qqcaMYLv9gw0tewmDNqpbB5LDV8xLgMHvLo8Vb9vDyOsqeGQaTIRi0-MikwyuAdeqaOiJKz7swvMueeBLTfvr5_mblsn94GmLBbgowIdS1ifLQVKikS3IPzuWXwVgJ48DM08yVF_NzymRHJ0HjqQGCkWiFWULPVd2ZI4TPcFIQBYwPcCwfvEW3HTe-ooNMEkPBBq85aRm7F_LBzIYoHcBf2yDgY3cIqgBtz1kPFMqln5Eh1UUJZkRcmrjbZpfDK26_msxjrcJJAdU1ZRFKYBZElcHDHX6REjxDjYyXo75KYrvFws95w84zls4Yy4VyI1bFTlNzP7N68suLyhLpEkzSze1dd1ucf9kNEr6F4BV-S7VY1SjVVSaqTphd5Fus_uKns1VhXIpJlYPRpj3lG0oXfxHlmK1MftZZ31K_S7",alt:"uml diagram"}}),n._v(" "),s("p",[s("strong",[n._v("Діаграма прецедентів")])])])],1)}),[],!1,null,null,null);s.default=t.exports}}]);