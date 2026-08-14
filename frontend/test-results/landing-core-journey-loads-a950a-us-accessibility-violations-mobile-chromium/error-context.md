# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: landing.spec.ts >> core journey loads, shows the photo gallery and has no serious accessibility violations
- Location: e2e\landing.spec.ts:4:1

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 828

- Array []
+ Array [
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.12/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#c0602a",
+               "contrastRatio": 4.24,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "10.6pt (14.08px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.24 (foreground color: #ffffff, background color: #c0602a, font size: 10.6pt (14.08px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a class=\"button button--primary\" href=\"#galeria\">",
+                 "target": Array [
+                   ".button--primary",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.24 (foreground color: #ffffff, background color: #c0602a, font size: 10.6pt (14.08px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<a class=\"button button--primary\" href=\"#galeria\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".button--primary",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f3ece2",
+               "contrastRatio": 3.81,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#8c7260",
+               "fontSize": "8.6pt (11.52px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 8.6pt (11.52px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"gallery\" id=\"galeria\" aria-labelledby=\"gallery-title\">",
+                 "target": Array [
+                   "#galeria",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 8.6pt (11.52px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"eyebrow\">Fotografias reais</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#galeria > .container > .section-heading > .eyebrow",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f3ece2",
+               "contrastRatio": 3.81,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#8c7260",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"gallery\" id=\"galeria\" aria-labelledby=\"gallery-title\">",
+                 "target": Array [
+                   "#galeria",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p>As 12 fotografias fornecidas mostram a entrada, a sala, a cozinha, a escada, o piso superior, os quartos e a suíte, o banheiro social, o lavabo e a área de serviço.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#galeria > .container > .section-heading > p:nth-child(3)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f3ece2",
+               "contrastRatio": 3.81,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#8c7260",
+               "fontSize": "10.1pt (13.44px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"gallery\" id=\"galeria\" aria-labelledby=\"gallery-title\">",
+                 "target": Array [
+                   "#galeria",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>O hall de entrada é o primeiro ambiente do sobrado no piso térreo.</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#entrada > figcaption > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f3ece2",
+               "contrastRatio": 3.81,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#8c7260",
+               "fontSize": "10.1pt (13.44px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"gallery\" id=\"galeria\" aria-labelledby=\"gallery-title\">",
+                 "target": Array [
+                   "#galeria",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>A sala de estar se abre a partir do hall de entrada.</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#sala > figcaption > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f3ece2",
+               "contrastRatio": 3.81,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#8c7260",
+               "fontSize": "10.1pt (13.44px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"gallery\" id=\"galeria\" aria-labelledby=\"gallery-title\">",
+                 "target": Array [
+                   "#galeria",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>A cozinha do sobrado aparece em fotografia real do piso térreo.</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#cozinha > figcaption > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f3ece2",
+               "contrastRatio": 3.81,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#8c7260",
+               "fontSize": "10.1pt (13.44px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"gallery\" id=\"galeria\" aria-labelledby=\"gallery-title\">",
+                 "target": Array [
+                   "#galeria",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>Duas fotografias mostram a escada, do térreo até os degraus.</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#escada > figcaption > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f3ece2",
+               "contrastRatio": 3.81,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#8c7260",
+               "fontSize": "10.1pt (13.44px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"gallery\" id=\"galeria\" aria-labelledby=\"gallery-title\">",
+                 "target": Array [
+                   "#galeria",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>Duas fotografias mostram a escada, do térreo até os degraus.</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "figure:nth-child(5) > figcaption > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f3ece2",
+               "contrastRatio": 3.81,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#8c7260",
+               "fontSize": "10.1pt (13.44px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"gallery\" id=\"galeria\" aria-labelledby=\"gallery-title\">",
+                 "target": Array [
+                   "#galeria",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>A parte superior da escada conecta a circulação do segundo pavimento.</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#superior > figcaption > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f3ece2",
+               "contrastRatio": 3.81,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#8c7260",
+               "fontSize": "10.1pt (13.44px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"gallery\" id=\"galeria\" aria-labelledby=\"gallery-title\">",
+                 "target": Array [
+                   "#galeria",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>Três fotografias mostram os dormitórios do piso superior, incluindo a entrada da suíte.</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#quartos > figcaption > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f3ece2",
+               "contrastRatio": 3.81,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#8c7260",
+               "fontSize": "10.1pt (13.44px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"gallery\" id=\"galeria\" aria-labelledby=\"gallery-title\">",
+                 "target": Array [
+                   "#galeria",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>Três fotografias mostram os dormitórios do piso superior, incluindo a entrada da suíte.</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "figure:nth-child(8) > figcaption > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f3ece2",
+               "contrastRatio": 3.81,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#8c7260",
+               "fontSize": "10.1pt (13.44px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"gallery\" id=\"galeria\" aria-labelledby=\"gallery-title\">",
+                 "target": Array [
+                   "#galeria",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>Três fotografias mostram os dormitórios do piso superior, incluindo a entrada da suíte.</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "figure:nth-child(9) > figcaption > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f3ece2",
+               "contrastRatio": 3.81,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#8c7260",
+               "fontSize": "10.1pt (13.44px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"gallery\" id=\"galeria\" aria-labelledby=\"gallery-title\">",
+                 "target": Array [
+                   "#galeria",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>O banheiro social e o lavabo aparecem em fotografias reais.</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#banheiro > figcaption > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f3ece2",
+               "contrastRatio": 3.81,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#8c7260",
+               "fontSize": "10.1pt (13.44px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"gallery\" id=\"galeria\" aria-labelledby=\"gallery-title\">",
+                 "target": Array [
+                   "#galeria",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>O banheiro social e o lavabo aparecem em fotografias reais.</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "figure:nth-child(11) > figcaption > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f3ece2",
+               "contrastRatio": 3.81,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#8c7260",
+               "fontSize": "10.1pt (13.44px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"gallery\" id=\"galeria\" aria-labelledby=\"gallery-title\">",
+                 "target": Array [
+                   "#galeria",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.81 (foreground color: #8c7260, background color: #f3ece2, font size: 10.1pt (13.44px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span>A área de serviço coberta aparece em fotografia real.</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#servico > figcaption > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f9f5f0",
+               "contrastRatio": 4.12,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#8c7260",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.12 (foreground color: #8c7260, background color: #f9f5f0, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body style=\"\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.12 (foreground color: #8c7260, background color: #f9f5f0, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p>O material disponível permite acompanhar o térreo, a subida pela escada, a circulação superior, os dormitórios, os banheiros e a área de serviço sem criar cômodos ou características que não estejam documentados.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#imovel > .container > .section-heading > p:nth-child(3)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f9f5f0",
+               "contrastRatio": 4.12,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#8c7260",
+               "fontSize": "9.8pt (13.12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.12 (foreground color: #8c7260, background color: #f9f5f0, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body style=\"\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.12 (foreground color: #8c7260, background color: #f9f5f0, font size: 9.8pt (13.12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<small>O hall de entrada é o primeiro ambiente do sobrado no piso térreo.</small>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"#entrada\"] > small",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f9f5f0",
+               "contrastRatio": 4.12,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#8c7260",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.12 (foreground color: #8c7260, background color: #f9f5f0, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body style=\"\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.12 (foreground color: #8c7260, background color: #f9f5f0, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p>As 12 fotografias reais percorrem o sobrado do hall de entrada à área de serviço: sala de estar, cozinha, escada, circulação superior, dormitórios, suíte, banheiro social e lavabo — tudo documentado nas imagens, sem características inventadas.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".comfort-grid__copy > p:nth-child(3)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f9f5f0",
+               "contrastRatio": 4.12,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#8c7260",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.12 (foreground color: #8c7260, background color: #f9f5f0, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body style=\"\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.12 (foreground color: #8c7260, background color: #f9f5f0, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p>R. Dois de Julho, 110 - São João, Araguaína - TO, 77805-130</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".location-card > div > p:nth-child(3)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f9f5f0",
+               "contrastRatio": 4.12,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#8c7260",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.12 (foreground color: #8c7260, background color: #f9f5f0, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body style=\"\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.12 (foreground color: #8c7260, background color: #f9f5f0, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p>A página usa somente os dados do anúncio e o que pode ser confirmado pelas fotografias fornecidas.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".faq__intro > p:nth-child(3)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#f9f5f0",
+               "contrastRatio": 3.91,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#c0602a",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.91 (foreground color: #c0602a, background color: #f9f5f0, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body style=\"\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.91 (foreground color: #c0602a, background color: #f9f5f0, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"https://wa.me/5563992257802?text=Ol%C3%A1!%20Tenho%20interesse%20no%20sobrado%20da%20R.%20Dois%20de%20Julho%2C%20110.%20Gostaria%20de%20agendar%20uma%20visita.\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-link\">Perguntar pelo WhatsApp →</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-link",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#2c1a0e",
+               "contrastRatio": 4.37,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#8b817a",
+               "fontSize": "9.4pt (12.48px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.37 (foreground color: #8b817a, background color: #2c1a0e, font size: 9.4pt (12.48px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<footer class=\"footer\">",
+                 "target": Array [
+                   ".footer",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.37 (foreground color: #8b817a, background color: #2c1a0e, font size: 9.4pt (12.48px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a class=\"footer__credit\" href=\"https://MtsFerreira.dev\" target=\"_blank\" rel=\"noopener noreferrer\">Desenvolvido por MtsFerreira</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".footer__credit",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#c0602a",
+               "contrastRatio": 4.24,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "9.8pt (13.12px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 4.24 (foreground color: #ffffff, background color: #c0602a, font size: 9.8pt (13.12px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"#galeria\">",
+                 "target": Array [
+                   "aside > a[href$=\"#galeria\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 4.24 (foreground color: #ffffff, background color: #c0602a, font size: 9.8pt (13.12px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"#galeria\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "aside > a[href$=\"#galeria\"]",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - link "Pular para o conteúdo" [ref=e2] [cursor=pointer]:
    - /url: "#conteudo"
  - banner [ref=e3]:
    - link "São João, início" [ref=e4] [cursor=pointer]:
      - /url: "#inicio"
      - generic [ref=e9]:
        - generic [ref=e10]: São João
        - generic [ref=e11]: Araguaína - TO
    - link "(63) 99225-7802" [ref=e12] [cursor=pointer]:
      - /url: https://wa.me/5563992257802?text=Ol%C3%A1!%20Tenho%20interesse%20no%20sobrado%20da%20R.%20Dois%20de%20Julho%2C%20110.%20Gostaria%20de%20agendar%20uma%20visita.
    - button "Abrir menu" [ref=e15] [cursor=pointer]
  - main [ref=e17]:
    - region [ref=e18]:
      - img "Hall de entrada do sobrado" [ref=e19]
      - generic [ref=e21]:
        - paragraph [ref=e22]: Sobrado para alugar
        - heading "Seu novo lar espera por você." [level=1] [ref=e23]
        - paragraph [ref=e24]: Conheça os ambientes pelas fotografias reais do sobrado no bairro São João, em Araguaína.
        - generic "Resumo do imóvel" [ref=e25]:
          - strong [ref=e26]: R$ 2.400/mês
          - generic [ref=e27]: R. Dois de Julho, 110 - São João, Araguaína - TO, 77805-130
          - generic [ref=e32]:
            - generic [ref=e33]:
              - generic [ref=e37]: "3"
              - generic [ref=e38]: quartos
            - generic [ref=e39]:
              - generic [ref=e44]: "2"
              - generic [ref=e45]: banheiros
            - generic [ref=e46]:
              - generic [ref=e50]: "1"
              - generic [ref=e51]: lavabo
            - generic [ref=e52]:
              - generic [ref=e56]: "2"
              - generic [ref=e57]: vagas
        - generic [ref=e58]:
          - link "Ver fotos" [ref=e59] [cursor=pointer]:
            - /url: "#galeria"
          - link "Agendar visita" [ref=e62] [cursor=pointer]:
            - /url: https://wa.me/5563992257802?text=Ol%C3%A1!%20Tenho%20interesse%20no%20sobrado%20da%20R.%20Dois%20de%20Julho%2C%20110.%20Gostaria%20de%20agendar%20uma%20visita.
          - link "WhatsApp (63) 99225-7802" [ref=e65] [cursor=pointer]:
            - /url: https://wa.me/5563992257802?text=Ol%C3%A1!%20Tenho%20interesse%20no%20sobrado%20da%20R.%20Dois%20de%20Julho%2C%20110.%20Gostaria%20de%20agendar%20uma%20visita.
    - region [ref=e68]:
      - generic [ref=e69]:
        - generic [ref=e70]:
          - paragraph [ref=e71]: Fotografias reais
          - heading "As fotos do sobrado" [level=2] [ref=e72]
          - paragraph [ref=e73]: As 12 fotografias fornecidas mostram a entrada, a sala, a cozinha, a escada, o piso superior, os quartos e a suíte, o banheiro social, o lavabo e a área de serviço.
        - generic [ref=e74]:
          - figure "Entrada O hall de entrada é o primeiro ambiente do sobrado no piso térreo." [ref=e75]:
            - 'button "Ampliar foto: Hall de entrada do sobrado" [active] [ref=e76]':
              - img "Hall de entrada do sobrado" [ref=e77]
            - generic [ref=e82]:
              - heading "Entrada" [level=3] [ref=e83]
              - generic [ref=e84]: O hall de entrada é o primeiro ambiente do sobrado no piso térreo.
          - figure "Sala A sala de estar se abre a partir do hall de entrada." [ref=e85]:
            - 'button "Ampliar foto: Sala de estar vista do hall de entrada" [ref=e86]':
              - img "Sala de estar vista do hall de entrada" [ref=e87]
            - generic [ref=e92]:
              - heading "Sala" [level=3] [ref=e93]
              - generic [ref=e94]: A sala de estar se abre a partir do hall de entrada.
          - figure "Cozinha A cozinha do sobrado aparece em fotografia real do piso térreo." [ref=e95]:
            - 'button "Ampliar foto: Cozinha do sobrado" [ref=e96]':
              - img "Cozinha do sobrado" [ref=e97]
            - generic [ref=e102]:
              - heading "Cozinha" [level=3] [ref=e103]
              - generic [ref=e104]: A cozinha do sobrado aparece em fotografia real do piso térreo.
          - figure "Escada Duas fotografias mostram a escada, do térreo até os degraus." [ref=e105]:
            - 'button "Ampliar foto: Escada do sobrado vista do térreo" [ref=e106]':
              - img "Escada do sobrado vista do térreo" [ref=e107]
            - generic [ref=e112]:
              - heading "Escada" [level=3] [ref=e113]
              - generic [ref=e114]: Duas fotografias mostram a escada, do térreo até os degraus.
          - figure "Escada Duas fotografias mostram a escada, do térreo até os degraus." [ref=e115]:
            - 'button "Ampliar foto: Degraus da escada do sobrado vistos de perto" [ref=e116]':
              - img "Degraus da escada do sobrado vistos de perto" [ref=e117]
            - generic [ref=e122]:
              - heading "Escada" [level=3] [ref=e123]
              - generic [ref=e124]: Duas fotografias mostram a escada, do térreo até os degraus.
          - figure "Piso superior A parte superior da escada conecta a circulação do segundo pavimento." [ref=e125]:
            - 'button "Ampliar foto: Parte superior da escada e circulação do piso superior" [ref=e126]':
              - img "Parte superior da escada e circulação do piso superior" [ref=e127]
            - generic [ref=e132]:
              - heading "Piso superior" [level=3] [ref=e133]
              - generic [ref=e134]: A parte superior da escada conecta a circulação do segundo pavimento.
          - figure "Quartos Três fotografias mostram os dormitórios do piso superior, incluindo a entrada da suíte." [ref=e135]:
            - 'button "Ampliar foto: Primeiro quarto do sobrado" [ref=e136]':
              - img "Primeiro quarto do sobrado" [ref=e137]
            - generic [ref=e142]:
              - heading "Quartos" [level=3] [ref=e143]
              - generic [ref=e144]: Três fotografias mostram os dormitórios do piso superior, incluindo a entrada da suíte.
          - figure "Quartos Três fotografias mostram os dormitórios do piso superior, incluindo a entrada da suíte." [ref=e145]:
            - 'button "Ampliar foto: Segundo quarto do sobrado" [ref=e146]':
              - img "Segundo quarto do sobrado" [ref=e147]
            - generic [ref=e152]:
              - heading "Quartos" [level=3] [ref=e153]
              - generic [ref=e154]: Três fotografias mostram os dormitórios do piso superior, incluindo a entrada da suíte.
          - figure "Quartos Três fotografias mostram os dormitórios do piso superior, incluindo a entrada da suíte." [ref=e155]:
            - 'button "Ampliar foto: Entrada da suíte no piso superior" [ref=e156]':
              - img "Entrada da suíte no piso superior" [ref=e157]
            - generic [ref=e162]:
              - heading "Quartos" [level=3] [ref=e163]
              - generic [ref=e164]: Três fotografias mostram os dormitórios do piso superior, incluindo a entrada da suíte.
          - figure "Banheiros O banheiro social e o lavabo aparecem em fotografias reais." [ref=e165]:
            - 'button "Ampliar foto: Banheiro social do sobrado" [ref=e166]':
              - img "Banheiro social do sobrado" [ref=e167]
            - generic [ref=e172]:
              - heading "Banheiros" [level=3] [ref=e173]
              - generic [ref=e174]: O banheiro social e o lavabo aparecem em fotografias reais.
          - figure "Banheiros O banheiro social e o lavabo aparecem em fotografias reais." [ref=e175]:
            - 'button "Ampliar foto: Lavabo do sobrado" [ref=e176]':
              - img "Lavabo do sobrado" [ref=e177]
            - generic [ref=e182]:
              - heading "Banheiros" [level=3] [ref=e183]
              - generic [ref=e184]: O banheiro social e o lavabo aparecem em fotografias reais.
          - figure "Área de serviço A área de serviço coberta aparece em fotografia real." [ref=e185]:
            - 'button "Ampliar foto: Área de serviço coberta do sobrado" [ref=e186]':
              - img "Área de serviço coberta do sobrado" [ref=e187]
            - generic [ref=e192]:
              - heading "Área de serviço" [level=3] [ref=e193]
              - generic [ref=e194]: A área de serviço coberta aparece em fotografia real.
    - region [ref=e195]:
      - generic [ref=e196]:
        - generic [ref=e197]:
          - paragraph [ref=e198]: Conheça cada detalhe
          - heading "As fotos mostram o caminho antes da visita presencial" [level=2] [ref=e199]
          - paragraph [ref=e200]: O material disponível permite acompanhar o térreo, a subida pela escada, a circulação superior, os dormitórios, os banheiros e a área de serviço sem criar cômodos ou características que não estejam documentados.
        - generic "Cômodos em destaque" [ref=e201]:
          - link "1 Entrada O hall de entrada é o primeiro ambiente do sobrado no piso térreo." [ref=e202] [cursor=pointer]:
            - /url: "#entrada"
            - generic [ref=e203]: "1"
            - strong [ref=e205]: Entrada
            - generic [ref=e206]: O hall de entrada é o primeiro ambiente do sobrado no piso térreo.
          - link "2 Sala A sala de estar se abre a partir do hall de entrada." [ref=e207] [cursor=pointer]:
            - /url: "#sala"
            - generic [ref=e208]: "2"
            - strong [ref=e210]: Sala
            - generic [ref=e211]: A sala de estar se abre a partir do hall de entrada.
          - link "3 Cozinha A cozinha do sobrado aparece em fotografia real do piso térreo." [ref=e212] [cursor=pointer]:
            - /url: "#cozinha"
            - generic [ref=e213]: "3"
            - strong [ref=e215]: Cozinha
            - generic [ref=e216]: A cozinha do sobrado aparece em fotografia real do piso térreo.
          - link "4 Escada Duas fotografias mostram a escada, do térreo até os degraus." [ref=e217] [cursor=pointer]:
            - /url: "#escada"
            - generic [ref=e218]: "4"
            - strong [ref=e220]: Escada
            - generic [ref=e221]: Duas fotografias mostram a escada, do térreo até os degraus.
          - link "5 Piso superior A parte superior da escada conecta a circulação do segundo pavimento." [ref=e222] [cursor=pointer]:
            - /url: "#superior"
            - generic [ref=e223]: "5"
            - strong [ref=e225]: Piso superior
            - generic [ref=e226]: A parte superior da escada conecta a circulação do segundo pavimento.
          - link "6 Quartos Três fotografias mostram os dormitórios do piso superior, incluindo a entrada da suíte." [ref=e227] [cursor=pointer]:
            - /url: "#quartos"
            - generic [ref=e228]: "6"
            - strong [ref=e230]: Quartos
            - generic [ref=e231]: Três fotografias mostram os dormitórios do piso superior, incluindo a entrada da suíte.
          - link "7 Banheiros O banheiro social e o lavabo aparecem em fotografias reais." [ref=e232] [cursor=pointer]:
            - /url: "#banheiro"
            - generic [ref=e233]: "7"
            - strong [ref=e235]: Banheiros
            - generic [ref=e236]: O banheiro social e o lavabo aparecem em fotografias reais.
          - link "8 Área de serviço A área de serviço coberta aparece em fotografia real." [ref=e237] [cursor=pointer]:
            - /url: "#servico"
            - generic [ref=e238]: "8"
            - strong [ref=e240]: Área de serviço
            - generic [ref=e241]: A área de serviço coberta aparece em fotografia real.
        - generic [ref=e242]:
          - img "Cozinha do sobrado" [ref=e244]
          - generic [ref=e245]:
            - paragraph [ref=e246]: Espaço para viver bem
            - heading "O que aparece nas fotografias do sobrado" [level=2] [ref=e247]
            - paragraph [ref=e248]: "As 12 fotografias reais percorrem o sobrado do hall de entrada à área de serviço: sala de estar, cozinha, escada, circulação superior, dormitórios, suíte, banheiro social e lavabo — tudo documentado nas imagens, sem características inventadas."
            - list [ref=e249]:
              - listitem [ref=e250]: Hall de entrada com escada ao fundo
              - listitem [ref=e254]: Sala de estar no piso térreo
              - listitem [ref=e258]: Cozinha em fotografia real
              - listitem [ref=e262]: Escada de acesso ao piso superior
              - listitem [ref=e266]: Dormitórios e entrada da suíte
              - listitem [ref=e270]: Banheiro social, lavabo e área de serviço
    - region [ref=e274]:
      - generic [ref=e275]:
        - generic [ref=e279]:
          - paragraph [ref=e280]: Localização
          - heading "São João, Araguaína" [level=2] [ref=e281]
          - paragraph [ref=e282]: R. Dois de Julho, 110 - São João, Araguaína - TO, 77805-130
        - link "Abrir rota" [ref=e283] [cursor=pointer]:
          - /url: https://www.google.com/maps/search/?api=1&query=R.%20Dois%20de%20Julho%2C%20110%20-%20S%C3%A3o%20Jo%C3%A3o%2C%20Aragua%C3%ADna%20-%20TO%2C%2077805-130
    - region [ref=e286]:
      - generic [ref=e287]:
        - generic [ref=e288]:
          - paragraph [ref=e289]: Informações diretas
          - heading "Antes de marcar a visita" [level=2] [ref=e290]
          - paragraph [ref=e291]: A página usa somente os dados do anúncio e o que pode ser confirmado pelas fotografias fornecidas.
          - link "Perguntar pelo WhatsApp →" [ref=e292] [cursor=pointer]:
            - /url: https://wa.me/5563992257802?text=Ol%C3%A1!%20Tenho%20interesse%20no%20sobrado%20da%20R.%20Dois%20de%20Julho%2C%20110.%20Gostaria%20de%20agendar%20uma%20visita.
        - generic [ref=e293]:
          - group [ref=e294]:
            - generic "Qual é o valor do aluguel?" [ref=e295] [cursor=pointer]
          - group [ref=e296]:
            - generic "Quantos quartos, banheiros e vagas o imóvel tem?" [ref=e297] [cursor=pointer]
          - group [ref=e298]:
            - generic "Onde fica o sobrado?" [ref=e299] [cursor=pointer]
          - group [ref=e300]:
            - generic "Como agendar uma visita?" [ref=e301] [cursor=pointer]
    - region [ref=e302]:
      - generic [ref=e303]:
        - generic [ref=e304]:
          - paragraph [ref=e305]: Pronto para conhecer?
          - heading "Depois de ver as fotos, agende a visita presencial." [level=2] [ref=e306]
          - paragraph [ref=e307]: O contato abre diretamente no WhatsApp com uma mensagem sobre este endereço.
        - generic [ref=e308]:
          - link "Agendar visita" [ref=e309] [cursor=pointer]:
            - /url: https://wa.me/5563992257802?text=Ol%C3%A1!%20Tenho%20interesse%20no%20sobrado%20da%20R.%20Dois%20de%20Julho%2C%20110.%20Gostaria%20de%20agendar%20uma%20visita.
          - link "WhatsApp (63) 99225-7802" [ref=e312] [cursor=pointer]:
            - /url: https://wa.me/5563992257802?text=Ol%C3%A1!%20Tenho%20interesse%20no%20sobrado%20da%20R.%20Dois%20de%20Julho%2C%20110.%20Gostaria%20de%20agendar%20uma%20visita.
  - contentinfo [ref=e315]:
    - generic [ref=e316]:
      - generic [ref=e317]: São João · Araguaína - TO
      - navigation "Rodapé" [ref=e318]:
        - link "Início" [ref=e319] [cursor=pointer]:
          - /url: "#inicio"
        - link "O imóvel" [ref=e320] [cursor=pointer]:
          - /url: "#imovel"
        - link "Galeria" [ref=e321] [cursor=pointer]:
          - /url: "#galeria"
        - link "Localização" [ref=e322] [cursor=pointer]:
          - /url: "#localizacao"
        - link "Contato" [ref=e323] [cursor=pointer]:
          - /url: "#contato"
      - link "Desenvolvido por MtsFerreira" [ref=e324] [cursor=pointer]:
        - /url: https://MtsFerreira.dev
  - complementary "Ações rápidas" [ref=e325]:
    - link "Ver fotos" [ref=e326] [cursor=pointer]:
      - /url: "#galeria"
    - link "WhatsApp" [ref=e330] [cursor=pointer]:
      - /url: https://wa.me/5563992257802?text=Ol%C3%A1!%20Tenho%20interesse%20no%20sobrado%20da%20R.%20Dois%20de%20Julho%2C%20110.%20Gostaria%20de%20agendar%20uma%20visita.
  - generic [ref=e337] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e338]
    - generic [ref=e342]:
      - button "Open issues overlay" [ref=e343]:
        - generic [ref=e344]:
          - generic [ref=e345]: "0"
          - generic [ref=e346]: "1"
        - generic [ref=e347]: Issue
      - button "Collapse issues badge" [ref=e348]
  - alert [ref=e351]
```

# Test source

```ts
  1  | import AxeBuilder from '@axe-core/playwright';
  2  | import { expect, test } from '@playwright/test';
  3  | 
  4  | test('core journey loads, shows the photo gallery and has no serious accessibility violations', async ({ page }) => {
  5  |   await page.goto('/');
  6  |   await expect(page).toHaveTitle(/Sobrado para Alugar/i);
  7  |   await expect(page.getByRole('heading', { level: 1 })).toContainText('Seu novo lar');
  8  | 
  9  |   const hero = page.getByLabel('Seu novo lar espera por você');
  10 |   await hero.getByRole('link', { name: 'Ver fotos' }).click();
  11 |   await expect(page).toHaveURL(/#galeria$/);
  12 |   await expect(page.locator('#galeria')).toBeVisible();
  13 | 
  14 |   await page.locator('#quartos').scrollIntoViewIfNeeded();
  15 |   await expect(page.locator('#quartos').getByRole('heading', { name: 'Quartos' })).toBeVisible();
  16 | 
  17 |   await page.getByRole('button', { name: 'Hall de entrada do sobrado' }).click();
  18 |   const dialog = page.getByRole('dialog');
  19 |   await expect(dialog).toBeVisible();
  20 |   await expect(dialog).toContainText('1 / 12');
  21 |   await page.keyboard.press('ArrowRight');
  22 |   await expect(dialog).toContainText('2 / 12');
  23 |   await dialog.getByRole('button', { name: 'Fechar galeria' }).click();
  24 |   await expect(dialog).not.toBeVisible();
  25 | 
  26 |   const scan = await new AxeBuilder({ page }).analyze();
  27 |   const blocking = scan.violations.filter((violation) => ['critical', 'serious'].includes(violation.impact ?? ''));
> 28 |   expect(blocking).toEqual([]);
     |                    ^ Error: expect(received).toEqual(expected) // deep equality
  29 | });
  30 | 
  31 | test('mobile navigation and contact bar stay available', async ({ page }, testInfo) => {
  32 |   test.skip(!testInfo.project.name.includes('mobile'), 'mobile-only assertion');
  33 |   await page.goto('/');
  34 |   await page.getByRole('button', { name: 'Abrir menu' }).click();
  35 |   await expect(page.getByRole('navigation', { name: 'Principal' })).toBeVisible();
  36 |   await expect(page.getByRole('link', { name: /WhatsApp/i }).last()).toBeVisible();
  37 | });
```