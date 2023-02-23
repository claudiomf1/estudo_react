const sCd = (iptCd) => {
   const bdcd = wcc
   let idcd = bdcd.getLastRow() - 1
   const nuL = "NULL"
   const status = "Ativo"

   idcd = 100 + idcd

   const user = iptCd.userIdcd

   const nacd = iptCd.nomecd
   const snacd = iptCd.snomecd
   const cfcd = iptCd.cpfcd
   const tpcd = iptCd.tipocd
   let ctgcd = iptCd.categoriacd
   let sxcd = iptCd.sexocd
   const focd = iptCd.fonecd
   const emlcd = iptCd.emailcd
   const cpcd = iptCd.cepcd
   const edcd = iptCd.endcd
   const nucd = iptCd.ncd
   const cpmcd = iptCd.complcd
   const baircd = iptCd.baircd
   const ctcd = iptCd.citycd
   const uffcd = iptCd.ufcd

   if (ctgcd === "Escolha o Categoria...") {
      ctgcd = nuL
   } else {
      ctgcd
   }

   if (sxcd === "Escolha o sexo...") {
      sxcd = nuL
   } else {
      sxcd
   }

   bdcd.appendRow([
      idcd,
      nacd,
      snacd,
      tpcd,
      sxcd,
      cfcd,
      ctgcd,
      cpcd,
      edcd,
      nucd,
      cpmcd,
      baircd,
      ctcd,
      uffcd,
      focd,
      emlcd,
      user,
      todayT,
      status,
      Dia,
      Mes,
      Ano,
   ])
}
