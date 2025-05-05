

class Report{
    constructor(
        public id: string,
        public complaintId: string,
        public created_at: Date
    ){}
}

class ReportDatachar{
  constructor(
    public id: string,
    public text: string,
    public count: number
  ){}
}

class ReportCreate{
    constructor(

    ){}
}

export {
    Report,
    ReportCreate,
    ReportDatachar
}
