export type Lang = {
  extension: string;
  logo: string;
  metaMarker: string;
};

// Icons from https://icons8.com/icons/set/python
export const langs: Record<string, Lang> = {
  python: {
    extension: "py",
    metaMarker: "###",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADiElEQVRoge2au08UURSHzxhUEkmAoKL+Bz4aiUBjY6NixMK3hlgpasTOaGNjLRbGWFqgsTAm1j6wUSyMCEYjFGIDBT6ABRKfiXwWcyY7wO7MvXPv7lLwS25mZ+bcc76zc2fmPkZkWUtLgU9nQJOI7BGRFhHZLCJ1IlKrp2e0DItIv4g8C4Lgtc/4zgIOAAPY6wNwqNL8AqwEemJgX4FbwElgC9AIVGtp1GMngJvAeKzeA2BVJRO5ryAzwAUbGKAKOAPk1MfDUrImgbQrQA7Y7uBnGzCpvg76ZDQFeKzBu3R/HzCmpc3S1zn19aQ0tMnBpzT4Wt0fi7X5UUtfa7XeVFaeFVkriki9iEgQBBMOPmSBj3pXX9aK/vrYfhswqmWvq7+yyXdgV39VPgBM7IIg8NqLWCiXe2RJKfMVMf2Hy9XuC14RfeueB/pib95MsgUq4iYHvCR835j9+cAmYNAFPktCFq4GgI1pzmqAYa3wCTgM1CZW8qSkhIFa4AgwomZDQE2Ssxtq+BFoKBl14dipVw5oUDaA7mJGdcBP4B+woyS0CbJogs3AnLIubi2EXWqA3pKQpsg0EbV9ruano2Pxp9ZO3T7yCWgiYJP+nDWsEjFGzPMSadLtG0euLDplGbtft4vHQYTDVIBGH2QmInzUXwH+aGyjcQywQe2/FDr5W09WW8LsBp4CE0We+6a6ZhGzWuv88pIIcNURfhboxX5EmZiIVdMCdqn9X+ASsN4GxkXkm9Z4oZPv9WSLobNetb/snTQ9dqvGfhcdiz+1BnXbbOivVbd3fMBZKmKMmOcl0qdb0ymZGhGRIAgm3bmsFTG+WnSGfBdlDki9KtHd6pvQIG6LMv6gWIcW6Fa+1E5jJRIhnDYa0tDXkwxrYoYjhF3nuiK2ZUtEW8tR4LOGHQLWpFXaiMXMugGEb/WTNrCKBa8CzgIvyM8oVjKRKWXpxHSoayrbRLwGLyC/2SXINJms81/L81qmKtf8V9mvCA7rKKUCynQTU2QdxfWh4HJFcgqwzsGHqI9oCFCRhZ5ojfyYZb1OERnT0qnHji/wWT6RXwydxm0xtIlwVRhgv09GG4h7CjALdGG3PL0auKh1Ae6WkjUNpor5Hwx8A24DHcBWwiFp9MHABj3WoTbfY/V6vHc9MibUTrZPON4C7T4YSvVRTbPkP6qJhgHTWoYknGB7EgTBgM/4y1pK+g/ekrXOaxsDYgAAAABJRU5ErkJggg==",
  },
  javascript: {
    extension: "js",
    metaMarker: "///",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACgUlEQVRoge2ZPWgUQRiG37lcokZF/EFBkyYgqGUQMU0KOxHERrSwSKVYWIhCaksLC8FKAxaRSCAIphcNdpJCCYrdqY2miUJi8Ix3j8XOwTLZu9vb272bYt7m7ub7vpn32Zn9mVspKCioIwEHgXlgHf+0CbwEDqcBme+z2TRaSAPSmImTecxwngJOWG/raZIB6IGvTGrmr9QPM0UogPimAOKbAohvCiC+KYD4pgDimwKIbyoX2bm7bzDGmIScc5KmJI1LGpa0JmlZ0owxZrmrwfPaWLn7UydWAh632M7+A6Yz++shyHSrTXlMl9L4K3RpNRMwIOmO07wo6bOkSUlnbdtPSbuyDlL4jADHndBCLFYCZoHnwJG0/voyI5KGnN+rjS/GmDowZYypdTVCj2ZkL7AVC/0GLuTqrxcgNraYcGK/Bs4D2y7THfvrIcgY8CMBBuAjcDUJyDsQGx8F3jWBwc7aPu9BbE4JuAKsNIF5C5TdPr0DcfIniP5td3WzY395gdgj3RFIrNa96y917C/DoLuB+8A1p33UMVN14oeIXmFcTuhzh1NbKRQEuAh8sSV/gFtEL4r2AzOOma9O3Xfb/gs47fQ76dSuFA3ygvSaszUDwHsn9hd4CtwGHgBrTvxJ0SBHgUoKiDowEasbBzZSHoAqcKpQEJs/AnxoYaQG3E2oOwOstoHYxDmHCgOxNYPAdWCJaM1XgW/AHLGZSKg7ANwjupPXYgAV4BEwltlfFpA8BAwRXSR2tslLDdJYuz6+DD3WWHJuLGk/8kzSDUmfgC1JG0Ub7EDD9vNV20ygDDxscxL2S3XgDTDi+k587gcGJe3p6tgVo6oxZtuyCgoqUP8BOUAqL+foyOsAAAAASUVORK5CYII=",
  },
  bash: {
    extension: "sh",
    metaMarker: "###",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAAs0lEQVRYhe2WQQ6CMBBFZ4xL1ki4qFsv6M4I3sP9c1MTrJZY2lIS5i37CfP7Z9pUxDAqo/4CQNGCqh81DyWL/cMxJPhOUwklu90ESs/Cm+0msJsZiDIANNUMABcRuQJ9bhN+Ifx+AQ0wOGkAuhz/jfoQaIGbkx+xSSQbcFo3SeIOtKkGqp+CL2ZacJq0YFy1BXNDSICsBtz6+dfOVzPgtMUXUZYhVNXnUgMhqp8Cew8YRnVe9PQlQJXpxrIAAAAASUVORK5CYII=",
  },
  golang: {
    extension: "go",
    metaMarker: "//",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEpklEQVRoge2aW2wVRRjHv1OKtqWCQtRgIonXBy9oMJJ4CzVSSiIPXhJ98oKJ+oCJIUDFxFYUfDNBEqKJXDQaedJANNH4gA8UjAkQNRYTemqgGprgg5VSaAttfz7sf3Om23NOd3bnUB/4J5uZ/eb7vv/858zuzuwes8v4f6EQMhlwr5m1mdl9ZnaXmV1jZleLZ0BHt5kdNbPvC4XCLyH5cwFoANYAPfijR7GNMy1iGVB0OtYPfAg8BywGrpfQBtXvAZ4HPpJvjCLQcqk6vQrYDwwBfwNfAhfVkV+BJ4A6j3x1wJOKRbm+Uu6z4no8tIgtFabGGNABzM6RezbQqVzlsDmUiFVKOAKsBxYCC4DVIacD0KKcC8SxQZwE+WWAH5RsfYX2JuBdoBcYVbmJMhewfN+Rz4iujbfL+cq/Xdz7QwgZVLKFOj8EfKx6I/BjhSlxyO3gNL4HgQb57QC6VL9B7YPT9TPNxTmqckzlhJl1qb7RzB4ws1MWPT/mmlmrmfWZ2YNm1u7kcX1Xmtk8M1sh34cc3wNmhurjiT5kB/CdRmVdmbZetY0C7zn25bIXU/i2yt5TJv8GtX0bQkgLME50e2wHmp22UWd6DDr2q2QbSeE7V7Zhx9YMbBTnOLAstxAlfo3S7fGYY3dHebNjnzLKVXxXyH7csf0u2xiwJogIJ/mSeDgd2yaZTgErNbqtwEnZO6v4zpOIPtk7HN8YS4KKSBI4541Ed6dy6EJ3ohS+BxK+k3hqLkS2BqJnQZFo2hSJntSLgW+AMzq+Bu5WWxEYJlo0drgiZkxIBb/rmLyYjNEDXBuKJzPSEADzgRMVphBqm5+XJxdSCvlEbj8Be4F/dOyVDWB3Xp5cSClkQG63lWm7XW0DeXmSqPdxTomLKtuAejP7S+c3mtljql+oAW96pPxFOqtcHzHeysuTGUQ7ulQEwNPAvjIC9gFPpYiPkXrHmQpAgWif7TVSSRUZ4nanFTPtNaJEO8zsJZl8ltQHLVqSF6y0NE+DUTO70sxWR13g5UKhMOERPxXAtsTAns6VMB3n6QTnthBJhxJJp+wbQoOpq4IgO8QPzOycmR3W+Z95OpkSMcdhcef/RWIAazU624Mlrcy1XVxr08b43N7iJ/Xxql5hEE/fKauDSvARcqvKXo+YrPhD5S1pA3yELFJ50iMmK04kOKeFj5D4pcMZj5isiO9SzVW9HPgImaPynEdMVsQcc6p6Ocgi5LxHTFbUVEgsoMkjJitijuGqXg58hMT7ips8YrLiZpV9aQN8hBxRGfbjS3nEHEeqemUB0KanbZEcH3ZS8FxB6a3k8loQ1FN6lflGcIISz5vi6AZm1YrkUZGcBx6uQf5HiF7cTRDqxXUVsq0SMwDcHzDvUuBf5X4/VN5qhAXgUxFeIHo5nXlvrXyvU/peuCdPPh/iOmBXYuNzFHjGZ04Ds4BngZ8TuXZdKiHJre9Zp94PfAa8oKmyiOgDaJPqS4EXgc+Z/IcBNweE2NqmEOJufXcSvY1/FTiGP7qBV5Rjp2OfdmsbQsgWidlKYgoAdxJ9i98D/KZRH9bRL9sXwDrgjkRsnXIOEepPApcxg/gPajHQ6qUQM8AAAAAASUVORK5CYII=",
  },
};