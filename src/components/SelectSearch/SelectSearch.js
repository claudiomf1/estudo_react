import Dropdown from "react-bootstrap/Dropdown"
import { Form } from "react-bootstrap"
import InputGroup from "react-bootstrap/InputGroup"
import Table from "react-bootstrap/Table"
import { ListGroup } from "react-bootstrap"
import React, { useRef, useLayoutEffect } from "react"
import { useEffect, useState } from "react"
import { clean } from "diacritic"
import diacritics from "diacritics"
function SelectSourch(props) {
   const maxHeight = props.maxHeight || "120px" // default value
   const variant = props.variant || "success" // default value
   const classDropdownToggle = props.classDropdownToggle || ""
   const classDropdownItem = props["dropdown-item"] || ""

   const [isLoading, setisLoading] = useState(true)

   const [dados, setDados] = useState(props.initialData)
   const [titulo, settitulo] = useState(props.titulo) // adicionar estado interno para o título

   useEffect(() => {
      setDados(props.initialData)
   }, [props.initialData])

   useEffect(() => {
      if (dados.length > 0) {
         setisLoading(false)
      }
   }, [dados])

   useEffect(() => {
      settitulo(props.titulo)
   }, [dados, props.titulo])

   function btnInput(e) {
      setDados(ResultSearch(e.target.value, [0], dados))
   }
   //------------------------------------------------------------------

   const clickselect = () => {
      // let input = document.getElementById("searchInput");
      // if (!input || input.value === "") {
      //   alert(input);
      //   createResultInHtml("searchResults", "rowTemplate", [".se-dado"], dados);
      //  }
   }
   function optionSelect(e) {
      let botaoselect = document.getElementById("dropdownMenuButton1")
      // if (e.target && e.target.value)
      {
         botaoselect.textContent = e.target.textContent
         botaoselect.setAttribute("valor", e.target.innerText)
         settitulo(e.target.textContent) // atualizar o título quando uma opção for selecionada

         //         props.onChange(e.target.textContent)
      }
   }
   //---------------------------------------------------------------

   function createResultInHtml(
      searchResults_p,
      rowTemplate_p,
      listaColsTable,
      resultsArray
   ) {
      let searchResultsBox = document.getElementById(searchResults_p) // corpo da table html

      let templateBox = document.getElementById(rowTemplate_p) // modelo da linha da table

      let template = templateBox
      let tr

      searchResultsBox.innerHTML = "" // zerando o corpo da table para cada nova letra digitada o que faz retornar nova consulta

      resultsArray.map((value) => {
         // laço nas linhas

         tr = template.cloneNode(true) // clonando o modelo da linha da table
         listaColsTable.map((col, index) => {
            //laço nas colunas
            //alert(searchResultsBox)
            tr.querySelector(col).textContent = value[index] //atribuindo valor à coluna respectiva da linha em questao
         })
         searchResultsBox.appendChild(tr) // adicionando a linha que ja esta com todos os campos preenchidos na table
      })
   }
   //-------------------------------------------------------------------------------
   /**
    * @indexSearch [0] array com o número da coluna
    * @dados_p o array de dados  (completo)
    */
   function ResultSearch(inputText, indexsSearch, dados_p) {
      const searchInput = clean(inputText).toLowerCase().trim() // pegando tudo que esta digitado no input
      let normalizedInput = diacritics
         .remove(searchInput)
         .replace(/[^a-z0-9\s]/g, "")

      let searchWords = normalizedInput.split(/\s+/) // cria um array das palavras digitadas no input, sendo o separador um ou mais espaços, so nao entendi ainda o motivo disso

      let searchColumnar = [...indexsSearch] // define em quais indices do array trazido do banco de dados sera feita a pesquisa

      // and or
      // let resultsArray =
      //    searchInput === ""
      //       ? props.initialData
      //       : dados_p.filter(function (r) {
      //            // dados_p é o array com todos os dados trazidos do banco

      //            return searchWords.every(function (wordCd) {
      //               return searchColumnar.some(function (colIndexCd) {
      //                  // Removendo acentos da string para comparação
      //                  const colValueCleaned = clean(
      //                     r[colIndexCd].toString()
      //                  ).toLowerCase()
      //                  return colValueCleaned.indexOf(wordCd) !== -1
      //               })
      //            })
      //         })

      const dadosCopy = [...props.initialData] // cria uma nova cópia do array de dados // cria uma cópia do array de dados
      console.log("dadosCopy", dadosCopy)
      console.log("props.initialData", props.initialData)
      let resultsArray = dadosCopy
      // Realiza a busca apenas no resultado anterior, se o novo texto contém o anterior
      //  console.log("searchInput =>", searchInput)
      // console.log("resultsArray =>", resultsArray)
      if (
         resultsArray &&
         resultsArray.length > 0 &&
         resultsArray.some((item) => {
            console.log("item =>", item)
            return item[0]
               .toLowerCase()
               .includes(searchInput.trim().toLowerCase())
         })
      ) {
         resultsArray = resultsArray.filter(function (r) {
            return searchWords.every(function (wordCd) {
               return searchColumnar.some(function (colIndexCd) {
                  const colValueCleaned = clean(
                     r[colIndexCd].toString()
                  ).toLowerCase()
                  return colValueCleaned.indexOf(wordCd) !== -1
               })
            })
         })
      } else {
         // Realiza a busca em todo o array de dados
         resultsArray = dadosCopy.filter(function (r) {
            return searchWords.every(function (wordCd) {
               return searchColumnar.some(function (colIndexCd) {
                  const colValueCleaned = clean(
                     r[colIndexCd].toString()
                  ).toLowerCase()
                  return colValueCleaned.indexOf(wordCd) !== -1
               })
            })
         })
      }

      return resultsArray
   }
   const isAtivo = true
   if (!isLoading || !props.isLoading) {
      return (
         <Dropdown className={`dropdown-item ${isAtivo ? ":active" : ""}`}>
            <Dropdown.Toggle
               valor="Selecione"
               variant={null}
               className={classDropdownToggle}
               aria-expanded="false"
               id="dropdownMenuButton1"
               //onClick={() => clickselect()}
            >
               {titulo}
            </Dropdown.Toggle>
            <Dropdown.Menu>
               <InputGroup className="mb-3">
                  <Form.Control
                     placeholder="Pesquise"
                     id="searchInput"
                     aria-label="Username"
                     aria-describedby="basic-addon1"
                     onInput={btnInput}
                  />
               </InputGroup>
               <Dropdown.Item href="#/action-1">
                  <ListGroup style={{ overflow: "auto", maxHeight: maxHeight }}>
                     <Form>
                        <Table striped bordered hover>
                           <tbody id="searchResults" onClick={optionSelect}>
                              {dados.map(([option], index) => {
                                 return (
                                    <tr key={index}>
                                       <td className="se-dado">{option} </td>
                                    </tr>
                                 )
                              })}
                           </tbody>
                        </Table>
                     </Form>
                  </ListGroup>
               </Dropdown.Item>
            </Dropdown.Menu>
         </Dropdown>
      )
   } else {
      return <div>Cidades...</div>
   }
}
export default SelectSourch
