export class Visuel {
    id?;
    version?;
    codeVisuel?;
    codeReg?;
    refExtVisuelDist?;
    dateFinFabrication?;

    constructor(codeRegroupement, codeVisuel, dateFinFab, refExt) {
      this.codeReg = codeRegroupement;
      this.codeVisuel = codeVisuel;
      this.dateFinFabrication = dateFinFab;
      this.refExtVisuelDist = refExt;
      this.version = 1;
    }
}
