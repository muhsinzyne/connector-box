
export class MainMenuItem {
  label?: string;
  to?: string;
  target?: string;
  active?: string;
  children: MainMenuItem[];


  public static getMenuItems(): MainMenuItem[] {

    var mItem: MainMenuItem[] = Object.assign(new Array<MainMenuItem>(), this.getMenuItemsJson());
    return mItem;
  }




  classNames(): string {
    var classNames: string[] = [];
    classNames.push('menu-item');
    classNames.push('me-lg-1');
    if(this.children != null || this.children != undefined) {
      classNames.push('menu-lg-down-accordion');
      classNames.push('menu-dropdown');
    }
    return classNames.join(' ');

  }


  public static getMenuItemsJson(): any {
    return [
      {
        "label": "Dashboard",
        "to": "/dashboard",
        "target": "_blank",
        "active": "active",
        "children": [],
      },
      {
        "label": "Layout Builder",
        "to": "/builder",
        "target": "_blank",
        "active": "active",
        "children": [],
      },
      {
        "label": "Demo Menu One",
        "to": "/demo_leve_1",
        "target": "_blank",
        "active": "active",
        "children": [
          {
            "label": "Demo Level 2",
            "to": "/demo_level_2",
            "target": "_blank",
            "active": "active",
            "children": [
              {
                "label": "Dashboard",
                "to": "/dashboard",
                "target": "_blank",
                "active": "active",
                "children": [],
              },
              {
                "label": "Layout Builder",
                "to": "/builder",
                "target": "_blank",
                "active": "active",
                "children": [],
              },
              {
                "label": "Demo Menu One",
                "to": "/demo_leve_1",
                "target": "_blank",
                "active": "active",
                "children": [
                  {
                    "label": "Demo Level 2",
                    "to": "/demo_level_2",
                    "target": "_blank",
                    "active": "active",
                    "children": [],
                  },
                ]
              },
            ],
          },

          {
            "label": "Demo Level Second",
            "to": "/demo_level_2",
            "target": "_blank",
            "active": "active",
            "children": [
              {
                "label": "Dashboard",
                "to": "/dashboard",
                "target": "_blank",
                "active": "active",
                "children": [],
              },
              {
                "label": "Layout Builder",
                "to": "/builder",
                "target": "_blank",
                "active": "active",
                "children": [],
              },
              {
                "label": "Demo Menu One",
                "to": "/demo_leve_1",
                "target": "_blank",
                "active": "active",
                "children": [
                  {
                    "label": "Demo Level 2",
                    "to": "/demo_level_2",
                    "target": "_blank",
                    "active": "active",
                    "children": [
                      {
                        "label": "Dashboard",
                        "to": "/dashboard",
                        "target": "_blank",
                        "active": "active",
                        "children": [],
                      },
                      {
                        "label": "Layout Builder",
                        "to": "/builder",
                        "target": "_blank",
                        "active": "active",
                        "children": [],
                      },
                      {
                        "label": "Demo Menu One",
                        "to": "/demo_leve_1",
                        "target": "_blank",
                        "active": "active",
                        "children": [
                          {
                            "label": "Demo Level 2",
                            "to": "/demo_level_2",
                            "target": "_blank",
                            "active": "active",
                            "children": [
                              {
                                "label": "Dashboard",
                                "to": "/dashboard",
                                "target": "_blank",
                                "active": "active",
                                "children": [],
                              },
                              {
                                "label": "Layout Builder",
                                "to": "/builder",
                                "target": "_blank",
                                "active": "active",
                                "children": [],
                              },
                              {
                                "label": "Demo Menu One",
                                "to": "/demo_leve_1",
                                "target": "_blank",
                                "active": "active",
                                "children": [
                                  {
                                    "label": "Demo Level 2",
                                    "to": "/demo_level_2",
                                    "target": "_blank",
                                    "active": "active",
                                    "children": [],
                                  },
                                ]
                              },
                            ],
                          },

                          {
                            "label": "Demo Level Second",
                            "to": "/demo_level_2",
                            "target": "_blank",
                            "active": "active",
                            "children": [
                              {
                                "label": "Dashboard",
                                "to": "/dashboard",
                                "target": "_blank",
                                "active": "active",
                                "children": [],
                              },
                              {
                                "label": "Layout Builder",
                                "to": "/builder",
                                "target": "_blank",
                                "active": "active",
                                "children": [],
                              },
                              {
                                "label": "Demo Menu One",
                                "to": "/demo_leve_1",
                                "target": "_blank",
                                "active": "active",
                                "children": [
                                  {
                                    "label": "Demo Level 2",
                                    "to": "/demo_level_2",
                                    "target": "_blank",
                                    "active": "active",
                                    "children": [],
                                  },
                                ]
                              },
                            ],
                          },
                        ]
                      },
                    ],
                  },
                ]
              },
            ],
          },
        ]
      },
    ];
  }

}
